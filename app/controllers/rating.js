const mongoose = require('mongoose');
const RatingModel = require('../models/rating');

exports.findById = async function (ctx, next) {
  const rating = await RatingModel.findOne({
    restaurant_id: ctx.query.restaurant_id
  }).exec().catch(function (err) {
    console.log(err);
  });
  if (rating) {
    ctx.body = rating;
  } else {
    ctx.body = {
      error: -1,
      message: '数据出错'
    };
  }
  await next();
}