webpackJsonp([1],{"2X2S":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"Footer",props:{ENV:Object,footerData:Array},data:function(){return{}}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.$style.root},[s("div",{class:e.$style.container},[s("ul",{class:e.$style.ulBlock},e._l(e.footerData,function(t,n){return s("li",{key:n,class:e.$style.liBlock},[e._v(e._s(t.key)+" : "+e._s(t.value))])}))])])},staticRenderFns:[]};var o={name:"Entry",components:{Footer:s("VU/8")(n,r,!1,function(e){this.$style=s("J1Gm")},null,null).exports},data:function(){return{footerData:[{key:"备案信息",value:"冀ICP备15027350号-1"},{key:"域名",value:"www.xiaoluzhu.net"},{key:"邮箱",value:"139009759@qq.com"}],commonFooter:{}}}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:this.$style.root},[t("transition",[t("router-view")],1),this._v(" "),t("Footer",{attrs:{ENV:this.commonFooter,footerData:this.footerData}})],1)},staticRenderFns:[]};var i=s("VU/8")(o,a,!1,function(e){this.$style=s("nOe7")},null,null);t.default=i.exports},"5Y3P":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("mvHQ"),s("pFYg");var n=s("Av7u"),r=s.n(n),o="kingj-xiaoluzhu.",a="xiaoluzhu.-kingj";var i={en:function(e){return function(e,t,s){return t=r.a.enc.Utf8.parse(t),s=r.a.enc.Utf8.parse(s),r.a.AES.encrypt(e,t,{iv:s,mode:r.a.mode.CBC,padding:r.a.pad.Pkcs7}).toString()}(e,o,a)},de:function(e){return t=e,s=o,n=a,s=r.a.enc.Utf8.parse(s),n=r.a.enc.Utf8.parse(n),r.a.AES.decrypt(t,s,{iv:n,mode:r.a.mode.CBC,padding:r.a.pad.Pkcs7}).toString(r.a.enc.Utf8);var t,s,n}},c=s("p+I1"),l=s.n(c),u=s("P3v/"),d=s("dBs+"),p=s.n(d),f={name:"Register",components:{dragVerify:l.a,TopNav:u.a},data:function(){return{memberName:"",memberPassword:"",checkPassword:"",quickPass:{width:320,height:40,text:"按住滑块，拖动到最右边",successText:"验证通过",background:"#d7d8d9",progressBarBg:"#00c1de",color:"#4d4d4d",completedBg:"#67c23a",handlerBg:"#fff",handlerIcon:"iconfont icon-doubleright",textSize:"12px",successIcon:"iconfont icon-check-circle",circle:!1},menusType:{type:"horizontal",target:"entry",textColor:"#373D41",logoSrc:p.a,border:"border-bottom: 1px solid #D7D8D9;"},menus:[{name:"首页",path:"/home/index"}],tips:{title:"已有账号？",label:"快速登陆>",path:"/entry/login"}}},methods:{postMsg:function(){var e=i.en(this.memberPassword);console.log(e)}}},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.$style.root},[s("TopNav",{attrs:{ENV:e.menusType,menus:e.menus}}),e._v(" "),s("div",{class:e.$style.container},[s("div",{class:e.$style.registerBlock},[s("div",{class:e.$style.formBlock},[s("div",{class:e.$style.registerHead},[e._v("欢迎注册小鹿猪")]),e._v(" "),s("div",{class:e.$style.registerTips},[s("span",[e._v(e._s(e.tips.title))]),e._v(" "),s("router-link",{class:e.$style.tipLinks,attrs:{to:e.tips.path}},[e._v(e._s(e.tips.label))])],1),e._v(" "),s("form",{class:e.$style.form,attrs:{action:""}},[s("div",{class:e.$style.registerInput},[s("el-input",{attrs:{placeholder:"设置会员名"},model:{value:e.memberName,callback:function(t){e.memberName=t},expression:"memberName"}})],1),e._v(" "),s("div",{class:e.$style.registerInput},[s("el-input",{attrs:{placeholder:"设置你的登陆密码"},model:{value:e.memberPassword,callback:function(t){e.memberPassword=t},expression:"memberPassword"}})],1),e._v(" "),s("div",{class:e.$style.registerInput},[s("el-input",{attrs:{placeholder:"设再次输入你的密码"},model:{value:e.checkPassword,callback:function(t){e.checkPassword=t},expression:"checkPassword"}})],1),e._v(" "),s("div",{class:e.$style.registerInputMobile},[s("span",{class:e.$style.contryCode},[e._v("+86")]),e._v(" "),s("span",{class:e.$style.inputMobile},[s("el-input",{attrs:{placeholder:"请输入手机号码"},model:{value:e.checkPassword,callback:function(t){e.checkPassword=t},expression:"checkPassword"}})],1)]),e._v(" "),s("div",{class:e.$style.quickPass},[s("drag-verify",{ref:"quickPass",attrs:{width:e.quickPass.width,height:e.quickPass.height,text:e.quickPass.text,"success-text":e.quickPass.successText,background:e.quickPass.background,"progress-bar-bg":e.quickPass.progressBarBg,"completed-bg":e.quickPass.completedBg,"handler-bg":e.quickPass.handlerBg,"handler-icon":e.quickPass.handlerIcon,"text-size":e.quickPass.textSize,"success-icon":e.quickPass.successIcon,circle:e.quickPass.circle,color:e.quickPass.color}})],1),e._v(" "),s("el-button",{class:e.$style.registerSubmit,attrs:{type:"text"},on:{click:e.postMsg}},[e._v("\n              注册\n            ")])],1)])])])],1)},staticRenderFns:[]};var m=s("VU/8")(f,v,!1,function(e){this.$style=s("M7EC")},null,null);t.default=m.exports},DfPB:function(e,t){},E3ct:function(e,t){},J1Gm:function(e,t){e.exports={root:"_2AGZVCfC5OEq_nCDvvpI7__0",container:"ngTuEkIT30iKrlfzBOw0e_0",ulBlock:"LqxqdE9b4ANUdqOstDXJj_0",liBlock:"Bx-PJTDRPxmCJnZaKE8hx_0"}},Ki5I:function(e,t){e.exports={root:"_3OpD0-OWeg0HWjjTjUdEeX_0",container:"BsZ_DrY8zRN3ijaC2yCcU_0",logo:"_18QvrYkMwf-0H2FQJfdK2H_0",menus:"_3FXeXO_EYs86bo82O-GjOi_0",left:"BwpA7P0LfO3mOa3ASEg-P_0"}},L8Y5:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:this.$style.root},[t("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"Index"},n,!1,function(e){this.$style=s("W2cd")},null,null);t.default=r.exports},M7EC:function(e,t){e.exports={root:"_3GfQExugI44Kk8Rl3DVhFw_0",container:"_57mP1_qr2G4QqPyldDzz1_0",registerBlock:"_2Jg4kU9beaXnuRXe3K-O5p_0",formBlock:"hs5YBfsokjSTuLr4aWNSF_0",registerTips:"_2CA52ENgOy2uoSL_4f1NyX_0",tipLinks:"_38QqFyT8q0aJvb4zm06I0v_0",registerHead:"_1SDfueNpsZZFCMbL3YFLDY_0",form:"_2A8jb-rvEqsrh08hVSwtUa_0",registerInput:"_1XOMjuq-BigyHJpBSDGZ2o_0",registerInputMobile:"_2ta4KF-KsyHJK_ESlNcgSO_0",contryCode:"_3DT_F7MnR074cU8K7Db4gG_0",inputMobile:"_2dRWPF0mu8SkPstIlTiUEN_0",quickPass:"_11xR_PK6ec4GbuhUfKijbH_0",registerSubmit:"_1gfgHkOgSFp0D70NfEDuc9_0"}},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),r=s("/ocq"),o=[{path:"/",component:s("L8Y5").default,redirect:"/home/index",children:[{path:"home",component:s("fL4P").default,children:[{path:"index",name:"Home",component:s("fL4P").default}]},{path:"entry",name:"Entry",component:s("2X2S").default,redirect:"entry/login",children:[{path:"login",name:"Login",component:s("q8bm").default},{path:"register",name:"Register",component:s("5Y3P").default}]}]}];n.default.use(r.a);var a=new r.a({routes:o}),i=s("NYxO"),c=s("Xxa5"),l=s.n(c),u=s("exGp"),d=s.n(u),p=s("//Fk"),f=s.n(p),v=s("mvHQ"),m=s.n(v),g=s("pFYg"),_=s.n(g),h=s("mtWM"),y=s.n(h),k=s("Av7u"),x=s("zL8q"),b=s.n(x),P=y.a.create({baseURL:"",timeout:1e4,withCredentials:!0}),$=function(e){return Object(x.Message)({message:e.msg,type:"error"}),f.a.reject({data:e.msg})},q=function(e){return 200===e.status&&1e3!==e.data.resData.code?f.a.reject(e.data.resData):e.data.resData.data},w=function(e,t,s,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o={url:e,method:t,headers:{level:r}};if(1===r)n={encrypt:k.aes.en(m()(n))};else if(2===r){var a=(new Date).getTime(),i="";i||(i=JSON.parse(sessionStorage.getItem("user")).token);var c=Object(k.sign)(i,a,n);console.log("token",i),console.log("signstr",c),o.headers={level:r,timestamp:a,signstr:c}}return s||(o.headers["Content-Type"]="application/x-www-form-urlencoded",o.responseType="text",o.transformRequest=[function(e){return function(e){if(console.log("data",e),"string"==typeof e)return e;var t="";for(var s in e){var n=e[s];"object"!==(void 0===n?"undefined":_()(n))||n instanceof Array&&!(n.length>0&&"object"===_()(n[0]))||(n=m()(n)),t+=s+"="+encodeURIComponent(n)+"&"}return t.length>0&&(t=t.substring(0,t.length-1)),t}(e)}]),t in{get:!0,delete:!0}?o.params=n:t in{post:!0,put:!0}&&(o.data=n),o},E={namespaced:!0,state:{auth:{}},getters:{},actions:{getAuth:function(e){var t=this;e.commit;return d()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(t="/api",s=void 0,n=void 0,P(w(t,"get",!0,s,n)).then(function(e){return q(e)}).catch(function(e){return $(e)})).then(function(e){console.log(e)}).catch(function(e){console.log(e),a.push("/entry")});case 1:case"end":return e.stop()}var t,s,n},e,t)}))()}},mutations:{}};n.default.use(i.a);var N=new i.a.Store({modules:{user:E},strict:!1}),S=(s("E3ct"),s("muQq"),s("tvR6"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:this.$style.root},[t("router-view")],1)},staticRenderFns:[]});var B=s("VU/8")({name:"App",data:function(){return{}},created:function(){},methods:{},mounted:function(){}},S,!1,function(e){this.$style=s("DfPB")},null,null).exports;n.default.config.productionTip=!1,n.default.use(b.a),new n.default({el:"#app",router:a,store:N,components:{App:B},template:"<App/>"}),N.dispatch("user/getAuth")},"P3v/":function(e,t,s){"use strict";var n={name:"TopNav",props:{ENV:Object,menus:Array},data:function(){return{activeIndex:""}},methods:{jumpRouter:function(){(arguments.length<=0?void 0:arguments[0])&&this.$router.push(arguments.length<=0?void 0:arguments[0])}}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.$style.root,style:e.ENV.border},[s("div",{class:e.$style.container},[s("div",{class:e.$style.logo},[s("img",{attrs:{src:e.ENV.logoSrc,alt:"logo"}})]),e._v(" "),"home"===e.ENV.target?s("div",[s("div",{class:e.$style.menus},[s("el-menu",{attrs:{"default-active":e.activeIndex,mode:e.ENV.type,"text-color":e.ENV.textColor,"active-text-color":e.ENV.textColor,"background-color":"transparent"}},e._l(e.menus,function(t,n){return s("el-menu-item",{key:n,attrs:{index:t.path},on:{click:function(s){e.jumpRouter(t.path)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])})),e._v(" "),s("div",{class:e.$style.left})],1)]):e._e(),e._v(" "),"entry"===e.ENV.target?s("div",[s("div",{class:e.$style.menus}),e._v(" "),s("div",{class:e.$style.left},[s("el-menu",{attrs:{"default-active":e.activeIndex,mode:e.ENV.type,"text-color":e.ENV.textColor,"active-text-color":e.ENV.textColor,"background-color":"transparent"}},e._l(e.menus,function(t,n){return s("el-menu-item",{key:n,attrs:{index:t.path},on:{click:function(s){e.jumpRouter(t.path)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])}))],1)]):e._e()])])},staticRenderFns:[]};var o=s("VU/8")(n,r,!1,function(e){this.$style=s("Ki5I")},null,null);t.a=o.exports},W2cd:function(e,t){},"dBs+":function(e,t,s){e.exports=s.p+"static/img/logo02.fceaed3.png"},fL4P:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("P3v/"),r=s("ywVb"),o=s.n(r),a={name:"Home",components:{TopNav:n.a},data:function(){return{menusType:{type:"horizontal",target:"home",textColor:"#fff",logoSrc:o.a,border:"border-bottom: 1px solid rgba(255,255,255,0.3);"},menus:[{name:"首页",path:"/home/index"}]}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:this.$style.root},[t("TopNav",{attrs:{ENV:this.menusType,menus:this.menus}})],1)},staticRenderFns:[]};var c=s("VU/8")(a,i,!1,function(e){this.$style=s("xMp/")},null,null);t.default=c.exports},fgVC:function(e,t){e.exports={root:"_3E3kDBzTKZpngbSvZaamsi_0",container:"t8Pj5LlA7Ud7IegFDWPvD_0",section:"_1CAxbW1wuX7Yt4ha27Dfa__0",left:"_2TPQp3yEwnWpqpAYqpT_3w_0",right:"_3BIJq6xsS9PkAGd_5ViGws_0",tapLoginMethod:"zQeyUFIKiNiLo3BQgqQXq_0",loginModule:"_2TVOZwEA4vxAelJ8nD5qFl_0",loginBox:"MOC3Yvj9fZ1gSs9z266r1_0",loginHeader:"l_K7ES-ZQPUSDYBfFptjN_0",title:"_1w--PfICHnARndKWWuDNf1_0",loginSection:"_1PukCW9j8ZrUUaJT3-LFSd_0",loginForm:"flNHfrZCAYf3GByk23S9k_0",loginInput:"_2oFq6zKruNXYYD8YE84_WG_0",quickPass:"_1aPIlSMW2e3q1annz5Bwrd_0",loginSubmit:"_10eQBjcWVppW1XkY3SwhJS_0",loginLinks:"_2yjvlSipCv-ECHzf2N1wqw_0",links:"_1a4rXx0zp-JpH-JKvqIHEx_0",loginTips:"_2Fx7lX_L78Jmqye3NnwtZJ_0"}},muQq:function(e,t){},nOe7:function(e,t){e.exports={root:"_1wfRyNl624-M-V0p2K4UAr_0"}},q8bm:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("Xxa5"),r=s.n(n),o=s("//Fk"),a=s.n(o),i=s("exGp"),c=s.n(i),l=s("p+I1"),u=s.n(l),d=s("P3v/"),p=s("ywVb"),f=s.n(p),v={name:"Login",components:{dragVerify:u.a,TopNav:d.a},data:function(){return{userName:"",passWord:"",linkData:[{key:"忘记密码",value:""},{key:"免费注册",value:"/entry/register"}],loginTips:"建议使用google浏览器以便达到最好的用户体验",loginWord:{title:"www.xiaoluzhu.net",options:["A strong man will struggle with the storms of fate.","He who seize the right moment, is the right man.","Cease to struggle and you cease to live."]},quickPass:{width:330,height:40,text:"按住滑块，拖动到最右边",successText:"验证通过",background:"#d7d8d9",progressBarBg:"#00c1de",color:"#4d4d4d",completedBg:"#67c23a",handlerBg:"#fff",handlerIcon:"iconfont icon-doubleright",textSize:"12px",successIcon:"iconfont icon-check-circle",circle:!1},menusType:{type:"horizontal",target:"entry",textColor:"#fff",logoSrc:f.a,border:"border-bottom: 1px solid rgba(255,255,255,0.3);"},menus:[{name:"首页",path:"/home/index"}]}},methods:{checkQuickPassStatus:function(){var e=this;return c()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new a.a(function(t,s){t(e.$refs.quickPass.isPassing)}));case 1:case"end":return t.stop()}},t,e)}))()},postMsg:function(){var e=this;return c()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.checkQuickPassStatus();case 2:t.sent||alert("验证码未通过验证");case 4:case"end":return t.stop()}},t,e)}))()}}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.$style.root},[s("TopNav",{attrs:{ENV:e.menusType,menus:e.menus}}),e._v(" "),s("div",{class:e.$style.container},[s("div",{class:e.$style.section},[s("div",{class:e.$style.left},[s("h1",[e._v(e._s(e.loginWord.title))]),e._v(" "),e._l(e.loginWord.options,function(t,n){return[s("p",{key:n},[e._v(e._s(t))])]})],2),e._v(" "),s("div",{class:e.$style.right},[s("div",{class:e.$style.tapLoginMethod},[s("i",{staticClass:"iconfont icon-qrcode"})]),e._v(" "),s("div",{class:e.$style.loginModule},[s("div",{class:e.$style.loginBox},[s("div",{class:e.$style.loginHeader},[s("div",{class:e.$style.title},[e._v("\n                密码登录\n              ")])]),e._v(" "),s("div",{class:e.$style.loginSection},[s("div",{class:e.$style.loginForm},[s("form",{attrs:{action:"post"}},[s("div",{class:e.$style.loginInput},[s("el-input",{attrs:{placeholder:"请输入登录邮箱"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),e._v(" "),s("div",{class:e.$style.loginInput},[s("el-input",{attrs:{placeholder:"请输入登录密码"},model:{value:e.passWord,callback:function(t){e.passWord=t},expression:"passWord"}})],1),e._v(" "),s("div",{class:e.$style.quickPass},[s("drag-verify",{ref:"quickPass",attrs:{width:e.quickPass.width,height:e.quickPass.height,text:e.quickPass.text,"success-text":e.quickPass.successText,background:e.quickPass.background,"progress-bar-bg":e.quickPass.progressBarBg,"completed-bg":e.quickPass.completedBg,"handler-bg":e.quickPass.handlerBg,"handler-icon":e.quickPass.handlerIcon,"text-size":e.quickPass.textSize,"success-icon":e.quickPass.successIcon,circle:e.quickPass.circle,color:e.quickPass.color}})],1),e._v(" "),s("el-button",{class:e.$style.loginSubmit,attrs:{type:"text"},on:{click:function(t){return t.stopPropagation(),e.postMsg(t)}}},[e._v("\n                    登录\n                  ")])],1)])]),e._v(" "),s("div",{class:e.$style.loginLinks},e._l(e.linkData,function(t,n){return s("router-link",{key:n,class:e.$style.links,attrs:{to:t.value}},[e._v("\n                "+e._s(t.key)+"\n              ")])})),e._v(" "),s("div",{class:e.$style.loginTips},[s("p",[e._v(e._s(e.loginTips))])])])])])])])],1)},staticRenderFns:[]};var g=s("VU/8")(v,m,!1,function(e){this.$style=s("fgVC")},null,null);t.default=g.exports},tvR6:function(e,t){},"xMp/":function(e,t){e.exports={root:"VXfHDasr_E5mCXxj1WRmv_0"}},ywVb:function(e,t,s){e.exports=s.p+"static/img/logo01.a7a415d.png"}},["NHnr"]);
//# sourceMappingURL=app.6a5a89917f9d8d6b0d23.js.map