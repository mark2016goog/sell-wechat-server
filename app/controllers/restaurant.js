const mongoose = require('mongoose');
const RestaurantModel = require('../models/restaurant');

// 120.214436, 30.275334
exports.findByLocation = async function(ctx, next){
  let lng = Number.parseFloat(ctx.query.longitude);
  let lat = Number.parseFloat(ctx.query.latitude); 
  const restaurant = await RestaurantModel.collection.geoNear(lng, lat, {
    spherical: true,
    distanceMultiplier:6371
  }).then(function(res){
    return res;
  });
  ctx.body = restaurant;
}