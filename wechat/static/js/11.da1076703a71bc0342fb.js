webpackJsonp([11],{100:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"header-top-bar",data:function(){return{}},props:{title:{type:String},is_arrow_show:{type:Boolean,default:!1},right_text:{type:String,default:""}},methods:{back:function(){this.$emit("back")},switchLoginModel:function(){this.$emit("switchLoginModel")}}}},114:function(e,n,t){n=e.exports=t(77)(),n.push([e.i,".index-footer{position:fixed;border-top:1px solid #ccc;height:50px;width:100%;bottom:0;left:0;z-index:1;background-color:hsla(0,0%,100%,.7)}.footer-tab{display:-webkit-box;display:-ms-flexbox;display:flex}.footer-tab-item{text-decoration:none;display:block;color:#333;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center}.footer-tab .router-link-active{color:#0096ff}.footer-icon{display:block;height:20px;font-size:20px;padding:7px 0 2px}.footer-tab-item-content{height:20px;font-size:14px;display:block}","",{version:3,sources:["C:/Users/wd/Desktop/sell-wechat/src/components/footer/index-footer.vue"],names:[],mappings:"AACA,cACE,eAAgB,AAChB,0BAA2B,AAC3B,YAAa,AACb,WAAY,AACZ,SAAU,AACV,OAAQ,AACR,UAAW,AACX,mCAA0C,CAC3C,AACD,YACE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,iBACE,qBAAsB,AACtB,cAAe,AACf,WAAY,AACZ,mBAAoB,AAChB,oBAAqB,AACjB,YAAa,AACrB,iBAAmB,CACpB,AACD,gCACE,aAAwB,CACzB,AACD,aACE,cAAe,AACf,YAAa,AACb,eAAgB,AAChB,iBAAmB,CACpB,AACD,yBACE,YAAa,AACb,eAAgB,AAChB,aAAe,CAChB",file:"index-footer.vue",sourcesContent:["\n.index-footer {\n  position: fixed;\n  border-top: 1px solid #ccc;\n  height: 50px;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.7)\n}\n.footer-tab {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.footer-tab-item {\n  text-decoration: none;\n  display: block;\n  color: #333;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  text-align: center;\n}\n.footer-tab .router-link-active {\n  color: rgb(0, 150, 255);\n}\n.footer-icon {\n  display: block;\n  height: 20px;\n  font-size: 20px;\n  padding: 7px 0 2px;\n}\n.footer-tab-item-content {\n  height: 20px;\n  font-size: 14px;\n  display: block;\n}\n\n"],sourceRoot:""}])},115:function(e,n,t){t(118);var o=t(21)(t(119),t(117),null,null);e.exports=o.exports},117:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"index-footer"},[t("div",{staticClass:"footer-tab"},[t("router-link",{staticClass:"footer-tab-item",attrs:{to:"/index"}},[t("i",{staticClass:"iconfont icon-shouye-shouye footer-icon"}),t("span",{staticClass:"footer-tab-item-content"},[e._v("首页")])]),e._v(" "),t("router-link",{staticClass:"footer-tab-item",attrs:{to:"/order"}},[t("i",{staticClass:"iconfont icon-dingdan footer-icon"}),t("span",{staticClass:"footer-tab-item-content"},[e._v("订单")])]),e._v(" "),t("router-link",{staticClass:"footer-tab-item",attrs:{to:"/personcenter"}},[t("i",{staticClass:"iconfont icon-gerenzhongxin footer-icon"}),t("span",{staticClass:"footer-tab-item-content"},[e._v("我的")])])],1)])},staticRenderFns:[]}},118:function(e,n,t){var o=t(114);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(78)("3eb30a61",o,!0)},119:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"indexfooter",data:function(){return{}}}},269:function(e,n,t){n=e.exports=t(77)(),n.push([e.i,".personcenter[data-v-f58e48ec]{width:100%;background:#f4f4f4}.container[data-v-f58e48ec]{background-color:#fff;margin-top:20px}.account[data-v-f58e48ec]{display:-webkit-box;display:-ms-flexbox;display:flex;height:110px;background-color:#0096ff;padding-top:45px}.account .person-icon[data-v-f58e48ec]{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;height:110px}.account .person-icon img[data-v-f58e48ec]{width:70px;height:70px;border-radius:50%;margin:20px 10px 0}.account .login-box[data-v-f58e48ec]{-webkit-box-flex:1;-ms-flex:1;flex:1;color:#fff;padding-top:30px}.account .login-box .login-signin[data-v-f58e48ec]{font-size:20px;line-height:24px;margin-bottom:10px}.personcenter .person-info[data-v-f58e48ec]{display:-webkit-box;display:-ms-flexbox;display:flex;background:#fff;text-align:center;border-bottom:1px solid #d7d7d7;font-size:12px}.personcenter .person-info div[data-v-f58e48ec]{padding:20px;box-sizing:border-box;border-right:1px solid #d7d7d7;-webkit-box-flex:1;-ms-flex:1;flex:1}.personcenter .person-info div[data-v-f58e48ec]:last-child{border-right:none}.personcenter .person-info .iconfont[data-v-f58e48ec]{font-size:24px;margin-bottom:10px;display:block}.personcenter .person-info .balance .iconfont[data-v-f58e48ec]{color:#f90}.personcenter .person-info .discount .iconfont[data-v-f58e48ec]{color:#ff5f3e}.personcenter .person-info .integral .iconfont[data-v-f58e48ec]{color:#6ac20b}.personcenter .details[data-v-f58e48ec]{border-top:1px solid #ccc;border-bottom:1px solid #ccc;padding:0 15px}.personcenter .details .details-item[data-v-f58e48ec]{position:relative;height:40px;line-height:40px;font-size:16px;border-bottom:1px solid #ccc}.personcenter .details .details-item[data-v-f58e48ec]:last-child{border:none}.personcenter .details .details-item .iconfont[data-v-f58e48ec]{font-size:16px;padding:0 5px}.personcenter .details .details-item .icon-arrow[data-v-f58e48ec]{padding:0;font-size:20px;display:inline-block;position:absolute;right:0;top:50%;margin-top:-20px}.login-description[data-v-f58e48ec]{font-size:14px}","",{version:3,sources:["C:/Users/wd/Desktop/sell-wechat/src/components/body/body-personcenter.vue"],names:[],mappings:"AACA,+BACE,WAAY,AACZ,kBAAoB,CACrB,AACD,4BACG,sBAAsB,AACtB,eAAiB,CACnB,AACD,0BACC,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,aAAc,AACd,yBAAiC,AACjC,gBAAkB,CAClB,AACD,uCACE,mBAAoB,AAChB,mBAAoB,AAChB,eAAgB,AACxB,YAAc,CACf,AACD,2CACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,kBAAoB,CACrB,AACD,qCACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,WAAY,AACZ,gBAAkB,CACnB,AACD,mDACE,eAAgB,AAChB,iBAAkB,AAClB,kBAAoB,CACrB,AACD,4CACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,gBAAiB,AACjB,kBAAmB,AACnB,gCAAiC,AACjC,cAAgB,CACjB,AACD,gDACE,aAAc,AACd,sBAAuB,AACvB,+BAAgC,AAChC,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACjB,AACD,2DACE,iBAAmB,CACpB,AACD,sDACE,eAAgB,AAChB,mBAAoB,AACpB,aAAe,CAChB,AACD,+DACE,UAAe,CAChB,AACD,gEACE,aAAe,CAChB,AACD,gEACE,aAAe,CAChB,AACD,wCACE,0BAA2B,AAC3B,6BAA8B,AAC9B,cAAgB,CACjB,AACD,sDACE,kBAAmB,AACnB,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,4BAA8B,CAC/B,AACD,iEACE,WAAa,CACd,AACD,gEACE,eAAgB,AAChB,aAAc,CACf,AACD,kEACE,UAAW,AACX,eAAgB,AAChB,qBAAsB,AACtB,kBAAmB,AACnB,QAAS,AACT,QAAS,AACT,gBAAkB,CACnB,AACD,oCACE,cAAgB,CACjB",file:"body-personcenter.vue",sourcesContent:["\n.personcenter[data-v-f58e48ec] {\n  width: 100%;\n  background: #f4f4f4;\n}\n.container[data-v-f58e48ec]{\n   background-color:#fff;\n   margin-top: 20px;\n}\n.account[data-v-f58e48ec]{\n display: -webkit-box;\n display: -ms-flexbox;\n display: flex;\n height: 110px;\n background-color: rgb(0,150,255);\n padding-top: 45px;\n}\n.account .person-icon[data-v-f58e48ec]{\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px;\n  height: 110px;\n}\n.account .person-icon img[data-v-f58e48ec]{\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  margin: 20px 10px 0;\n}\n.account .login-box[data-v-f58e48ec]{\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #fff;\n  padding-top: 30px;\n}\n.account .login-box .login-signin[data-v-f58e48ec]{\n  font-size: 20px;\n  line-height: 24px;\n  margin-bottom: 10px;\n}\n.personcenter .person-info[data-v-f58e48ec]{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background: #fff;\n  text-align: center;\n  border-bottom: 1px solid #d7d7d7;\n  font-size: 12px;\n}\n.personcenter .person-info div[data-v-f58e48ec]{\n  padding: 20px;\n  box-sizing: border-box;\n  border-right: 1px solid #d7d7d7;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.personcenter .person-info div[data-v-f58e48ec]:last-child{\n  border-right: none;\n}\n.personcenter .person-info .iconfont[data-v-f58e48ec]{\n  font-size: 24px;\n  margin-bottom: 10px;\n  display: block;\n}\n.personcenter .person-info .balance .iconfont[data-v-f58e48ec]{\n  color: #ff9900;\n}\n.personcenter .person-info .discount .iconfont[data-v-f58e48ec]{\n  color: #ff5f3e;\n}\n.personcenter .person-info .integral .iconfont[data-v-f58e48ec]{\n  color: #6ac20b;\n}\n.personcenter .details[data-v-f58e48ec]{\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  padding: 0 15px;\n}\n.personcenter .details .details-item[data-v-f58e48ec]{\n  position: relative;\n  height: 40px;\n  line-height: 40px;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n}\n.personcenter .details .details-item[data-v-f58e48ec]:last-child{\n  border: none;\n}\n.personcenter .details .details-item .iconfont[data-v-f58e48ec]{\n  font-size: 16px;\n  padding:0 5px;\n}\n.personcenter .details .details-item .icon-arrow[data-v-f58e48ec]{\n  padding: 0;\n  font-size: 20px;\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -20px;\n}\n.login-description[data-v-f58e48ec]{\n  font-size: 14px;\n}\n"],sourceRoot:""}])},288:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"personcenter"},[t("v-topbar",{attrs:{title:e.topbar.title}}),e._v(" "),t("div",{staticClass:"account"},[t("div",{staticClass:"person-icon"},[t("img",{attrs:{src:e.person_icon,alt:""}})]),e._v(" "),t("div",{staticClass:"login-box",on:{click:e.login}},[t("div",{staticClass:"login-signin"},[e._v(e._s(e.user_info.name||"登录/注册"))]),e._v(" "),t("div",{staticClass:"login-description"},[e._v(e._s(e.phonenumber||"登录后享受更多特权"))])])]),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"container"},[t("ul",{staticClass:"details"},[e.is_login?t("li",{staticClass:"details-item",on:{click:e.manageAddress}},[t("i",{staticClass:"iconfont icon-dizhi",staticStyle:{color:"rgb(0,150,255)"}}),e._v("收货地址管理"),t("i",{staticClass:"iconfont icon-arrow"})]):e._e(),e._v(" "),e.is_login?t("li",{staticClass:"details-item"},[t("i",{staticClass:"iconfont icon-daijinquan",staticStyle:{color:"rgb(255, 153, 0)"}}),e._v("商家代金券"),t("i",{staticClass:"iconfont icon-arrow"})]):e._e(),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e.is_login?t("li",{staticClass:"details-item"},[t("i",{staticClass:"iconfont icon-kefudianhua",staticStyle:{color:"rgb(0, 150, 255)"}}),e._v("客服电话"),t("i",{staticClass:"iconfont icon-arrow"})]):e._e()])]),e._v(" "),t("v-footer")],1)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"person-info"},[t("div",{staticClass:"balance"},[t("span",{staticClass:"iconfont  icon-balance"}),e._v("余额")]),e._v(" "),t("div",{staticClass:"discount"},[t("span",{staticClass:"iconfont  icon-youhui"}),e._v("优惠")]),e._v(" "),t("div",{staticClass:"integral"},[t("span",{staticClass:"iconfont  icon-jifen"}),e._v("积分")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{staticClass:"details-item"},[t("i",{staticClass:"iconfont icon-yijianfankui",staticStyle:{color:"rgb(0, 255, 222)"}}),e._v("意见反馈"),t("i",{staticClass:"iconfont icon-arrow"})])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{staticClass:"details-item"},[t("i",{staticClass:"iconfont icon-changjianwenti",staticStyle:{color:"rgb(255, 0, 0)"}}),e._v("常见问题"),t("i",{staticClass:"iconfont icon-arrow"})])}]}},305:function(e,n,t){var o=t(269);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(78)("125f638e",o,!0)},317:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(97),i=t.n(o),a=t(115),s=t.n(a),A=t(8),r=t(22),c=t.n(r);n.default={name:"personcenter",data:function(){return{topbar:{title:"个人中心"},user_info:{},is_login:!1}},methods:{login:function(){this.is_login?A.a.push("/user/accountsetting"):A.a.push("/user/loginphonenumber")},manageAddress:function(){A.a.push("/sendaddress")}},components:{"v-topbar":i.a,"v-footer":s.a},created:function(){var e=this;c.a.get("/user/userinfo").then(function(n){0==n.data.success?(e.user_info=n.data.data,e.is_login=!0):-1==n.data.success&&(e.is_login=!1)})},computed:{person_icon:function(){return this.user_info.avatar||"http://xiaodiwaimai.oss-cn-shenzhen.aliyuncs.com/default_person_icon.png"},phonenumber:function(){return this.user_info.phonenumber?this.user_info.phonenumber.substr(0,3)+"****"+this.user_info.phonenumber.substr(7,4):""}}}},83:function(e,n,t){t(305);var o=t(21)(t(317),t(288),"data-v-f58e48ec",null);e.exports=o.exports},96:function(e,n,t){n=e.exports=t(77)(),n.push([e.i,".header-top-bar[data-v-a46655ea]{position:fixed;top:0;left:0;height:45px;width:100%;background-color:#0096ff;z-index:1;line-height:45px;font-size:18px;color:#fff;text-align:center;box-sizing:border-box}.icon-arrow[data-v-a46655ea]{position:absolute;left:8px;display:inline-block;width:30px;font-size:24px;color:#fff;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.right-text[data-v-a46655ea]{font-size:14px;display:inline-block;position:absolute;right:10px;height:100%}","",{version:3,sources:["C:/Users/wd/Desktop/sell-wechat/src/components/header/header-top-bar.vue"],names:[],mappings:"AACA,iCACI,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,YAAa,AACb,WAAY,AACZ,yBAAmC,AACnC,UAAW,AACX,iBAAkB,AAClB,eAAgB,AAChB,WAAY,AACZ,kBAAmB,AACnB,qBAAuB,CAC1B,AACD,6BACI,kBAAmB,AACnB,SAAU,AACV,qBAAsB,AACtB,WAAY,AACZ,eAAgB,AAChB,WAAY,AACZ,iCAAkC,AAC1B,wBAA0B,CACrC,AACD,6BACE,eAAgB,AAChB,qBAAsB,AACtB,kBAAmB,AACnB,WAAY,AACZ,WAAa,CACd",file:"header-top-bar.vue",sourcesContent:["\n.header-top-bar[data-v-a46655ea]{\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 45px;\n    width: 100%;\n    background-color: rgb(0, 150, 255);\n    z-index: 1;\n    line-height: 45px;\n    font-size: 18px;\n    color: #fff;\n    text-align: center;\n    box-sizing: border-box;\n}\n.icon-arrow[data-v-a46655ea]{\n    position: absolute;\n    left: 8px;\n    display: inline-block;\n    width: 30px;\n    font-size: 24px;\n    color: #fff;\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.right-text[data-v-a46655ea]{\n  font-size: 14px;\n  display: inline-block;\n  position: absolute;\n  right: 10px;\n  height: 100%;\n}\n"],sourceRoot:""}])},97:function(e,n,t){t(99);var o=t(21)(t(100),t(98),"data-v-a46655ea",null);e.exports=o.exports},98:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"header-top-bar"},[t("i",{directives:[{name:"show",rawName:"v-show",value:e.is_arrow_show,expression:"is_arrow_show"}],staticClass:"iconfont icon-arrow",on:{click:e.back}}),e._v("\n "+e._s(e.title)+"\n "),t("span",{staticClass:"right-text",on:{click:e.switchLoginModel}},[e._v(e._s(e.right_text))])])},staticRenderFns:[]}},99:function(e,n,t){var o=t(96);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(78)("418e3127",o,!0)}});
//# sourceMappingURL=11.da1076703a71bc0342fb.js.map