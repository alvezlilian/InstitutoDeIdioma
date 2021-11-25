
$(document).ready(function(){
    $("#dato1").text(localStorage.getItem("provincia"));
    $("#dato2").text(localStorage.getItem("instituto"));
    $("#dato3").text(localStorage.getItem("idioma"));
    $("#dato4").text(localStorage.getItem("hora-mod"));
    $("#dato5").text(localStorage.getItem("precio"));
});