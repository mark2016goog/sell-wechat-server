const mongoose = require('mongoose');
const RatingModel = require('../models/rating');

exports.findById = async function (ctx, next) {
  let limit = ctx.query.limit;
  let offset = ctx.query.offset;
  const rating = await RatingModel.find({
    restaurant_id: ctx.query.restaurant_id
  }).limit(limit).skip(offset).exec().catch(function (err) {
    console.log(err);
  });
  if (rating) {
    ctx.body = rating;
  } else {
    ctx.body = {
      success: -1,
      message: '数据出错'
    };
  }
}