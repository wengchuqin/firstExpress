var express = require('express');
var router = express.Router();
var UserServiceImpl = require('../service/UserService.js');


userService = new UserServiceImpl();

/* GET users listing. */
router.get('/addUser', function (req, res, next) {
    userService.save({name: req.query.name, pwd: req.query.pwd})
    res.send('ok');
});

router.get('/findUsers', function (req, res, next) {
    var users = userService.findUsers(req.query.page, req.query.size);
    res.end( JSON.stringify(users));
});

module.exports = router;
