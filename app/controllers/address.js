const mongoose = require('mongoose');
const AddressModel = require('../models/address');
const UserModel = require('../models/user');

exports.find = async (ctx,next)=>{
  const result = await UserModel.findOne({phonenumber:ctx.query.phonenumber},{address_ids:1});
  console.log(result);
  if(result){
    const address = await AddressModel.find({_id:{$in:result.address_ids}});
    ctx.body = {
      success:0,
      message:'获取收货地址成功',
      data:address
    }
  }
  await next();
}
exports.setAddress = async (ctx,next)=>{
  let _address = ctx.request.body;
  if(_address._id){
    let address = await AddressModel.update({_id:_address._id},{
      name:_address.name,
      sex:_address.sex,
      phonenumber:_address.phonenumber,
      address:_address.address,
      detail_address:_address.detail_address,
      door_number:_address.door_number,
      label:_address.label
    }).exec();
    if(address.ok == 1 && address.n == 1){
      ctx.body ={
        success:0,
        message:'更新地址成功'
      }
    }
    else{
      ctx.body ={
        success:-2,
        message:'更新地址失败'
      }
    }
  }
  else{
    let new_address= {};
    for(let item in _address){
      if(_address[item]){
        new_address[item] =  _address[item];
      }
    }
    try{
      let _id=_address.user_id;
      let address = await AddressModel.create(new_address);
      let user = await UserModel.update({_id:_id},{$addToSet:{address_ids:address._id}}).exec();
      if(user.ok == 1 && user.n == 1){
        ctx.body = {
          success:0,
          message:'收货地址添加成功！'
        }
      }
    }catch(e){
      console.log(e);
      ctx.body ={
        success:-1,
        message:'收货地址添加失败'
      }
    }
  }
}

exports.delete = async (ctx,next)=>{
  let _id = ctx.request.body._id;
  try{
    const address = await AddressModel.deleteOne({_id:_id});
    if(address.result.ok == 1 && address.result.n == 1){
      ctx.body = {
        success:0,
        message:'删除成功'
      }
    }
  }catch(e){
    ctx.body = {
      success:-1,
      message:'删除失败'
    }
  }
}