var express = require('express');
var app = express();
var userRouter = require('./routes/UserRoute');

//设置静态资源的路径
app.use(express.static('public'));



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



// 设置后台可接收的数据格式 x-www...
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type,username");
    next();



    // //设置允许跨域的域名，*代表允许任意域名跨域
    // res.header("Access-Control-Allow-Origin","*");
    // //允许的header类型
    // res.header("Access-Control-Allow-Headers","content-type");
    // //跨域允许的请求方式
    // res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    // if (req.method.toLowerCase() == 'options')
    //     res.send(200);  //让options尝试请求快速结束
    // else
    //     next();
})



//开启服务器
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，服务器访问地址为 http://localhost:8081/users  http://%s:%s", host, port);
});





