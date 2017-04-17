const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let UserSchema = new Schema({
  password: {
    type:String,
    default:''
  },
  name: String,
  phonenumber:{
    type:String,
    unique:true
  },
  address_ids:[],
  order_ids:[],
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
});


UserSchema.pre('save', function (next) {
  var user = this;
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }
  next();
});

module.exports = UserSchema;