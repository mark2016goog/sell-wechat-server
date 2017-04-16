const mongoose = require('mongoose');
const Schame = mongoose.Schema;
const ObjectId = Schame.Types.ObjectId;

let OrderSchame = new Schame({
  user:{
    type:ObjectId,
    ref:'User'
  },
  shop_name:String,
  status:Number,
  time:Date,
  good_list:[]
});

module.exports = OrderSchame;