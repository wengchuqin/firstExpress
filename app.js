var express = require('express');
var app = express();
var userRouter = require('./routes/UserRoute');

//设置静态资源的路径
app.use(express.static('public'));

//设置路由
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.use('/users', userRouter);


//开启服务器
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});





