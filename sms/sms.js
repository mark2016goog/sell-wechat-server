"use strict";

const UCPaas = require('./ucpaas');
exports.sendcode = async (code, phonenumber)=>{
  let ucpaas = UCPaas({
    accountSid: '',
    token: '',
    appId: ''
  });
  return await ucpaas.sms({
    "param": code,
    "templateId": "",
    "to": phonenumber
  });
};

exports.randomNum = (n) =>{
  var t = '';
  for (var i = 0; i < n; i++) {
    t += Math.floor(Math.random() * 10);
  }
  return t;
}