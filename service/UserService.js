// user持久化操作，用来读写user对象

var dbPath = "data/users.json";
var fs = require('fs');



function UserServiceImpl() {
    // 存储数据到json文件
    this.save = function (user) {
        var data = fs.readFileSync(dbPath);
        try {
            var users = JSON.parse(data);
        }catch (e) {
            console.log("读取数据失败", e);
            users = [];
        }

        //把用户传递的对象保存到数组中
        users.push(user);

        fs.writeFileSync(dbPath, JSON.stringify(users));
    };

    // 存储图片到images文件夹中


    //查找所有用户
    this.findUsers = function (page, size) {
        var data = fs.readFileSync(dbPath);
        var users = JSON.parse(data);

        //截取数组
        var ret = [];
        for (var i = (page - 1) * size; i < users.length && ret.length < size; i++) {
            ret.push(users[i]);
        }


        return ret;
    };


    //{"name":"wcq","pwd":"123"},{"name":"wcq","pwd":"123"}
    // 根据用户名和密码查找用户，如果存在，返回该对象。如果不存在，返回 null；
    this.find = function (name, pwd) {
        //从文件里面读取数据
        console.log("进入find， 参数name:%s, pwd:%s", name, pwd);
        var data = fs.readFileSync(dbPath);
        var users = JSON.parse(data);
        for (var i = 0; i < users.length; i++) {
            console.log("find user[%s].name=%s, user[%s].pwd=%s", i, users[i]["name"], i, users[i]["pwd"]);
            if (users[i]["name"] == name && users[i]["pwd"] == pwd) {
                console.log("找到了", users[i]);
                return users[i];
            }
        }
        console.log("找不到，返回null")
        return null;
    }
}


module.exports = UserServiceImpl;