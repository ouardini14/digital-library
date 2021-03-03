 var firebaseConfig = {
  apiKey: "AIzaSyCBQv9XnMYZc_YS0ZWwOsjTtDqhajtFYuE",
  authDomain: "library-cca31.firebaseapp.com",
  databaseURL: "https://library-cca31.firebaseio.com",
  projectId: "library-cca31",
  storageBucket: "library-cca31.appspot.com",
  messagingSenderId: "360985935498",
  appId: "1:360985935498:web:79e94ad38e67805cddf773"
};


function date_format(){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var res =date.split("-");
var month = [
  'January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September',
  'October', 'November', 'December'
  ]; 
  d=month[res[1]-1]+" "+ res[2]+","+ res[0] ;
  return d;
}
function add_item(user,photo,item,name,auth,date,genre,desc,aud){
  var res =date.split("-");
  var month = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ]; 
   var ndate=month[res[1]-1]+" "+ res[2]+","+ res[0] ;
   if(user==""||item==""||name==""||photo==undefined||auth==""||ndate==""||genre==""||desc==""||aud==""||genre==undefined||item==undefined){alert_field("please enter all the required fields!");
  }
 else{ firebase.initializeApp(firebaseConfig);
  var db= firebase.database();
  db.ref('Items/'+item+'/'+name).once("value").then(function(snapshot) {
    if(snapshot.exists()) {alert_field("Item already exist!")}
    else{
    db.ref('Items/'+item+'/'+name).set({
     Audience:aud,
       Category:genre,
      Description:desc,
       Author:auth,
       Release_date:ndate,
     });
     var s="3";
     db.ref("Items/"+item+'/'+name+"/eva").set({
      "ev" : s,
         });
         db.ref("Items/"+item+'/'+name+"/eva/score").set({
          "score":s,
             });
           }  
                 firebase.storage().ref(item+"_"+name+'.jpg').putString(photo, 'data_url');
           sleep(4000).then(() => {
          Swal.fire({
            title : 'Congratulation!',
            text: 'New item has been added',
            confirmButtonText: 'ok',
            preConfirm: () => {window.location.href = '/item/'+user ;}
            } ) 
        });         
         })
        }
}



  function savy(username){
    firebase.initializeApp(firebaseConfig);
swal.fire({
title: 'tap Your password',
icon: 'warning',
html: '<input type="password" id="ii">' ,
showCancelButton: true,
confirmButtonText: 'Yes, save it!',
cancelButtonText: 'No, cancel!',
reverseButtons: true
}).then((result) => {
if (result.value) {
 var iii=document.getElementById("ii");
 firebase.database().ref('user/'+username+'/info/password').once("value", function(snapshot) {
   if (iii.value==snapshot.val()) {
    sleep(2000).then(() => {
    confirm_field(username);})}
   else{ alert_field("password incorrect")  }})
 } 
})
}

  function  alert_field(message)
  {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text:message,
        } )
    }
    function  confirm_field(username)
    {
      swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, save it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          save_db(username);
        } 
      })
      }  
    

  
function connect_db(username,password){
  firebase.initializeApp(firebaseConfig);
      var db= firebase.database();
    var ref = db.ref('user/'+username);
        ref.once("value").then(function(snapshot) {

        if(snapshot.exists()) {db.ref('user/'+username+'/info/password').on("value", function(snapshot) {

             if (password==snapshot.val()) {
               window.location.href = '/home' ;}
             else {alert_field("password incorrect");}
            }     
            );
                } 
        else{alert_field("username incorrect");}
  }
  );
}

function create_db(user,pass,l,f,e){
    firebase.initializeApp(firebaseConfig);
    var db= firebase.database();
    var ref = db.ref('user/'+user);
    ref.once("value").then(function(snapshot) {
        if(snapshot.exists()) {alert_field("user already exists!")}
        else{db.ref('user/'+user+'/info').set({
            password:pass,
             username:   user,
             email:e,
             fname:f,
             lname:l
           });
           Swal.fire({
            title : 'Welcome '+user+" !",
            text: 'You are now a member',
            confirmButtonText: 'ok',
            preConfirm: () => {window.location.href = '/item/'+user ;}
            } )                    
        }
  });
} 

function set_data(username) {
  firebase.initializeApp(firebaseConfig);
  var db= firebase.database();
  var e = document.getElementById("email");
  var f = document.getElementById("fname");
  var l = document.getElementById("lname");
  var p = document.getElementById("password");
  var c = document.getElementById("cpassword");
  db.ref('user/'+username+'/info/email').once("value").then(function(snapshot) { 
      if(!snapshot.exists()){
        e.placeholder= "No email yet"}
       if(snapshot.exists()){
        e.value=snapshot.val().toString();}
})

db.ref('user/'+username+'/info/fname').once("value").then(function(snapshot) { 
   if(!snapshot.exists()){
     f.placeholder= "type your first name"}
    if(snapshot.exists()){
     f.value=snapshot.val().toString();}
})


db.ref('user/'+username+'/info/lname').once("value").then(function(snapshot) { 
   if(!snapshot.exists()){
     l.placeholder= "type your last name"}
    if(snapshot.exists()){
     l.value=snapshot.val().toString();}
})


}

function save_db(username) {
  var db= firebase.database();
  var ref = db.ref('user/'+username);
    var e = document.getElementById("email");
    var f = document.getElementById("fname");
    var l = document.getElementById("lname");
    var p = document.getElementById("password");
    var c = document.getElementById("cpassword");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if(f.value=="" || l.value==""){alert_field("First name and last name are required!!")  }
    if(c.value!=p.value){alert_field("Password mismatch")}
      if(!e.value.match(mailformat) ){alert_field("Invalid email address")}
   if(c.value==p.value  && e.value.match(mailformat) && f.value!="" && l.value!="" ){
     if(p.value!=""){
    ref.once("value").then(function(snapshot) {
      db.ref('user/'+username+'/info').set({
        username:username,
         email:e.value,
         fname:f.value,
         lname:l.value,
         password:p.value,
       })
           })}
       if(p.value==""){
         ref.once("value").then(function(snapshot) {
          db.ref('user/'+username+'/info/password').on("value", function(snapshot) {
           var pp=snapshot.val().toString();
            db.ref('user/'+username+'/info').set({
              username:username,
               email:e.value,
               fname:f.value,
               lname:l.value,
               password: pp,
             })
          })
                   })}  
           Swal.fire({
            title : 'Saved!',
           preConfirm: () => {
           window.location.href = '/sign-in' ;}
            } )
           }      
}
function sleep (time) {
  let timerInterval
Swal.fire({
  title: 'Wait..',
  timer: time,
  timerProgressBar: true,
  onBeforeOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          
        }
      }
    }, 100)
  },
  onClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
})
  return new Promise((resolve) => setTimeout(resolve, time));
}
function previaw(username,myphoto) { 
  firebase.initializeApp(firebaseConfig);
   var ir = document.getElementById("ir");
    ir.src = myphoto;
    firebase.storage().ref(username+'.jpg').putString(ir.src, 'data_url');
   sleep(4000).then(() => {
    location.reload(); 
  });
}




  
       
function set_data3(username) {
  if(username=="admin"){
    $("#admin").prepend('<ion-icon   name="add-circle" ></ion-icon>Add item')
  }
  else{ $("#admin").remove()}
 var im = document.getElementById("im");
  firebase.initializeApp(firebaseConfig);
  var db= firebase.database();
  var storageRef=firebase.storage().ref(); 
  storageRef.child(username+'.jpg').getDownloadURL().then(onResolve, onReject);
  function onResolve(foundURL) {
    storageRef.child(username+'.jpg').getDownloadURL().then(function(downloadURL) {
      im.src= downloadURL})
  } 
  function onReject(error) {
    storageRef.child('avatar.jpg').getDownloadURL().then(function(downloadURL) {
      im.src= downloadURL})
  }
} 





 
function set_data2(username) {
  var i = document.getElementById("ir");
  firebase.initializeApp(firebaseConfig);
  var db= firebase.database();
  var storageRef=firebase.storage().ref();
  var e = document.getElementById("e");
  var f = document.getElementById("f");
  var l = document.getElementById("l"); 
 storageRef.child(username+'.jpg').getDownloadURL().then(onResolve, onReject);
function onResolve(foundURL) {
  storageRef.child(username+'.jpg').getDownloadURL().then(function(downloadURL) {
    i.src= downloadURL})
}

function onReject(error) {
  storageRef.child('avatar.jpg').getDownloadURL().then(function(downloadURL) {
    i.src= downloadURL})
}
  var ref = db.ref('user/'+username+'/info/email');
   ref.once("value").then(function(snapshot) { 
      if(!snapshot.exists()){
        e.innerHTML= "No email yet"}
       if(snapshot.exists()){
        e.innerHTML=snapshot.val().toString();}
})
var ref = db.ref('user/'+username+'/info/fname');
ref.once("value").then(function(snapshot) { 
   if(!snapshot.exists()){
     f.innerHTML= ""}
    if(snapshot.exists()){
     f.innerHTML=snapshot.val().toString();}
})
var ref = db.ref('user/'+username+'/info/lname');
ref.once("value").then(function(snapshot) { 
   if(!snapshot.exists()){
     l.innerHTML= ""}
    if(snapshot.exists()){
     l.innerHTML=snapshot.val().toString();}
})

}
function delete_db(username) {
  swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
      firebase.initializeApp(firebaseConfig);
  var db= firebase.database();
  var storageRef=firebase.storage().ref();
  var desertRef = storageRef.child(username+'.jpg');
  db.ref('user/'+username).remove();
desertRef.delete();
sleep(4000).then(() => {
  window.location.href = '/sign-in' ;
});
    } 
  })  
}

function get_point(point){
  var total = 0;
  for(var i = 0; i < point.length; i++) {
      total += parseInt(point[i]);
  }
   var avg = total / point.length;
   return Math.round(avg);

}
function get_score(it1,it2){


    get_point(point);

}


 function set_items(user){
  var n=30;
  var aut;
  var des;
  var ca;
  var da;
  var aud;
  var m=0;
  firebase.initializeApp(firebaseConfig);
  var db= firebase.database();
  db.ref("Items").orderByKey().on("child_added", function(snapshot) {   
    db.ref('Items/'+snapshot.key).on("value", function(snapshot) {
        var item1=snapshot.key;
      db.ref('Items/'+item1).orderByKey().on("child_added", function(snapshot) {  
                var item2=snapshot.key; 
               
                    db.ref("Items/"+item1+"/"+item2+"/eva/score/score").once("value", function(snapshot) { 
                   var  score= snapshot.val();
              n++;
 $("#"+item1).prepend('<div style="border: 5px solid #bbb; width: 75%; border-radius: 15px; margin: 0 auto; max-width: 500px;" class="coupon"> <div style="padding: 2px 16px; background-color: #f1f1f1;" class="container"> <h3 style="text-align:center;">'+item2+'</h3> </div> <div id='+n+'>   </div></div>    <br>');       
  db.ref('Items/'+item1+'/'+item2).orderByKey().on("child_added", function(snapshot) {
          if(snapshot.key=="Author"){ aut=snapshot.val();}
          if(snapshot.key=="Category"){ ca=snapshot.val();}
          if(snapshot.key=="Release_date"){ da=snapshot.val();}
          if(snapshot.key=="Audience"){ aud=snapshot.val();}
          if(snapshot.key=="Description"){ des=snapshot.val();}
        })
   up_pic(item1,item2,n,aut,ca,da,aud,des,user,score,m);
   m++;
                  })
      
            })    
    })
  })
}
function up_pic(a,b,n,aut,ca,da,aud,des,user,score,m){
  var c;
  var l;

if(aud=="+12"){ c="green"}
if(aud=="+16"){ c="grey"}
if(aud=="+18"){ c="red"}
if(a=="Book"){l="Author"}
if(a=="Movie"||a=="Serie"){ l="Director"}
   fireb_storage();
  var storageRef=firebase.storage().ref();
  var info=user+"_"+a+"_"+b+"_"+aut.replace(".","1")+"_"+ca+"_"+da+"_"+aud;
  storageRef.child(a+'_'+b+'.jpg').getDownloadURL().then(function(downloadURL) {
  $("#"+n).prepend(' <div><img src='+downloadURL+'  alt="Avatar" style="width:100%; height:200px;"></div>          <div style="padding: 2px 16px; background-color: #f1f1f1;"  class="container" > <p text-center>'+l+' : '+aut+'</p> <p text-center>Category : '+ca+'</p> <p style="color: rgb(46, 46, 46);"  class="expire">Release date : '+da+'</p> <p style="color: '+c+'"  class="expire"><span style="border-radius: 50%; border-style:solid; border-width: 1px 1px 1px 1px; padding:0 3%; cursor:pointer; margin:0px;">'+aud+'</span></p><div id="star'+m+'"> <div> <ion-button expand="block" href= "item-show/'+info+'"     color="medium"   ><ion-icon name="add-circle"></ion-icon>More info</ion-button></div> ')
if(score==1){$("#star"+m).prepend('<span style="color:yellow;" class="fa fa-star checked"></span><span  class="fa fa-star "></span><span  class="fa fa-star "></span><span class="fa fa-star "></span><span  class="fa fa-star"></span>')  }
if(score==2){$("#star"+m).prepend('<span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span  class="fa fa-star "></span><span class="fa fa-star "></span><span  class="fa fa-star"></span>')  }
if(score==3){$("#star"+m).prepend('<span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span class="fa fa-star "></span><span  class="fa fa-star"></span>')  }
if(score==4){$("#star"+m).prepend('<span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span  class="fa fa-star"></span>')  }
if(score==5){$("#star"+m).prepend('<span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span>')  }
})
}

function set_item_show(user,a,b,aud){
  
  var s;
  firebase.initializeApp(firebaseConfig);
  var ii=document.getElementById("i");
  var db= firebase.database();
  db.ref("Items/"+a+"/"+b+"/eva/score/score").once("value", function(snapshot) { 
    var  score= snapshot.val();
    if(score==1){$("#star"+m).prepend('<span style="color:yellow;" class="fa fa-star checked"></span><span  class="fa fa-star "></span><span  class="fa fa-star "></span><span class="fa fa-star "></span><span  class="fa fa-star"></span>')  }
if(score==2){$(".p3-image").prepend('<span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span  class="fa fa-star "></span><span class="fa fa-star "></span><span  class="fa fa-star"></span>')  }
if(score==3){$(".p3-image").prepend('<span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span class="fa fa-star "></span><span  class="fa fa-star"></span>')  }
if(score==4){$(".p3-image").prepend('<span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span  class="fa fa-star"></span>')  }
if(score==5){$(".p3-image").prepend('<span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span>')  }

  var storageRef=firebase.storage().ref();
  storageRef.child(a+'_'+b+'.jpg').getDownloadURL().then(onResolve, onReject);
  function onResolve(foundURL) {
    storageRef.child(a+'_'+b+'.jpg').getDownloadURL().then(function(downloadURL) {
    ii.src= downloadURL;    
    })
  }
  
  function onReject(error) {
    storageRef.child('avatar.jpg').getDownloadURL().then(function(downloadURL) {
      ii.src= downloadURL })}  
      var ref = db.ref('Items/'+a+'/'+b);
      ref.once("value").then(function(snapshot) {
        if(snapshot.exists()) {        
          db.ref('Items/'+a+'/'+b+'/Description').once("value", function(snapshot) {
            s=snapshot.val();
            $("#d").prepend(' <ion-label>'+s+'</ion-label>')
            });           
                } 
        else{            $("#d").prepend(' <ion-label>No description</ion-label>')
      }
  }
  );
  var c;
  var l;
if(aud=="+12"){ c="green"}
if(aud=="+16"){ c="grey"}
if(aud=="+18"){ c="red"}
if(a=="Book"){l="Author"}
if(a=="Movie"||a=="Serie"){ l="Director"}
$("#des").prepend('<ion-item-divider > <ion-label> '+l+' : </ion-label> </ion-item-divider> ')
$("#aud").prepend('<p style="color: '+c+'"  class="expire"><span style="border-radius: 50%; border-style:solid; border-width: 1px 1px 1px 1px; padding:0 1%; cursor:pointer; margin:0px;">'+aud+'</span></p>')
 })

 test_eva(user,a,b);
}
 
function test_eva(user,it1,it2){
      var db= firebase.database();
       var it=it1+"_"+it2;     
      db.ref("user/"+user+"/eva").once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          db.ref("user/"+user+"/eva/"+childKey+"/it0").once('value', function(snapshot) {
         if(snapshot.val()==it){
          $("#evaluated").empty();
          $("#evaluated").prepend("<p style='color:#DBE7ED;text-align:center;'><b>thank you for the evaluation</b></p>");
          } 
      });
    });
  });
  }  
    
function set_items_fav(user){
  var m=0;
      firebase.initializeApp(firebaseConfig);
      var db= firebase.database();
      var nn=100; 
      db.ref("user/"+user+"/fav").once("value").then(function(snapshot) { 
        if(!snapshot.exists()){
          $("#fil").empty();
          $("#fil").prepend("<p style='margin-top:50%;color:#DBE7ED;text-align:center;'><b>It's empty</b></p>");}
        else{
          $("#fil").prepend('<h2  style="text-align:center;"> <hr style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"> Movie <hr style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"></h2> <br> <div id="Movie"> </div> <br> <br> <h2 style="text-align:center;">    <hr style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"> Serie<hr  style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"></h2> <br> <div id="Serie"> </div> <br> <br> <h2 style="text-align:center;">      <hr style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"> Book        <hr style="border-top: 8px solid rgb(0, 0, 0); border-radius: 5px;" class="rounded"> </h2> <br> <div id="Book"> </div> <br> <br>');
          db.ref("user/"+user+"/fav").once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var childKey = childSnapshot.key;
      db.ref("user/"+user+"/fav"+"/"+childKey).orderByKey().on("child_added", function(snapshot) {  
       var val=snapshot.val().split("_");
          var  val1=val[0];
          var val2=val[1];
          db.ref("Items/"+val1+"/"+val2+"/eva/score/score").once("value", function(snapshot) { 
            var  score= snapshot.val();
        nn++; 
        $("#"+val1).prepend('<div style="border: 5px solid #bbb; width: 75%; border-radius: 15px; margin: 0 auto; max-width: 500px;" class="coupon"> <div style="padding: 2px 16px; background-color: #f1f1f1;" class="container"> <h3 style="text-align:center;">'+val2+' </h3>  </div> <div id='+nn+'>   </div></div>    <br>');
  get_info(val1,val2,nn,user,score,m);
  m++;})
      });
    });});   
}  
     })
     sleep(2000).then(() => { set_emp();})
}

function get_info(a,b,nn,user,score,m){   
  var db= firebase.database();

  var aut2;
      var des2;
      var ca2;
      var da2;
      var aud2;
  db.ref('Items/'+a+'/'+b).orderByKey().on("child_added", function(snapshot) {
    if(snapshot.key=="Author"){ aut2=snapshot.val();}
    if(snapshot.key=="Category"){ ca2=snapshot.val();}
    if(snapshot.key=="Release_date"){ da2=snapshot.val();}
    if(snapshot.key=="Audience"){ aud2=snapshot.val();}
    if(snapshot.key=="Description"){ des2=snapshot.val();}

  });
  sleep(1000).then(() => {
    up_pic2(a,b,nn,aut2,ca2,da2,aud2,des2,user,score,m);})


}
function up_pic2(a,b,nn,aut,ca,da,aud,des,user,score,m){
  var c;
  var l; 
if(aud=="+12"){ c="green"}
if(aud=="+16"){ c="grey"}
if(aud=="+18"){ c="red"}
if(a=="Book"){l="Author"}
if(a=="Movie"||a=="Serie"){ l="Director"}
   fireb_storage();
  var storageRef=firebase.storage().ref();
  var info=user+"_"+a+"_"+b+"_"+aut.replace(".","1")+"_"+ca+"_"+da+"_"+aud;
  storageRef.child(a+'_'+b+'.jpg').getDownloadURL().then(function(downloadURL) {
  $("#"+nn).prepend(' <div><img src='+downloadURL+'  alt="Avatar" style="width:100%; height:200px;"></div>          <div style="padding: 2px 16px; background-color: #f1f1f1;"  class="container" > <p text-center>'+l+' : '+aut+'</p> <p text-center>Category : '+ca+'</p> <p style="color: rgb(46, 46, 46);"  class="expire">Release date : '+da+'</p> <p style="color: '+c+'"  class="expire"><span style="border-radius: 50%; border-style:solid; border-width: 1px 1px 1px 1px; padding:0 3%; cursor:pointer; margin:0px;">'+aud+'</span></p><div id="star'+m+'"> <div> <ion-button expand="block" href= "/item-show/'+info+'"     color="medium"   ><ion-icon name="add-circle"></ion-icon>More info</ion-button></div> ')
  if(score==1){$("#star"+m).prepend('<span style="color:yellow;" class="fa fa-star checked"></span><span  class="fa fa-star "></span><span  class="fa fa-star "></span><span class="fa fa-star "></span><span  class="fa fa-star"></span>')  }
  if(score==2){$("#star"+m).prepend('<span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span  class="fa fa-star "></span><span class="fa fa-star "></span><span  class="fa fa-star"></span>')  }
  if(score==3){$("#star"+m).prepend('<span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span class="fa fa-star "></span><span  class="fa fa-star"></span>')  }
  if(score==4){$("#star"+m).prepend('<span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span  class="fa fa-star"></span>')  }
  if(score==5){$("#star"+m).prepend('<span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span><span style="color:yellow;" class="fa fa-star checked"></span>')  }
  })

}     
function  set_emp()   {
   if($.trim($("#Movie").html())==''){
  $("#Movie").prepend("<p style='color:#DBE7ED;text-align:center;'><b>It's empty</b></p>");
} 
if($.trim($("#Serie").html())==''){
  $("#Serie").prepend("<p style='color:#DBE7ED;text-align:center;'><b>It's empty</b></p>");
} 
if($.trim($("#Book").html())==''){
  $("#Book").prepend("<p style='color:#DBE7ED;text-align:center;'><b>It's empty</b></p>");
} 
}
      

        
function test_fav(user,it1,it2){
  firebase.initializeApp(firebaseConfig);
      var db= firebase.database();
       var it=it1+"_"+it2;

     
      db.ref("user/"+user+"/fav").once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          db.ref("user/"+user+"/fav/"+childKey+"/it0").once('value', function(snapshot) {
        
          
         if(snapshot.val()==it){
            its_fav(user,it1,it2);
          } 
        
      });
    });
  });
  }
  function its_fav(user,it1,it2){
    $("#add").remove();
    $(".p2-image").prepend('<ion-button onclick="delete_fav()"  id="add"><ion-icon name="checkmark-circle"></ion-icon>Added to favourite</ion-button> ')
  }


function add_fa(user,it1,it2){
  var it=it1+"_"+it2;
  firebase.initializeApp(firebaseConfig);
      var db= firebase.database();
      var i=0;       
      db.ref("user/"+user+"/fav").once("value").then(function(snapshot) { 
        if(snapshot.exists()){
   
         db.ref("user/"+user).child("fav").push().set({
          "it0" : it,
             });
             $("#add").remove();
             $(".p2-image").prepend('<ion-button onclick="delete_fav()" id="add"><ion-icon name="checkmark-circle"></ion-icon>Added to favourite</ion-button> ')       
      }
    else{ db.ref('user/'+user+'/fav').set({
      i:12
       })
     
         db.ref("user/"+user).child("fav").push().set({
              "it0" : it,
             });
             $("#add").remove();
             $(".p2-image").prepend('<ion-button onclick="delete_fav()" id="add"><ion-icon name="checkmark-circle"></ion-icon>Added to favourite</ion-button> ')              
    }
  })
}

function delete_fav(){
  var u=window.location.href.substring(7);
  u=u.split("/");
  var v=u[2].split("_");


  var db= firebase.database();

var f=v[2].toString().split('%20').join(' ');
  var user=v[0];
  var it1=v[1];
  var it2=f;
  var it=it1+"_"+it2;
swal.fire({
    title: 'Remove it from favourite?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, remove it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
  db.ref("user/"+user+"/fav").once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      db.ref("user/"+user+"/fav/"+childKey+"/it0").once('value', function(snapshot) {
     if(snapshot.val()==it){
      db.ref("user/"+user+"/fav/"+childKey).remove();
      } 
  });
});
});
sleep(1000).then(() => {
 $("#add").remove();
 $(".p2-image").prepend(' <ion-button  onclick="add_fav()" color="medium" id="add">  <ion-icon name="add"></ion-icon> Add to favourite</ion-button> ')              

});
    } 
  })
}


function add_eva(user,it1,it2,score){
  firebase.initializeApp(firebaseConfig);

  add_eva1(user,it1,it2); 
add_score(score,it1,it2);
}

function add_eva1(user,it1,it2){
  var it=it1+"_"+it2;
      var db= firebase.database();
      db.ref("user/"+user+"/eva").once("value").then(function(snapshot) { 
        if(snapshot.exists()){
         db.ref("user/"+user).child("eva").push().set({
              "it0" : it,
             });
          }
    else{ db.ref('user/'+user+'/eva').set({
      i:10
       })
       
         db.ref("user/"+user).child("eva").push().set({
          "it0" : it,
             });
    }
  })
  
}

function add_score(score,it1,it2){
      var db= firebase.database();
      db.ref("Items/"+it1+"/"+it2+"/eva").once("value").then(function(snapshot) { 
        if(snapshot.exists()){
          db.ref("Items/"+it1+"/"+it2+"/eva/ev").once("value", function(snapshot) { 
            var sc=snapshot.val()+","+score.toString();
           db.ref("Items/"+it1+"/"+it2+"/eva").set({
              "ev" : sc,
                 });
           })
          }
    else{
      var s="3,"+score.toString();
         db.ref("Items/"+it1+"/"+it2+"/eva").set({
          "ev" : s,
             });
    }
  })
  sleep(2000).then(() => { 
  set_score(it1,it2);})
}
function set_score(it1,it2) {
  var db= firebase.database();
  db.ref("Items/"+it1+"/"+it2+"/eva/ev").once("value", function(snapshot) {   
  var total = 0;
  var ss=snapshot.val();
  var point=ss.split(",");
for(var i = 0; i < point.length; i++) {
  total += parseInt(point[i]);
}
var avg = total / point.length;
var  score= Math.round(avg);
db.ref("Items/"+it1+"/"+it2+"/eva/score").set({
"score":score,               
});
})
sleep(2500).then(() => { 
  rel();})
}
function rel(){
  location.reload();
}
function set_friends(user){
        
    firebase.initializeApp(firebaseConfig);

var storageRef=firebase.storage().ref(); 
  var db= firebase.database();
  var us;
  var f;
  var l;
  var e;
  var im;
  var u;

  db.ref("user/"+user+"/friends").once("value").then(function(snapshot) { 
    if(!snapshot.exists()){
      $("#li").empty();
      $("#li").prepend("<p style='margin-top:50%;color:#DBE7ED;text-align:center;'><b>It's empty (add new friends)</b></p>");}
    else{  
      db.ref("user/"+user+"/friends/friends").once("value").then(function(snapshot) {   
        if(snapshot.val()==""){
          $("#li").empty();
          $("#li").prepend("<p style='margin-top:50%;color:#DBE7ED;text-align:center;'><b>It's empty (add new friends)</b></p>");
        }
        else{
        var fr=snapshot.val().split(",");
        for (i=0; i<fr.length; i++) {
           us=fr[i];
          f="f"+i;
          im="im"+i;
           l="l"+i;
           e="e"+i;
          u=us.toString()+"";
           $("#ll").prepend('<ion-item> <ion-avatar slot="start"> <img id='+im+' src=" " > </ion-avatar> <ion-label><div style="text-align: right;">        <ion-icon onclick="delete_friend(\'' + u + '\',\'' + user + '\')" color="dark" name="close"></ion-icon></div> <h2>'+us+'</h2> <h3><b id='+f+'> </b><b id='+l+'> </b></h3> <p id='+e+'> </p> </ion-label> </ion-item>')
           friends_infos(us,f,l,e,im);
          }
     }
        })
}  
 })

}
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  
  input = document.getElementById("myInput");
  
  filter = input.value.toUpperCase();
  
  ul = document.getElementById("myUL");
  
  li = ul.getElementsByTagName("li");
  
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
function myFunction2() {
  var input, filter, ul, li, a, i, txtValue;
  
  input = document.getElementById("myInput2");
  
  filter = input.value.toUpperCase();
  
  ul = document.getElementById("myUL2");
  
  li = ul.getElementsByTagName("li");
  
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
function add_friends(user){
  firebase.initializeApp(firebaseConfig);
  var db= firebase.database();

swal.fire({
title: 'Add friend ',
html: '<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for users.." title="Type in a name"> <ul id="myUL" style=" height: 170px; overflow-y: auto;list-style-type: none;padding: 0;margin: 0;">  </ul>' ,
showCancelButton: true,
confirmButtonText: 'Search',
cancelButtonText: 'cancel!',
reverseButtons: true
}).then((result) => {
if (result.value) {
 var iii=document.getElementById("myInput");
 var friend=iii.value;
 if(friend==""){    
    Swal.fire({
  title : 'Error!',
  icon:"warning",
  text: 'Invalid username!!!',
  confirmButtonText: 'ok',
  preConfirm: () => {  }
  } ) }
else{
 if(friend==user){ 
     Swal.fire({
  title : 'Error!',
  icon:"warning",
  text: 'the username you have entered is yours!!!',
  confirmButtonText: 'ok',
  preConfirm: () => {  }
  } )  }

 else{

  add_frr(user,friend,0);
}
}

} 
})
set_addfr(user)
}

function set_addfr(user){
  var db= firebase.database();
  db.ref("user").once("value").then(function(snapshot) {
    var use=Object.keys(snapshot.val())
    use.splice(use.indexOf("admin"),1);
    use.splice(use.indexOf(user),1);
    db.ref("user/"+user+"/friends").once("value").then(function(snapshot) {
      if(!snapshot.exists()){
 for (i=0; i<use.length; i++) {
   but="butt"+i;
  $("#myUL").prepend('<li> <ion-item><a  style=" margin-top: -1px; padding: 12px; text-decoration: none; font-size: 18px; color: black; display: block">'+use[i]+'</a><ion-button id="'+but+'" onclick="add_frr(\'' + user + '\',\'' + use[i] + '\',\'' + but + '\')" slot="end"> Add </ion-button> </ion-item> </li>   ')
}
      } 
      if(snapshot.exists()){
        db.ref("user/"+user+"/friends/friends").once("value").then(function(snapshot) {   
          if (snapshot.val()==""){console.log("yes")}
          var fr=snapshot.val().split(",");
          for (i=0; i<use.length; i++) {
                    but="butt"+i;
            if(fr.includes(use[i])){
              $("#myUL").prepend('<li> <ion-item><a  style=" margin-top: -1px; padding: 12px; text-decoration: none; font-size: 18px; color: black; display: block">'+use[i]+'</a><ion-button slot="end" color="light"> <ion-icon name="checkmark-outline" color="success"></ion-icon>Added </ion-button> </ion-item> </li>')
            }
            else{
              $("#myUL").prepend('<li> <ion-item><a  style=" margin-top: -1px; padding: 12px; text-decoration: none; font-size: 18px; color: black; display: block">'+use[i]+'</a><ion-button id="'+but+'" onclick="add_frr(\'' + user + '\',\'' + use[i] + '\',\'' + but + '\')" slot="end"> Add </ion-button> </ion-item> </li>')
            }
          }
        })
      }
       })
  })
}

function add_frr(user,friend,butt){
  var db= firebase.database();
  db.ref("user/"+friend).once("value").then(function(snapshot) {   
    if(!snapshot.exists()){ 
      Swal.fire({
      title : 'Error!',
      icon:"warning",
      text: 'Not found!!!',
      confirmButtonText: 'ok',
      preConfirm: () => {  }
      } ) }
    if(snapshot.exists()){
      db.ref("user/"+user+"/friends").once("value").then(function(snapshot) {   
        if(!snapshot.exists()){ friends_noexist(user,friend,butt)}
        if(snapshot.exists()){ friends_exist(user,friend,butt)}
      })
  
    }
  })

}

function friends_exist(user,friend,butt){
  var db= firebase.database();
  db.ref("user/"+user+"/friends/friends").once("value").then(function(snapshot) {   
    if(snapshot.val()==""){
      friends_noexist(user,friend,butt)
    }
     else{ 
       db.ref("user/"+user+"/friends/friends").once("value").then(function(snapshot) {   
    var v=snapshot.val().split(",");
    if(!v.includes(friend)){
      if(butt!=0){
        $( "#"+butt ).attr('onclick', '');
        $( "#"+butt).attr( "color", "light" );
        $("#"+butt).empty();
        $( "#"+butt).prepend('<ion-icon name="checkmark-outline" color="success"></ion-icon>Added');}
      db.ref('user/'+user+'/friends/friends').once('value', function(snapshot) {
        var value=snapshot.val()+","+friend;
        db.ref('user/'+user+'/friends').set({
          friends:value
           })
      })
    }
    if(v.includes(friend)){
      Swal.fire({
        title : 'Error!',
        icon:"warning",
        text: 'User already exist in your friends list!!!',
        confirmButtonText: 'ok',
        preConfirm: () => {  }
        } )
    }
  })}
  })
}

function friends_noexist(user,friend,butt){
 var db= firebase.database();
  db.ref('user/'+user+'/friends').set({
      friends:friend
       })
       if(butt!=0){
$( "#"+butt ).attr('onclick', '');
$( "#"+butt).attr( "color", "light" );
$("#"+butt).empty();
$( "#"+butt).prepend('<ion-icon name="checkmark-outline" color="success"></ion-icon>Added');}
}

function friends_infos(us,f,l,e,im){
  var ima=document.getElementById(im);
  var db= firebase.database();
  var storageRef=firebase.storage().ref(); 
  storageRef.child(us+'.jpg').getDownloadURL().then(onResolve, onReject);
  function onResolve(foundURL) {
    storageRef.child(us+'.jpg').getDownloadURL().then(function(downloadURL) {
    ima.src=downloadURL;
    })
  } 
  function onReject(error) {
    storageRef.child('avatar.jpg').getDownloadURL().then(function(downloadURL) {
      ima.src=downloadURL;
    })
  }
  db.ref("user/"+us+"/info/fname").once("value").then(function(snapshot) {   
    $("#"+f).prepend(''+snapshot.val()+' ');
  })
  db.ref("user/"+us+"/info/lname").once("value").then(function(snapshot) {   
    $("#"+l).prepend(''+snapshot.val()+'');
  })
  db.ref("user/"+us+"/info/email").once("value").then(function(snapshot) {   
    $("#"+e).prepend('<b>'+snapshot.val()+'</b>');
  })
}

function delete_friend(fr,user){
  var fri;
  var ne;
  var db= firebase.database();
  swal.fire({
    title: 'Remove '+fr+' from friends list?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, remove it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
  db.ref("user/"+user+"/friends/friends").once('value', function(snapshot) {
    fri=snapshot.val().split(",")
    fri.splice(fri.indexOf(fr),1);
    ne=fri.join(",")
    db.ref('user/'+user+'/friends').set({
      friends:ne
       })
  })
  sleep(2000).then(() => {location.reload();})

    } 

  })
}

function swat_info(j,sender,link){
  Swal.fire({
    title: 'Share it with :',
    html: ''+j+'' ,
    showConfirmButton: true,
  preConfirm: () => { }  } )
} 
function swat_err(j){
  swal.fire({
    title: 'Error',
    icon: 'warning',
    html: ''+j+'' ,
    confirmButtonText: 'ok',
    })
}

function share_it(sender,link){
  firebase.initializeApp(firebaseConfig);
    var db= firebase.database();
    var j;
    db.ref("user/"+sender+"/friends").once("value").then(function(snapshot) { 
      if(!snapshot.exists()){
      j='<p style="margin-top:5%;color:#DBE7ED;text-align:center;"><b>You must add add new friends</b></p>'
      swat_err(j);}
      else{  
        db.ref("user/"+sender+"/friends/friends").once("value").then(function(snapshot) {   
          if(snapshot.val()==""){
            j='<p style="margin-top:5%;color:#DBE7ED;text-align:center;"><b>You must add new friends</b></p>'
            swat_err(j)
          }
          else{
            
           j='<input type="text" id="myInput2" onkeyup="myFunction2()" placeholder="Search for friends.." title="Type in a name"> <ul id="myUL2" style=" height: 170px; overflow-y: auto;list-style-type: none;padding: 0;margin: 0;">';
           var fr=snapshot.val().split(",");
          for (i=0; i<fr.length; i++) {
            j=j+'<li> <ion-item><a  style=" margin-top: -1px; padding: 12px; text-decoration: none; font-size: 18px; color: black; display: block">'+fr[i]+'</a><ion-button id="but'+i+'" onclick="add_noti(\'' + fr[i] + '\',\'' + sender + '\',\'' + link + '\',\'' + i + '\')" slot="end"> Share </ion-button> </ion-item> </li>'
          }
          j=j+'  </ul>';
          swat_info(j,sender,link);
       }
          })
  }  
   })
}

function add_noti(user,sender,link,idd){
var b= "but"+idd;
$( "#"+b ).attr('onclick', '');
$( "#"+b ).attr( "color", "light" );
$( "#"+b ).empty();
$( "#"+b ).prepend('<ion-icon name="checkmark-outline" color="success"></ion-icon>shared');
  var lin=user+link
  var db= firebase.database();
 d=date_format();
db.ref("user/"+user).child("notification").push().set({
    "sender":sender,
    "link" :lin ,
    "date":d
  })
}
function set_noti(user){
  firebase.initializeApp(firebaseConfig);
  var db= firebase.database();
 db.ref("user/"+user+"/notification").once('value', function(snapshot) {
  if(!snapshot.exists()){
    $("#lin").empty();
    $("#lin").prepend("<p style='margin-top:50%;color:#DBE7ED;text-align:center;'><b>No notifications</b></p>");
  }
  else{
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      db.ref("user/"+user+"/notification/"+childKey).once('value', function(snapshot) {
    $("#lln").prepend("<ion-item> <ion-label> </ion-label> <div><p style='color:rgb(66, 72, 75)'> <b style='color:rgb(0, 0, 0)'>"+snapshot.val().sender+"</b> has send you an item to check it, <a href= '/item-show/"+snapshot.val().link+"'>Click here to view it</a> </p><b style='color:rgb(0, 0, 0);position: absolute; top: 50px; right: 10px;'> "+snapshot.val().date+"</b></div></ion-item>");
  });
});
}
});

}
