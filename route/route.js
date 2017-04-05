const Router = require('koa-router');
const User = require('../app/controllers/user');
const Menu = require('../app/controllers/menu');
const Restaurant = require('../app/controllers/restaurant');
const Rating = require('../app/controllers/rating');

const router = new Router();

// user路由
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/user/signup" method="post">
            <p>Name: <input name="username" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/user/signinpassword',User.signinPassword);
router.post('/user/signup',User.signup);

// 查询菜单路由
router.get('/menu/',Menu.findById,function(ctx){
  ctx.body = ctx.menu;
});

//查询评价路由
router.get('/rating/',Rating.findById,function(ctx){
  ctx.body = ctx.rating;
});

//查询餐馆信息
// router.get('/restaurant/',)
module.exports = router;