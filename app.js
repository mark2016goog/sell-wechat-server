const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const promise = require('bluebird');
const session = require('koa-session2');
const path = require('path')
const convert = require('koa-convert')
const static = require('koa-static')
const Store = require('./Store');

const DB_URL = 'mongodb://localhost/xiaodiwaimai';
const app = new Koa();

const router = require('./route/route')
mongoose.Promise = promise;
mongoose.connect(DB_URL);
const static_path = './wechat';

app.use(convert(static(
  path.join( __dirname,  static_path)
)));
app
  .use(bodyParser())
  .use(session({
    key:'sessionid',
    store:new Store()
  }))
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000);
console.log('server listening 3000 port...');