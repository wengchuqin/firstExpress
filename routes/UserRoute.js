var express = require('express');
var router = express.Router();
var UserServiceImpl = require('../service/UserService.js');


userService = new UserServiceImpl();

/* GET users listing. */

router.get('/addUser', function (req, res, next) {
    userService.save({name: req.query.name, pwd: req.query.pwd});
    res.send('ok');
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

// 返回hello
router.get('/hello', function (req, res, next) {
    res.end( "hello");
});



module.exports = router;
