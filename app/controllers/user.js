const mongoose = require('mongoose');
const UserModel = require('../models/user');
const randomString = require('random-string');
/**
 * 密码登录处理
 * 
 * @param {any} req 
 * @param {any} res 
 */
exports.signinPassword = function (ctx) {
  var _user = ctx.request.body;
  UserModel.findOne({
    username: _user.username
  }, function (err, user) {
    if (err) {
      console.log(err);
    }
    if (!user) {
      console.log('用户不存在');
    } else {
      if (user.password == _user.password) {
        console.log('登录成功');
      } else {
        console.log('登录失败');
      }
    }
  });
}
/**
 * 电话号码登录
 * 
 * @param {any} ctx 
 */
// exports.signinPhone = function (ctx) {
//   var _user = ctx.request.body;
//   UserModel.findOne({
//     username: _user.phone_number
//   }, function (err, user) {
//     if (err) {
//       console.log(err);
//     }
//     if (!user) {
//       console.log('用户不存在');
//     } else {
//       if (user.password == _user.password) {
//         console.log('登录成功');
//       } else {
//         console.log('登录失败');
//       }
//     }
//   });
// }
/**
 * 注册用户
 * 
 * @param {any} ctx 
 */
exports.signup = function (ctx) {
  var _user = {
    username:ctx.request.body.username,
    password:ctx.request.body.password,
    name:randomString(8)+randomString(8)
  };
  UserModel.findOne({
    username: ctx.request.body.username
  }, function (err, user) {
    if (err) {
      console.log(err);
    }
    if (!user) {
      user = new UserModel(_user);
      user.save(function (err, user) {   
        if (err) {
          console.log(err);
        } else {
          console.log('注册成功');
        }
      });
    } else {
      console.log('用户名已存在，请登录，或更改用户名继续注册');
    }
  });
}

