(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Tlcl:function(n,l,u){"use strict";u.r(l);var t=u("8Y7J");class e{constructor(n,l,u){this.navCtrl=n,this.menu=l,this.router=u}ngOnInit(){}goback(){this.navCtrl.back()}confirm(){var n=document.getElementById("user"),l=document.getElementById("pwd");""===l.value||""===n.value?alert_field("please enter all the required fields!"):""==l.value&&""==n.value||(jqr(),fireb_app(),fireb_data(),sweet_alert(),connect_db(n.value,l.value))}gotoSIGNUP(){this.navCtrl.navigateRoot("/sign-up")}pswd(){var n=document.getElementById("pwd");n.type="password"==n.type?"text":"password"}}class o{}var r=u("pMnS"),i=u("MKJQ"),b=u("sZkV"),a=u("s7LF"),s=u("iInd"),c=t.kb({encapsulation:0,styles:["#n[_ngcontent-%COMP%] {\n      margin-top: 10%;\n     --background\n     : rgb(0, 0, 0);\n    }\n    h1[_ngcontent-%COMP%] {\n      font-family:'noto';\n      color: aliceblue;\n    }\n    #sh[_ngcontent-%COMP%]{\n      color: #737373;\n      font-size: 93.8%;\n    }\n    .row[_ngcontent-%COMP%] {\n      padding-top: 10%;\n    }\n\n    #a[_ngcontent-%COMP%] {\n      font-size: 80%;\n      \n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      color: #5F5F5F;\n    }\n\n    #c[_ngcontent-%COMP%]{\n      margin-top: 0%;\n      padding:5%;\n      padding-right:22%;\n      padding-left:22%;\n      font-size: 20px;\n      border: 1.5px solid #b2b2b2;\n      border-radius:20px;\n      background-color:#3333;\n      color:#b2b2b2 ;\n      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;\n      \n    } \n    \n    #in[_ngcontent-%COMP%]{\n      margin: 9px;\n      margin-top: 20%;\n      padding:5%;\n      padding-right:30%;\n      padding-left:30%;\n      font-size: 20px;\n      border: 2px solid #ffffff;\n      border-radius:20px;\n      background-color:rgb(0, 0, 0);\n      color:rgb(255, 255, 255) ;\n     \n    }\n\n     #in[_ngcontent-%COMP%]:hover  {\n      margin: 9px;\n      margin-top: 20%;\n      padding:5%;\n      padding-right:30%;\n      padding-left:30%;\n      font-size: 22px;\n      background-color:rgb(255, 255, 255) ;\n      color:rgb(0, 0, 0);\n      }\n    #un[_ngcontent-%COMP%]{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;}\n    \n    \n    \n    \n\n    .form-signin[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n    #pwd[_ngcontent-%COMP%]{font-size: 20px;\n      margin-top: 0.3%;\n     border-radius:10px;\n     border: 1px solid;}\n    #user[_ngcontent-%COMP%]{font-size: 20px;\n      border-radius:10px;\n      border: 1px solid;}\n\n    input[type=text][_ngcontent-%COMP%] {\n      width: 90%;\n      padding: 10px;\n      box-sizing: border-box;\n      background-color: transparent;\n      color: rgb(255, 255, 255);\n    }\n\n    input[type=password][_ngcontent-%COMP%] {\n      width: 90%;\n      padding: 10px;\n      box-sizing: border-box;\n      background-color: transparent;\n      color: rgb(255, 255, 255);\n    }",[""]],data:{}});function d(n){return t.Cb(0,[(n()(),t.mb(0,0,null,null,1,"ion-header",[],null,null,null,i.S,i.p)),t.lb(1,49152,null,0,b.z,[t.h,t.k,t.x],null,null),(n()(),t.mb(2,0,null,null,32,"ion-content",[["id","n"]],null,null,null,i.M,i.j)),t.lb(3,49152,null,0,b.s,[t.h,t.k,t.x],null,null),(n()(),t.mb(4,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.mb(5,0,null,0,4,"h1",[["style","text-align:center;"]],null,null,null,null,null)),(n()(),t.mb(6,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.Bb(-1,null,["MyLibrary"])),(n()(),t.mb(8,0,null,null,1,"ion-icon",[["color","light"],["name","logo-buffer"]],null,null,null,i.T,i.q)),t.lb(9,49152,null,0,b.A,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.mb(10,0,null,0,24,"div",[["class","row"],["style","text-align:center;"]],null,null,null,null,null)),(n()(),t.mb(11,0,null,null,16,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,u){var e=!0;return"submit"===l&&(e=!1!==t.xb(n,13).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.xb(n,13).onReset()&&e),e}),null,null)),t.lb(12,16384,null,0,a.h,[],null,null),t.lb(13,4210688,null,0,a.e,[[8,null],[8,null]],null,null),t.yb(2048,null,a.a,null,[a.e]),t.lb(15,16384,null,0,a.d,[[4,a.a]],null,null),(n()(),t.mb(16,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.mb(17,0,null,null,0,"input",[["id","user"],["name","fname"],["placeholder","Username"],["style","text-align:center;"],["text-center",""],["type","text"]],null,null,null,null,null)),(n()(),t.mb(18,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),t.mb(19,0,null,null,0,"input",[["id","pwd"],["name","pwd"],["placeholder","Password"],["style","text-align:center;"],["text-center",""],["type","password"]],null,null,null,null,null)),(n()(),t.mb(20,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.mb(21,0,null,null,2,"div",[["id","sh"]],null,null,null,null,null)),(n()(),t.mb(22,0,null,null,0,"input",[["type","checkbox"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.pswd()&&t),t}),null,null)),(n()(),t.Bb(-1,null,[" show password"])),(n()(),t.mb(24,0,null,null,3,"button",[["id","in"],["type","submit"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.confirm()&&t),t}),null,null)),(n()(),t.mb(25,0,null,null,2,"div",[["id","un"]],null,null,null,null,null)),(n()(),t.mb(26,0,null,null,1,"B",[],null,null,null,null,null)),(n()(),t.Bb(-1,null,["SIGN IN"])),(n()(),t.mb(28,0,null,null,1,"p",[["id","a"]],null,null,null,null,null)),(n()(),t.Bb(-1,null,[" Not on SEE MORE yet? "])),(n()(),t.mb(30,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.mb(31,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.mb(32,0,null,null,2,"button",[["id","c"],["type","submit"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.gotoSIGNUP()&&t),t}),null,null)),(n()(),t.mb(33,0,null,null,1,"B",[],null,null,null,null,null)),(n()(),t.Bb(-1,null,["Create Account"]))],(function(n,l){n(l,9,0,"light","logo-buffer")}),(function(n,l){n(l,11,0,t.xb(l,15).ngClassUntouched,t.xb(l,15).ngClassTouched,t.xb(l,15).ngClassPristine,t.xb(l,15).ngClassDirty,t.xb(l,15).ngClassValid,t.xb(l,15).ngClassInvalid,t.xb(l,15).ngClassPending)}))}function p(n){return t.Cb(0,[(n()(),t.mb(0,0,null,null,1,"app-sign-in",[],null,null,null,d,c)),t.lb(1,114688,null,0,e,[b.Db,b.Bb,s.m],null,null)],(function(n,l){n(l,1,0)}),null)}var g=t.ib("app-sign-in",e,p,{},{},[]),m=u("SVse");u.d(l,"SignINPageModuleNgFactory",(function(){return f}));var f=t.jb(o,[],(function(n){return t.ub([t.vb(512,t.j,t.V,[[8,[r.a,g]],[3,t.j],t.v]),t.vb(4608,m.i,m.h,[t.s,[2,m.o]]),t.vb(4608,a.g,a.g,[]),t.vb(4608,b.b,b.b,[t.x,t.g]),t.vb(4608,b.Cb,b.Cb,[b.b,t.j,t.p]),t.vb(4608,b.Fb,b.Fb,[b.b,t.j,t.p]),t.vb(1073742336,m.b,m.b,[]),t.vb(1073742336,a.f,a.f,[]),t.vb(1073742336,a.b,a.b,[]),t.vb(1073742336,b.zb,b.zb,[]),t.vb(1073742336,s.n,s.n,[[2,s.s],[2,s.m]]),t.vb(1073742336,o,o,[]),t.vb(1024,s.k,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);