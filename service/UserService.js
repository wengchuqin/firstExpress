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
    }



    this.findUsers = function (page, size) {
        var data = fs.readFileSync(dbPath);
        var users = JSON.parse(data);

        //截取数组
        var ret = [];
        for (var i = (page - 1) * size; i < users.length && ret.length < size; i++) {
            ret.push(users[i]);
        }

        return ret;
    }
}


module.exports = UserServiceImpl;