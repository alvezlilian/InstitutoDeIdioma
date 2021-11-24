$(document).ready(function(){
 
    $("#sede").change(function () {
 
        ocultarEstablecimiento($(this).val());
        
    });
});
 
function ocultarEstablecimiento(valor){
switch(valor){
    case 1:
        $("#opcion-1").fadeOut();
        break;
 
}
    
}