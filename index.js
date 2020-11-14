var hostElement = document.getElementById("host-element");
var estaurlobj="yyuu.glb";
var raizdelosobjetos="https://axsazxcdas.github.io/algonoimportante/";
BABYLON.Sandbox.Show(hostElement);

document.onkeydown=function(e){
  
    if(e.key=="a"){
        console.log(miglobal.loadAssetFromUrl);
        cargaunobjglndesdeurlgiovanni(estaurlobj);
    } 
    if(e.key=="s"){
      /*   console.log(miglobal.loadAssetFromUrl);
        cargaunobjglndesdeurlgiovanni(raizdelosobjetos+"mos2.glb"); */
     
    } 
}


var varwx=window.innerWidth;
var varhx=window.innerHeight;
$(document).resize(function () { 
    varwx=window.innerWidth;
    varhx=window.innerHeight;
});

function cargaunobjglndesdeurlgiovanni(raizyfileurl){

miglobal.loadAssetFromUrl(raizyfileurl);
}

$(document).ready(function () {
   // cargaunobjglndesdeurlgiovanni(raizdelosobjetos+"mos2.glb");


   var position1 = $("#idimg1").position();
var top1 = position1.top;
var left1 =varwx*0.0001+ position1.left*direccionover;
console.log(position1);
console.log(varwx*0.3);
jcreategaleria();

organizarm();


encuentrajson();


});




var unitdades="px";
var direccionover=-1;
var boolcomoprecionome=true;
var distancaix=0.3;
var timeanimamenu=2000;
function organizarm(){
    varwx=window.innerWidth;
    varhx=window.innerHeight;

    var xesm=window.innerWidth*0.5;
    var xesm2=window.innerWidth*0.1;
    if(boolcomoprecionome){
        boolcomoprecionome=!boolcomoprecionome;
        distancaix=distancaix*-1;
  
var position1 = $("#idimg1").position();
 position1.top = position1.top-0;
position1.left=position1.left+varwx*distancaix;//varwx*0.0001+ position1.left*;
console.log(position1);
    $("#idimg1").animate({
        left: String(xesm2)+unitdades,
        top: String(varhx*0.30)+unitdades
     
        
      },timeanimamenu,function(){

 
    
      });
      var position2 = $("#idimg2").position();
      position2.top = position2.top-0;
     position2.left=position2.left+varwx*distancaix;//varwx*0.0001+ position1.left*;
   
         $("#idimg2").animate({
             left: String(xesm2)+unitdades,
             top: String(varhx*0.70)+unitdades
          
             
           },timeanimamenu,function(){
     
      
         
           });
    }
    
    else{
        boolcomoprecionome=!boolcomoprecionome;

        distancaix=distancaix*-1;
var position1 = $("#idimg1").position();
 position1.top = position1.top-0;
position1.left=position1.left+varwx*distancaix;//varwx*0.0001+ position1.left*;
console.log("position1");
    $("#idimg1").animate({
        left: String(xesm)+unitdades,
        top: String(varhx*0.3)+unitdades
     
        
      },timeanimamenu,function(){


    
      });

      var position2 = $("#idimg2").position();
      position2.top = position2.top-0;
     position2.left=position2.left+varwx*distancaix;//varwx*0.0001+ position1.left*;
   
         $("#idimg2").animate({
             left: String(xesm)+unitdades,
             top: String(varhx*0.70)+unitdades
          
             
           },timeanimamenu,function(){
     
      
         
           });

    }
}


function jcreategaleria(){
    var idx="";
for(var i in arrauobjgalerias){
 idx=arrauobjgalerias[i].id;

 var imgdiv=' <div class="cldiv"> <img id="'+idx+'" onclick="functionimg(this)" class="climggaleria" src="" alt=""></div>';

 $("#idgaleria").append(imgdiv);


}

 
}
var raizimg="";
var terminacionfile="";
var varraizdeobj3d="https://axsazxcdas.github.io/algonoimportante/";
var arrauobjgalerias={

    ob1:{
        id:"",
        img:"id1",
        url:varraizdeobj3d+"ambulancia.glb"+terminacionfile,
        autor:"",
        precio:"",
        email:""
    },

};


function functionimg (_thiss){
    var lotengo=false;
    var  laurl="";
for(var i in arrauobjgalerias ){
if(arrauobjgalerias[i].id==_thiss.id){
    lotengo=true;
    laurl=arrauobjgalerias[i].url;
    break;
}
}

if(lotengo){
    
document.getElementById("idmenuselecionaobj").style.display="none";
    cargaunobjglndesdeurlgiovanni(laurl);
}
}


function  firahome (){
    document.getElementById("idmenuselecionaobj").style.display="block";

    document.getElementById("idiframescuptl").style.display="none";
}


function fcl1(){

    
    document.getElementById("idiframescuptl").style.display="block";

    document.getElementById("idselecionah").style.display="none";
    document.getElementById("idiframescuptl").src="";
    document.getElementById("idiframescuptl").src="https://stephaneginier.com/sculptgl/";
    try {
        document.getElementById("idmenucodigo").style.display="none";

    } catch (error) {
        
    }

    try {
        document.getElementById("idmenuselecionaobj").style.display="none";
   //     element
    } catch (error) {
        
    }
  //  window.location="https://stephaneginier.com/sculptgl/";
}

function fcl2(){
    document.getElementById("idiframescuptl").style.display="block";

    document.getElementById("idselecionah").style.display="none";
    document.getElementById("idiframescuptl").src="";
    document.getElementById("idiframescuptl").src="https://robinsonnelsy.github.io/mipaint/www.photopea.com/index.html";
    try {
        document.getElementById("idmenucodigo").style.display="none";

    } catch (error) {
        
    }

    try {
        document.getElementById("idmenuselecionaobj").style.display="none";
   //     element
    } catch (error) {
        
    }

 
}


function fcodifo(){
    document.getElementById("idmenuselecionaobj").style.display="none";
    document.getElementById("idmenucodigo").style.display="flex";

}
var boollgaleria=true;
function fcodifo1(){
    if(boollgaleria){
        boollgaleria=!boollgaleria;
        document.getElementById("idgaleria").style.display="none";
    }
    else{
        boollgaleria=!boollgaleria;
        document.getElementById("idgaleria").style.display="flex";
    }



}


function fokpass2(){
    document.getElementById("idmenuselecionaobj").style.display="block";
    document.getElementById("idmenucodigo").style.display="none";

}

function fokpass(){
    var idvalo0=document.getElementById("idin1").value;
    var idvalorp=document.getElementById("idin2").value;
    if(idvalorp=="bogota"){
        if(idvalo0=="giovanni"){
            document.getElementById("idmenucodigo").style.display="none";
            document.getElementById("idselecionah").style.display="flex";

            document.getElementById("idmenuselecionaobj").style.display="none";

            globalindicasiexporto=true;
          
        }
    
    }
}

var raizjsonsto="https://noenadies.github.io/tiendajs/";
var nombrejson="jsonstore.json";
var arradatosjon=[];
function encuentrajson(){

 $.getJSON(raizjsonsto+nombrejson, function(result){
    
    arradatosjon=result;

    var idx="";
    var srca="";
    for(var i in arradatosjon){
     idx=arradatosjon[i].id;
     srca=arradatosjon[i].img;

     var imgdiv=' <div class="cldiv"> <img id="'+idx+'" onclick="elclickdatosjson(this)" class="climggaleria" src="'+srca+'" alt=""></div>';
    
     $("#idgaleria").append(imgdiv);
    
    
    }
    

/*     $.each(result, function(i, field){
    //  $("div").append(field + " ");
      console.log(field); 
      console.log(i);
    }); */
  });

}



function  elclickdatosjson(_this) { 
var tengo=false;
var urldelobj="";
console.log(_this);
    for(var i in arradatosjon){
if(arradatosjon[i].id==_this.id){
    tengo=true;
    urldelobj=arradatosjon[i].fileurl;
    break;
}
    }

if(tengo){
    document.getElementById("idmenuselecionaobj").style.display="none";
    cargaunobjglndesdeurlgiovanni(urldelobj);
}

 }