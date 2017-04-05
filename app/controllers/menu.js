const mongoose = require('mongoose');
const MenuModel = require('../models/menu');


exports.findById = function(ctx,next){
  return MenuModel.findOne({restaurant_id:ctx.query.restaurant_id}).then(function(menu){
      ctx.menu = JSON.stringify(menu.content);
      return next();
  });
}