const mongoose = require('mongoose');
const MenuModel = require('../models/menu');


exports.findById = function(ctx,next){
  return MenuModel.findOne({restaurant_id:ctx.params.restaurant_id}).then(function(menu){
      ctx.menu = JSON.stringify(menu);
      return next();
  });
}