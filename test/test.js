// var assert = require('assert');

var UserServiceImpl = require('../service/UserService.js');
userService = new UserServiceImpl();

// userService.save({
//     name:'wengchuqin',
//     pwd:'123456'
// })

//
// var users = userService.findUsers(2, 3);
// console.log(users);


var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});