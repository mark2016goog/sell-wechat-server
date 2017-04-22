const mongoose = require('mongoose');
const RestaurantModel = require('../models/restaurant');


exports.findByLocation = async function (ctx, next) {
  let lng = Number.parseFloat(ctx.query.longitude);
  let lat = Number.parseFloat(ctx.query.latitude);
  let limit = Number.parseInt(ctx.query.limit);
  let offset = Number.parseInt(ctx.query.offset);
  const restaurant = await RestaurantModel.aggregate([{
      "$geoNear": {
        "near": {
          "type": "Point",
          "coordinates": [lng, lat]
        },
        "spherical": true,
        "distanceField": "distance",
      }
    },
    {
      "$skip": offset
    },
    {
      "$limit": limit
    }

  ]).then(async(res) => {
    return res;
  });
  ctx.body = restaurant;
}
exports.findByLocationNew = async function (ctx, next) {
  let lng = Number.parseFloat(ctx.query.longitude);
  let lat = Number.parseFloat(ctx.query.latitude);
  let limit = Number.parseInt(ctx.query.limit);
  let offset = Number.parseInt(ctx.query.offset);
  const restaurant = await RestaurantModel.aggregate([{
      "$geoNear": {
        "near": {
          "type": "Point",
          "coordinates": [lng, lat]
        },
        "spherical": true,
        "distanceField": "distance",
        query: {
          is_new: true
        }
      }
    },
    {
      "$skip": offset
    },
    {
      "$limit": limit
    }

  ]).then(async(res) => {
    return res;
  });
  ctx.body = restaurant;
}
exports.findByLocationMarket = async function (ctx, next) {
  let lng = Number.parseFloat(ctx.query.longitude);
  let lat = Number.parseFloat(ctx.query.latitude);
  let limit = Number.parseInt(ctx.query.limit);
  let offset = Number.parseInt(ctx.query.offset);
  const restaurant = await RestaurantModel.aggregate([{
      "$geoNear": {
        "near": {
          "type": "Point",
          "coordinates": [lng, lat]
        },
        "spherical": true,
        "distanceField": "distance",
        query: {
          $text: {
            $search: '超市 便利 商店'
          }
        }
      }
    },
    {
      "$skip": offset
    },
    {
      "$limit": limit
    }

  ]).then(async(res) => {
    return res;
  });
  ctx.body = restaurant;
}

exports.findByLocationFruit = async function (ctx, next) {
  let lng = Number.parseFloat(ctx.query.longitude);
  let lat = Number.parseFloat(ctx.query.latitude);
  let limit = Number.parseInt(ctx.query.limit);
  let offset = Number.parseInt(ctx.query.offset);
  const restaurant = await RestaurantModel.aggregate([{
      "$geoNear": {
        "near": {
          "type": "Point",
          "coordinates": [lng, lat]
        },
        "spherical": true,
        "distanceField": "distance",
        query: {
          $text: {
            $search: "水果 鲜果 果 奶"
          }
        }
      }
    },
    {
      "$skip": offset
    },
    {
      "$limit": limit
    }

  ]).then(async(res) => {
    return res;
  });
  ctx.body = restaurant;
}

exports.findByLocationSweet = async function (ctx, next) {
  let lng = Number.parseFloat(ctx.query.longitude);
  let lat = Number.parseFloat(ctx.query.latitude);
  let limit = Number.parseInt(ctx.query.limit);
  let offset = Number.parseInt(ctx.query.offset);
  const restaurant = await RestaurantModel.aggregate([{
      "$geoNear": {
        "near": {
          "type": "Point",
          "coordinates": [lng, lat]
        },
        "spherical": true,
        "distanceField": "distance",
        query: {
          $text: {
            $search: '鲜 奶 糕点 蛋 咖啡 茶'
          }
        }
      }
    },
    {
      "$skip": offset
    },
    {
      "$limit": limit
    }

  ]).then(async(res) => {
    return res;
  });
  ctx.body = restaurant;
}

exports.findByLocationHamburger = async function (ctx, next) {
  let lng = Number.parseFloat(ctx.query.longitude);
  let lat = Number.parseFloat(ctx.query.latitude);
  let limit = Number.parseInt(ctx.query.limit);
  let offset = Number.parseInt(ctx.query.offset);
  const restaurant = await RestaurantModel.aggregate([{
      "$geoNear": {
        "near": {
          "type": "Point",
          "coordinates": [lng, lat]
        },
        "spherical": true,
        "distanceField": "distance",
        query: {
          $text: {
            $search: '汉堡 粥 饺子 盖饭 鸡 烧 烤肉'
          }
        }
      }
    },
    {
      "$skip": offset
    },
    {
      "$limit": limit
    }

  ]).then(async(res) => {
    return res;
  });
  ctx.body = restaurant;
}

exports.findByLocationPunctual = async function (ctx, next) {
  let lng = Number.parseFloat(ctx.query.longitude);
  let lat = Number.parseFloat(ctx.query.latitude);
  let limit = Number.parseInt(ctx.query.limit);
  let offset = Number.parseInt(ctx.query.offset);
  const restaurant = await RestaurantModel.aggregate([{
      "$geoNear": {
        "near": {
          "type": "Point",
          "coordinates": [lng, lat]
        },
        "spherical": true,
        "distanceField": "distance",
        query: {
          order_lead_time: {
            $lte: 27
          }
        }
      }
    },
    {
      "$skip": offset
    },
    {
      "$limit": limit
    }

  ]).then(async(res) => {
    return res;
  });
  ctx.body = restaurant;
}

exports.findByLocationHotpot = async function (ctx, next) {
  let lng = Number.parseFloat(ctx.query.longitude);
  let lat = Number.parseFloat(ctx.query.latitude);
  let limit = Number.parseInt(ctx.query.limit);
  let offset = Number.parseInt(ctx.query.offset);
  const restaurant = await RestaurantModel.aggregate([
      { "$geoNear": {
          "near": {
            "type": "Point",
            "coordinates": [ lng, lat ]
          },
          "spherical": true,
          "distanceField": "distance"
      }
    },
    {
      "$match": {
        $text: {
          $search: '麻 辣 烫 火锅 锅'
        }
      }
    },
    {
      "$skip": offset
    },
    {
      "$limit": limit
    }

  ]).then(async(res) => {
    return res;
  });
  ctx.body = restaurant;
}

exports.findByLocationDelicious = async function (ctx, next) {
  let lng = Number.parseFloat(ctx.query.longitude);
  let lat = Number.parseFloat(ctx.query.latitude);
  let limit = Number.parseInt(ctx.query.limit);
  let offset = Number.parseInt(ctx.query.offset);
  const restaurant = await RestaurantModel.aggregate([{
      "$geoNear": {
        "near": {
          "type": "Point",
          "coordinates": [lng, lat]
        },
        "spherical": true,
        "distanceField": "distance",
        query: {
          rating: {
            $gte: 4.5
          }
        }
      }
    },
    {
      "$skip": offset
    },
    {
      "$limit": limit
    }

  ]).then(async(res) => {
    return res;
  });
  ctx.body = restaurant;
}
exports.findByLocationKeywords = async function (ctx, next) {
  let lng = Number.parseFloat(ctx.query.longitude);
  let lat = Number.parseFloat(ctx.query.latitude);
  let limit = Number.parseInt(ctx.query.limit);
  let offset = Number.parseInt(ctx.query.offset);
  let keyword = ctx.query.keyword
  const restaurant = await RestaurantModel.find({
      $text:{$search:'饭'}
    }).then(async(res) => {
    return res;
    
  });
  ctx.body = restaurant;
}