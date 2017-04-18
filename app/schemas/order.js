const mongoose = require('mongoose');
const Schame = mongoose.Schema;
const ObjectId = Schame.Types.ObjectId;

let OrderSchame = new Schame({
  shop_name: String,
  status: Number,
  time: Date,
  good_list: []
});

OrderSchame.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }
  next();
});
module.exports = OrderSchame;