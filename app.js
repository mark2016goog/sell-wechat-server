const Koa = require('koa');
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost/xiaodiwaimai';
const app = new Koa();

mongoose.connect(DB_URL);

app.use(ctx=>{
  ctx.body = 'hello xiaodiwaimai';
});

app.listen(3000);