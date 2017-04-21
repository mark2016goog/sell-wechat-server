"use strict";

const UCPaas = require('./ucpaas');
exports.sendcode = async (code, phonenumber)=>{
  let ucpaas = UCPaas({
    accountSid: 'aa65e24d3531456cf7a8d8402812665c',
    token: '3ed1872af851316570dd691ce64cf6b8',
    appId: 'a891fbe444ee4f5a9d1c42239d5b1593'
  });
  return await ucpaas.sms({
    "param": code,
    "templateId": "42568",
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