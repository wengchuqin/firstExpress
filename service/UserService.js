var dbPath = "data/users.json";
var fs = require('fs');


function UserServiceImpl() {
    this.save = function (user) {
        var data = fs.readFileSync(dbPath);
        var users = null;
        try {
            users = JSON.parse(data);
        }catch (e) {
            console.log("读取数据失败", e);
            users = [];
        }

        //把用户传递的对象保存到数组中
        users.push(user);

        fs.writeFileSync(dbPath, JSON.stringify(users));
    };



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
        var data = fs.readFileSync(dbPath);
        var users = JSON.parse(data);
        console.log(users)
        for (var i = 0; i < users.length; i++) {
            if (users[i]["name"] == name && users[i]["pwd"] == pwd) {
                return users[i];
            }else{
               return null;
            }
        }
    }
}


module.exports = UserServiceImpl;