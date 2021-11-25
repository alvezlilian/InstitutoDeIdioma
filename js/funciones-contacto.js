const regexEmail= /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
const regexNumero=/[0-9]{4,5}-[0-9]{4}$/;
const MAX_CARACTER=1000;


 
$(document).ready(function(){
 
$("#form").submit(function(e){
  validar(e);
});
 
$("#consulta").keyup(function(e){ 
       validar(e);
});

$("#tel").keyup(function(e){
    validar(e);
});
 
$("#nombre, #apellido").keyup(function(e){
    validar(e);
});
});
function validar(e){
   let error=false;
    $("#mensajeNombre,#mensajeApellido,#mensajeTel,#mensajeEmail,#mensajeTex").empty(); 
     $("#form input, #form textarea").removeClass();
 
   if($("#nombre").val()==""){
       error=true;
     
   
       $("#mensajeNombre").append("<p>Debes ingresar tu nombre</p>")
 
   }
   if($("#apellido").val().length<2){
    error=true;
    $("#mensajeApellido").append("<p>Debes ingresar tu apellido</p>")
}
if(!$("#email").val().match(regexEmail)){
    error =true;
    $("#mensajeEmail").append("<p>Debes ingresar un email valido</p>");
 
}
 
if(!$("#tel").val().match(regexNumero)){
    error =true;
    $("#mensajeTel").append("<p>Debes ingresar un telefono  valido</p>");
 
}
if($("#consulta").val().length<=MAX_CARACTER){
      
    $("#mensajeTex").append("<p> "+$("#consulta").val().length+"/1000</p>");   
}else{
   error =true;
    $("#mensajeTex").append("<p> "+$("#consulta").val().length+"/1000</p>");  
    
    $("#mensajeTex").append("<p> Superaste los caracteres maximos</p>"); 
}





 
    if(error){
       e.preventDefault();  
      
 
    }
}