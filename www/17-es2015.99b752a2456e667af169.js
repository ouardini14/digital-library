(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"P+vx":function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),t=e("LG6+");class o{constructor(l,n,e,u,t,o){this.camera=l,this.alertController=n,this.navCtrl=e,this.menu=u,this.router=t,this.activatedRoute=o,this.user=this.activatedRoute.snapshot.paramMap.get("user"),this.g=""}toItem(){this.router.navigateByUrl("/item/"+this.user)}cancel(){this.router.navigateByUrl("/item/"+this.user)}ngOnInit(){}item(l){"Book"==l.target.value&&($("#d").remove(),$("#s").remove(),$("#da").prepend('<ion-label id="d" position="stacked">Author</ion-label>'),$("#g").prepend('<div id="s"> <ion-select-option value="Action">Action</ion-select-option> <ion-select-option value="Comic">Comic</ion-select-option><ion-select-option value="Crime">Crime</ion-select-option><ion-select-option value="Drama">Drama</ion-select-option><ion-select-option value="FairyTale">FairyTale</ion-select-option><ion-select-option value="Fantasy">Fantasy</ion-select-option><ion-select-option value="Historical">Historical</ion-select-option><ion-select-option value="Horror">Horror</ion-select-option><ion-select-option value="Humor">Humor</ion-select-option><ion-select-option value="Mystery">Mystery</ion-select-option><ion-select-option value="Fiction">Fiction</ion-select-option><ion-select-option value="Romance">Romance</ion-select-option><ion-select-option value="Science Fiction">Science Fiction</ion-select-option><ion-select-option value="Short Story">Short Story</ion-select-option><ion-select-option value="Thriller">Thriller</ion-select-option> </div>'),this.itm=l.target.value),"Movie"!=l.target.value&&"Serie"!=l.target.value||($("#d").remove(),$("#s").remove(),$("#da").prepend('<ion-label id="d" position="stacked">Director</ion-label>'),$("#g").prepend('<div id="s"> <ion-select-option value="Action">Action</ion-select-option> <ion-select-option value="Drama">Drama</ion-select-option>  <ion-select-option value="Horror">Horror</ion-select-option>  <ion-select-option value="Documentary">Documentary</ion-select-option> <ion-select-option value="Romance">Romance</ion-select-option><ion-select-option value="Fantasy">Fantasy</ion-select-option><ion-select-option value="Science Fiction">Science Fiction</ion-select-option></div>'),this.itm=l.target.value)}dat(l){this.date=l.target.value;var n=this.date.split("T");this.date=n[0]}genre(l){this.gr=l.target.value}audience(l){this.aud=l.target.value}add(){this.g=this.gr.join(","),console.log(this.g);var l=document.getElementById("name"),n=document.getElementById("direct"),e=document.getElementById("desc");fireb_app(),fireb_data(),fireb_storage(),fireb_auth(),sweet_alert(),add_item(this.user,this.myphoto,this.itm,l.value,n.value,this.date,this.g,e.value,this.aud)}up(){this.camera.getPicture({quality:100,sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,destinationType:this.camera.DestinationType.DATA_URL,saveToPhotoAlbum:!1,allowEdit:!0,targetWidth:300,targetHeight:300}).then(l=>{fireb_app(),fireb_data(),fireb_storage(),fireb_auth(),sweet_alert(),this.myphoto="data:image/jpeg;base64,"+l},l=>{})}}class i{}var a=e("pMnS"),r=e("MKJQ"),c=e("sZkV"),b=e("s7LF"),s=e("iInd"),m=u.kb({encapsulation:0,styles:["#a[_ngcontent-%COMP%] {\n      font-size: 80%;\n      \n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      color: #5F5F5F;\n    }",[""]],data:{}});function p(l){return u.Cb(0,[(l()(),u.mb(0,0,null,null,6,"ion-header",[],null,null,null,r.S,r.p)),u.lb(1,49152,null,0,c.z,[u.h,u.k,u.x],null,null),(l()(),u.mb(2,0,null,0,4,"ion-toolbar",[],null,null,null,r.fb,r.C)),u.lb(3,49152,null,0,c.xb,[u.h,u.k,u.x],null,null),(l()(),u.mb(4,0,null,0,2,"ion-title",[["style","text-align:center;"]],null,null,null,r.eb,r.B)),u.lb(5,49152,null,0,c.vb,[u.h,u.k,u.x],null,null),(l()(),u.Bb(-1,0,["Add item"])),(l()(),u.mb(7,0,null,null,108,"ion-content",[],null,null,null,r.M,r.j)),u.lb(8,49152,null,0,c.s,[u.h,u.k,u.x],null,null),(l()(),u.mb(9,0,null,0,106,"ion-card",[["color","white"]],null,null,null,r.K,r.d)),u.lb(10,49152,null,0,c.k,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.mb(11,0,null,0,17,"ion-item",[],null,null,null,r.X,r.s)),u.lb(12,49152,null,0,c.F,[u.h,u.k,u.x],null,null),(l()(),u.mb(13,0,null,0,2,"ion-label",[],null,null,null,r.Y,r.v)),u.lb(14,49152,null,0,c.L,[u.h,u.k,u.x],null,null),(l()(),u.Bb(-1,0,["Item"])),(l()(),u.mb(16,0,null,0,12,"ion-select",[["cancelText","Dismiss"],["okText","Okay"]],null,[[null,"ionFocus"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.xb(l,19)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.xb(l,19)._handleChangeEvent(e.target)&&t),"ionFocus"===n&&(t=!1!==o.item(e)&&t),t}),r.db,r.z)),u.yb(5120,null,b.c,(function(l){return[l]}),[c.Gb]),u.lb(18,49152,null,0,c.ib,[u.h,u.k,u.x],{cancelText:[0,"cancelText"],okText:[1,"okText"]},null),u.lb(19,16384,null,0,c.Gb,[u.k],null,null),(l()(),u.mb(20,0,null,0,2,"ion-select-option",[["value","Book"]],null,null,null,r.cb,r.A)),u.lb(21,49152,null,0,c.jb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Bb(-1,0,["Book"])),(l()(),u.mb(23,0,null,0,2,"ion-select-option",[["value","Movie"]],null,null,null,r.cb,r.A)),u.lb(24,49152,null,0,c.jb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Bb(-1,0,["Movie"])),(l()(),u.mb(26,0,null,0,2,"ion-select-option",[["value","Serie"]],null,null,null,r.cb,r.A)),u.lb(27,49152,null,0,c.jb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Bb(-1,0,["Serie"])),(l()(),u.mb(29,0,null,0,8,"ion-item",[],null,null,null,r.X,r.s)),u.lb(30,49152,null,0,c.F,[u.h,u.k,u.x],null,null),(l()(),u.mb(31,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,r.Y,r.v)),u.lb(32,49152,null,0,c.L,[u.h,u.k,u.x],{position:[0,"position"]},null),(l()(),u.Bb(-1,0,["Name"])),(l()(),u.mb(34,0,null,0,3,"ion-input",[["id","name"],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0;return"ionBlur"===n&&(t=!1!==u.xb(l,37)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.xb(l,37)._handleInputEvent(e.target)&&t),t}),r.U,r.r)),u.yb(5120,null,b.c,(function(l){return[l]}),[c.Hb]),u.lb(36,49152,null,0,c.E,[u.h,u.k,u.x],{type:[0,"type"]},null),u.lb(37,16384,null,0,c.Hb,[u.k],null,null),(l()(),u.mb(38,0,null,0,5,"ion-item",[["id","da"]],null,null,null,r.X,r.s)),u.lb(39,49152,null,0,c.F,[u.h,u.k,u.x],null,null),(l()(),u.mb(40,0,null,0,3,"ion-input",[["id","direct"],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0;return"ionBlur"===n&&(t=!1!==u.xb(l,43)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.xb(l,43)._handleInputEvent(e.target)&&t),t}),r.U,r.r)),u.yb(5120,null,b.c,(function(l){return[l]}),[c.Hb]),u.lb(42,49152,null,0,c.E,[u.h,u.k,u.x],{type:[0,"type"]},null),u.lb(43,16384,null,0,c.Hb,[u.k],null,null),(l()(),u.mb(44,0,null,0,8,"ion-item",[],null,null,null,r.X,r.s)),u.lb(45,49152,null,0,c.F,[u.h,u.k,u.x],null,null),(l()(),u.mb(46,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,r.Y,r.v)),u.lb(47,49152,null,0,c.L,[u.h,u.k,u.x],{position:[0,"position"]},null),(l()(),u.Bb(-1,0,["Release date"])),(l()(),u.mb(49,0,null,0,3,"ion-datetime",[["displayFormat","MMM DD, YYYY"],["value","2019-10-01"]],null,[[null,"ionFocus"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.xb(l,52)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.xb(l,52)._handleChangeEvent(e.target)&&t),"ionFocus"===n&&(t=!1!==o.dat(e)&&t),t}),r.N,r.k)),u.yb(5120,null,b.c,(function(l){return[l]}),[c.Gb]),u.lb(51,49152,null,0,c.t,[u.h,u.k,u.x],{displayFormat:[0,"displayFormat"],value:[1,"value"]},null),u.lb(52,16384,null,0,c.Gb,[u.k],null,null),(l()(),u.mb(53,0,null,0,8,"ion-item",[],null,null,null,r.X,r.s)),u.lb(54,49152,null,0,c.F,[u.h,u.k,u.x],null,null),(l()(),u.mb(55,0,null,0,2,"ion-label",[],null,null,null,r.Y,r.v)),u.lb(56,49152,null,0,c.L,[u.h,u.k,u.x],null,null),(l()(),u.Bb(-1,0,["Genre"])),(l()(),u.mb(58,0,null,0,3,"ion-select",[["cancelText","Dismiss"],["id","g"],["multiple","true"],["okText","Okay"],["value","Action"]],null,[[null,"ionFocus"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.xb(l,61)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.xb(l,61)._handleChangeEvent(e.target)&&t),"ionFocus"===n&&(t=!1!==o.genre(e)&&t),t}),r.db,r.z)),u.yb(5120,null,b.c,(function(l){return[l]}),[c.Gb]),u.lb(60,49152,null,0,c.ib,[u.h,u.k,u.x],{cancelText:[0,"cancelText"],multiple:[1,"multiple"],okText:[2,"okText"],value:[3,"value"]},null),u.lb(61,16384,null,0,c.Gb,[u.k],null,null),(l()(),u.mb(62,0,null,0,8,"ion-item",[],null,null,null,r.X,r.s)),u.lb(63,49152,null,0,c.F,[u.h,u.k,u.x],null,null),(l()(),u.mb(64,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,r.Y,r.v)),u.lb(65,49152,null,0,c.L,[u.h,u.k,u.x],{position:[0,"position"]},null),(l()(),u.Bb(-1,0,["Description"])),(l()(),u.mb(67,0,null,0,3,"ion-input",[["id","desc"],["placeholder","Description..."],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0;return"ionBlur"===n&&(t=!1!==u.xb(l,70)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.xb(l,70)._handleInputEvent(e.target)&&t),t}),r.U,r.r)),u.yb(5120,null,b.c,(function(l){return[l]}),[c.Hb]),u.lb(69,49152,null,0,c.E,[u.h,u.k,u.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),u.lb(70,16384,null,0,c.Hb,[u.k],null,null),(l()(),u.mb(71,0,null,0,17,"ion-item",[],null,null,null,r.X,r.s)),u.lb(72,49152,null,0,c.F,[u.h,u.k,u.x],null,null),(l()(),u.mb(73,0,null,0,2,"ion-label",[],null,null,null,r.Y,r.v)),u.lb(74,49152,null,0,c.L,[u.h,u.k,u.x],null,null),(l()(),u.Bb(-1,0,["Audience"])),(l()(),u.mb(76,0,null,0,12,"ion-select",[["cancelText","Dismiss"],["okText","Okay"],["value","+18"]],null,[[null,"ionFocus"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.xb(l,79)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.xb(l,79)._handleChangeEvent(e.target)&&t),"ionFocus"===n&&(t=!1!==o.audience(e)&&t),t}),r.db,r.z)),u.yb(5120,null,b.c,(function(l){return[l]}),[c.Gb]),u.lb(78,49152,null,0,c.ib,[u.h,u.k,u.x],{cancelText:[0,"cancelText"],okText:[1,"okText"],value:[2,"value"]},null),u.lb(79,16384,null,0,c.Gb,[u.k],null,null),(l()(),u.mb(80,0,null,0,2,"ion-select-option",[["value","+18"]],null,null,null,r.cb,r.A)),u.lb(81,49152,null,0,c.jb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Bb(-1,0,["+18"])),(l()(),u.mb(83,0,null,0,2,"ion-select-option",[["value","+16"]],null,null,null,r.cb,r.A)),u.lb(84,49152,null,0,c.jb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Bb(-1,0,["+16"])),(l()(),u.mb(86,0,null,0,2,"ion-select-option",[["value","+12"]],null,null,null,r.cb,r.A)),u.lb(87,49152,null,0,c.jb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Bb(-1,0,["+12"])),(l()(),u.mb(89,0,null,0,7,"ion-item",[],null,null,null,r.X,r.s)),u.lb(90,49152,null,0,c.F,[u.h,u.k,u.x],null,null),(l()(),u.mb(91,0,null,0,2,"ion-label",[],null,null,null,r.Y,r.v)),u.lb(92,49152,null,0,c.L,[u.h,u.k,u.x],null,null),(l()(),u.Bb(-1,0,["Poster"])),(l()(),u.mb(94,0,null,0,2,"ion-button",[["color","medium"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.up()&&u),u}),r.E,r.b)),u.lb(95,49152,null,0,c.i,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Bb(-1,0,["Select a File"])),(l()(),u.mb(97,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.mb(98,0,null,0,15,"ion-grid",[],null,null,null,r.R,r.o)),u.lb(99,49152,null,0,c.y,[u.h,u.k,u.x],null,null),(l()(),u.mb(100,0,null,0,13,"ion-row",[],null,null,null,r.bb,r.y)),u.lb(101,49152,null,0,c.eb,[u.h,u.k,u.x],null,null),(l()(),u.mb(102,0,null,0,5,"ion-col",[["class","ion-float-left"]],null,null,null,r.L,r.i)),u.lb(103,49152,null,0,c.r,[u.h,u.k,u.x],null,null),(l()(),u.mb(104,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),u.mb(105,0,null,null,2,"ion-button",[["color","medium"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.cancel()&&u),u}),r.E,r.b)),u.lb(106,49152,null,0,c.i,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Bb(-1,0,["Cancel"])),(l()(),u.mb(108,0,null,0,5,"ion-col",[["class","ion-float-right"]],null,null,null,r.L,r.i)),u.lb(109,49152,null,0,c.r,[u.h,u.k,u.x],null,null),(l()(),u.mb(110,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),u.mb(111,0,null,null,2,"ion-button",[["color","success"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.add()&&u),u}),r.E,r.b)),u.lb(112,49152,null,0,c.i,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Bb(-1,0,["Add"])),(l()(),u.mb(114,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.mb(115,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){l(n,10,0,"white"),l(n,18,0,"Dismiss","Okay"),l(n,21,0,"Book"),l(n,24,0,"Movie"),l(n,27,0,"Serie"),l(n,32,0,"stacked"),l(n,36,0,"text"),l(n,42,0,"text"),l(n,47,0,"stacked"),l(n,51,0,"MMM DD, YYYY","2019-10-01"),l(n,60,0,"Dismiss","true","Okay","Action"),l(n,65,0,"stacked"),l(n,69,0,"Description...","text"),l(n,78,0,"Dismiss","Okay","+18"),l(n,81,0,"+18"),l(n,84,0,"+16"),l(n,87,0,"+12"),l(n,95,0,"medium"),l(n,106,0,"medium"),l(n,112,0,"success")}),null)}function v(l){return u.Cb(0,[(l()(),u.mb(0,0,null,null,1,"app-add-item",[],null,null,null,p,m)),u.lb(1,114688,null,0,o,[t.a,c.a,c.Db,c.Bb,s.m,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var h=u.ib("app-add-item",o,v,{},{},[]),d=e("SVse");e.d(n,"AddItemPageModuleNgFactory",(function(){return k}));var k=u.jb(i,[],(function(l){return u.ub([u.vb(512,u.j,u.V,[[8,[a.a,h]],[3,u.j],u.v]),u.vb(4608,d.i,d.h,[u.s,[2,d.o]]),u.vb(4608,b.g,b.g,[]),u.vb(4608,c.b,c.b,[u.x,u.g]),u.vb(4608,c.Cb,c.Cb,[c.b,u.j,u.p]),u.vb(4608,c.Fb,c.Fb,[c.b,u.j,u.p]),u.vb(1073742336,d.b,d.b,[]),u.vb(1073742336,b.f,b.f,[]),u.vb(1073742336,b.b,b.b,[]),u.vb(1073742336,c.zb,c.zb,[]),u.vb(1073742336,s.n,s.n,[[2,s.s],[2,s.m]]),u.vb(1073742336,i,i,[]),u.vb(1024,s.k,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);