const Router = require('koa-router');
const User = require('../app/controllers/user');
const Menu = require('../app/controllers/menu');
const Restaurant = require('../app/controllers/restaurant');
const Rating = require('../app/controllers/rating');
const Address = require('../app/controllers/address');
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

/**
 * 数据格式
 * phonenumber:''电话号码
 * password:''//密码
 * 
 */
//密码登录
router.post('/user/signinpassword', User.signinPassword);

// 注册
/**
 * 数据格式
 * phonenumber:''电话号码
 * code:''//密码
 * 
 */
//手机号登录如果没有注册自动注册
router.post('/user/signinphonenumber', User.signinPhoneNumber);


// 设置密码
/**
 * 数据格式
 * {
 *  phonenumber:''//手机号
 *  password:''//密码
 * }
 */
router.post('/user/setpassword', User.setPassword);



//数据格式
/*
{
  _id:'',//地址id新增不传，修改传
  user_id:''//地址对应的user_id   user 与address 为一对多关系
  name:''//姓名
  sex:''//性别
  phonenumber:''电话号码
  address:'' //地址
  detail_address:''//详细地址
  door_number:''//门牌号
  label:''//标签
}

*/
// 设置送货地址
router.post('/user/setaddress',Address.setAddress);
//获取收货地址
/**
 * 数据格式
 * {
 *  phonenumber:''//用户手机号
 * }
 * 
 */
router.get('/user/getaddress',Address.find);
//数据格式
/**
 * {
 *  _id:''//address id
 * }
 */
//删除收货地址
router.post('/user/deleteaddress',Address.delete);


/**
 * 数据格式
 * {
 *  restaurant_id:''
 * }
 */
// 查询菜单路由
router.get('/menu/', Menu.findById);

/**
 * 数据格式
 * {
 *  restaurant_id:'',//餐馆id
 *  limit:''//一次请求几个数据
 *  offset:''//分页参数
 * }
 */
//查询评价路由
router.get('/rating/', Rating.findById);

/**
 * 数据格式
 * {
 *  restaurant_id:'',//餐馆id
 * }
 */
router.get('/ratingcount/', Rating.ratingCount);


/**
 * 数据格式
 * {
 *  latitude:'' //纬度，
 *  longitude:''//经度
 *  limit:''//一次请求几个数据
 *  offset:''//分页参数
 * }
 */
//查询餐馆信息
router.get('/restaurant/', Restaurant.findByLocation);

// 天气接口

/**
 * 数据格式
 * {
 *  latitude:'' //纬度，
 *  longitude:''//经度
 * }
 */
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