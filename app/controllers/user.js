const mongoose = require('mongoose');
const UserModel = require('../models/user');
const randomString = require('random-string');
/**
 * 密码登录处理
 * 
 * @param {any} req 
 * @param {any} res 
 */
exports.signinPassword = async(ctx) => {
  var _user = ctx.request.body;
  let user = await UserModel.find({
    username: _user.username
  }).exec();
  if (user) {
    if (user.password == _user.password) {
      ctx.session.user = user;
      ctx.body = {
        success: 0,
        data: {
          name: user.name,
        }
      }
    } else {
      ctx.body = {
        success: -1,
        data: {
          message: '登录失败'
        }
      }
    }
  }
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
exports.signup = async function (ctx) {
  var _user = {
    username: ctx.request.body.username,
    password: ctx.request.body.password,
    name: randomString(8) + randomString(8)
  };
  let user = await UserModel.find({
    username: ctx.request.body.username
  }).exec();
  if (!user.length) {
    user = new UserModel(_user);
    user.save(function (err) {
      if (err) {
        ctx.send({
          success: -1,
          message: '注册失败'
        });
      } else {
        ctx.send({
          success: 0,
          message: '注册成功'
        });
      }
    }); 
  } else {
    ctx.body = {
      success: -2,
      message: '用户已存在，请重新注册或直接登录'
    }
  }
}