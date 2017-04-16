const mongoose = require('mongooes');
const OrderSchame = require('../schemas/order');
const OrderModel = mongoose.model('Order',OrderSchame);

module.exports = OrderModel;