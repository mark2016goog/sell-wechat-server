const mongoose = require('mongoose');
const RestaurantModel = require('../models/restaurant');


exports.findByLocation = async function (ctx, next) {
  let lng = Number.parseFloat(ctx.query.longitude);
  let lat = Number.parseFloat(ctx.query.latitude);
  let limit =  Number.parseInt(ctx.query.limit);
  let offset = Number.parseInt(ctx.query.offset);
  const restaurant = await RestaurantModel.aggregate([
    { "$geoNear": {
        "near": {
          "type": "Point",
          "coordinates": [ lng, lat ]
        },
        "spherical": true,
        "distanceField": "distance",
    }},
    { "$skip":  offset},
    { "$limit": limit }

  ]).then(async (res)=>{
    return res;
  });
  ctx.body = restaurant;
}