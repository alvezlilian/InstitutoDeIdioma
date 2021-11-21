
/*function mostrarOcultarInfo(){
    if(document.getElementById("boton").value=="Ver menos"){
        document.getElementById("info").style.display="none";
        //Para cambiar el valor del botón. En lugar de decir ocultar ahora dice mostrar
        document.getElementById("boton").value="Ver mas";
    }else{
        document.getElementById("info").style.display="block";
        document.getElementById("boton").value="Ver menos";
    } 
}**/

$(document).ready(function(){
    $(".ocultar").click(function(){
        if($(".info").is(" :visible")){
            $(".info").hide();
            $(".mostrar").show();
        }
    });
    $(".mostrar").click(function(){
        if($(".info").is(" :hidden")){
            $(".info").show();
            $(".mostrar").hide();
        }
    });
});


