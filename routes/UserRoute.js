
// 以下路由的路径均为 http://localhost:8081/users 开头


var express = require('express');
var router = express.Router();
var UserServiceImpl = require('../service/UserService.js');
userService = new UserServiceImpl();

/* GET users listing. */
//接收的数据req.body为对象。
//把文件中的字符串转换为对象
// 把用户提交的数据添加到对象中再转化为字符串
// 重新添加到db文件中。
router.get('/addUser', function (req, res, next) {
    // 这里的 req.query 是一个 json字符串对象
    userService.save({name: req.query.name, pwd: req.query.pwd});
    res.send( req.query);
});

//分页查询user
router.get('/findAllUsers', function (req, res, next) {
    var users = userService.findUsers(req.query.page, req.query.size);
    res.end( JSON.stringify(users));
});

// 通过用户名密码查询用户是否存在
router.get('/findUsers', function (req, res, next) {

    var user = userService.find(req.query.name, req.query.pwd);
    res.end( JSON.stringify(user));
});

// 用post实现登录
router.post('/login', function (req, res, next) {
    console.log("/login req.body.name:%s, req.body.pwd:%s", req.body.name , req.body.pwd) ;
    var user = userService.find(req.body.name, req.body.pwd);
    console.log(user) 
    res.send(user);
    // 响应给浏览器：
    // res.json( JSON.stringify(user));
});


// 测试，返回hello
router.get('/hello', function (req, res, next) {
    res.end( "hello");
});

// 获取当前登录用户
router.get('/user/loginUser', function (req, res, next) {
    // 为什么无法获取 req.body
    res.end( "进入loginUser了");
});

// 照片上传的接口，图片来了就存到data中的img文件夹中
// router.get('/files/fileUpload', function (req, res, next) {
//
//     res.end( "file");
// });
//

// 上传图片接口，最后面再看
// var fs = require('fs');
// var multer = require("multer");
// var dest = '../data/images/'
// var upload = multer({ dest: dest });
//
// router.post('/files/fileUpload', upload.array('images', 12), function(req, res, next) {
//     var files = req.files;
//     var dir = req.body.dirname;
//     for(var i = 0; i < files.length; i++) {
//         var file = files[i];
//         fs.renameSync(file.destination+'/'+ file.filename, file.destination+'/'+dir+'/'+ file.originalname);
//     }
//     res.json({
//         code: 1000,
//         desc: '成功导入'+files.length+ '张图片'
//     });
// });



module.exports = router;
