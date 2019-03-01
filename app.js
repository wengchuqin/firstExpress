var express = require('express');
var app = express();
var userRouter = require('./routes/UserRoute');

//设置静态资源的路径
app.use(express.static('public'));

// app.use("*", function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     if (req.method === 'OPTIONS') {
//         res.send(200)
//     } else {
//         next()
//     }
// });


// body-parser配置
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// body-parser使用,就是下面路由的第二项

//设置路由
app.get('/', function (req, res) {
    res.send('Hello World');
});

app.post('/why', function (req, res) {
    res.send(req.body);
});

app.use('/users', userRouter);


//开启服务器
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://localhost:8081/users  http://%s:%s", host, port);
});





