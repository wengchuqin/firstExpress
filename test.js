var UserServiceImpl = require('./service/UserService.js');

userService = new UserServiceImpl();

// userService.save({
//     name:'wengchuqin',
//     pwd:'123456'
// })

var users = userService.findUsers(2, 3);
console.log(users)