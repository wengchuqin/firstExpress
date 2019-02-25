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
router.get('/findUsers', function (req, res, next) {
    var user = userService.find(req.query.name, req.query.pwd);
    res.end( JSON.stringify(user));
});


//实现people接口，返回people字符串
router.get('/people', function (req, res, next) {
    res.end("people");
});

module.exports = router;
