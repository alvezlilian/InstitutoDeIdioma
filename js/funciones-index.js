let opProvincias = {
    bsas : ["", "Instituto Mataderos"],
    cba : ["", "Instituto Milenio"],
    rnegro : ["", "Instituto D.Alighieri"],
    salta : ["", "Instituto Güemes"]
}
$("document").ready(function(){
    $('.slider').slick({
        autoplay:true,
        /*autoplaySpeed: 5000,
        speed: 300,*/
        dots:true,
        fade:true,
        infinite: true,
        mobileFirst: true
     } ); 
     
    $("#provincia").change(function(){
        mostrarCombo();
    });
});

function mostrarCombo(){
    let seleccion =  $("#provincia").val();
    $("#establecimiento").empty();

    opProvincias[seleccion].forEach(function(element, index){
        $("#establecimiento").append('<option value="'+element+'">'+element+'</option>');
    });
}

function mostrarDatos(){
    
		let info = $('#provincia').options[$('#provincia').selectedIndex].text;

		localStorage.setItem($("#provincia"), info);

		$("#algo").innerHTML = localStorage.getItem($("#provincia"));
}