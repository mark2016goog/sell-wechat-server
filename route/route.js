const Router = require('koa-router');
const User = require('../app/controllers/user');
const Menu = require('../app/controllers/menu');
const Restaurant = require('../app/controllers/restaurant');
const Rating = require('../app/controllers/rating');
const superagent = require('superagent');

const router = new Router();

// user路由
router.get('/', async(ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
        <form action="/user/signin" method="post">
            <p>Name: <input name="username" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/user/signinpassword', User.signinPassword);
router.get('/user/signinpassword', async(ctx) => {
  ctx.response.body = `<h1>Index</h1>
        <form action="/user/signinpassword" method="post">
            <p>Name: <input name="username" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});
// 注册
router.post('/user/signup', User.signup);
router.get('/user/signup', async(ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
        <form action="/user/signup" method="post">
            <p>Name: <input name="username" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

// 查询菜单路由
router.get('/menu/', Menu.findById);

//查询评价路由
router.get('/rating/', Rating.findById);
router.get('/ratingcount/',Rating.ratingCount);

//查询餐馆信息
router.get('/restaurant/', Restaurant.findByLocation);

// 天气接口
router.get('/weather/', async function (ctx, next) {
  const data = await superagent.get('http://mainsite-restapi.ele.me/bgs/weather/current?latitude=' + ctx.query.latitude + '&longitude=' + ctx.query.longitude).then(function (res) {
    var path = res.body.image_hash;
    if (path.substr(-3) == 'png') {
      path = path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + '.png';
    } else {
      path = path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + '.jpeg';
    }
    var data = {
      temperature: res.body.temperature,
      description: res.body.description,
      image_path: 'http://fuss10.elemecdn.com/' + path + '?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/'
    }
    return data;
  });
  ctx.body = data;
});

// search查询接口
router.get('/search/', async function (ctx, next) {
  let keyword = ctx.query.keyword;
  let result = await superagent.get('https://mainsite-restapi.ele.me/bgs/poi/search_poi_nearby?keyword=' + keyword + '&offset=0&limit=20').then(function (res) {
    return res.body;
  });
  ctx.body = {
    success: 0,
    data: result
  };
});
module.exports = router;