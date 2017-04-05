const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const promise = require('bluebird');

const DB_URL = 'mongodb://localhost/xiaodiwaimai';
const app = new Koa();

const router = require('./route/route')
mongoose.Promise = promise;
mongoose.connect(DB_URL);

app
  .use(bodyParser())
  .use(router.routes());

app.listen(3000);
console.log('server listening 3000 port...');