
let cursos=[
    {
        "establecimiento":"Instituto Mataderos",
        "direccion":"Murguiondo 2113",
        "provincia":"bsas",
        "localidad":"Mataderos",
        "mail":"institutomataderos@cali.edu.ar"
    },
    {
        "establecimiento": "Instituto Milenio",
        "direccion":"Alberti 250",
        "provincia":"cba",
        "localidad":"Villa Allende",
        "mail":"institutomilenio@cali.edu.ar"
    },
    {
        "establecimiento":"Instituto D.Alighieri",
        "direccion":"Beschtedt 141",
        "provincia":"rnegro",
        "localidad":"San Carlos de Bariloche",
        "mail":"institutodalighieri@cali.edu.ar"
    },
    {
        "establecimiento":"Instituto Güemes",
        "direccion":"Coronel Vidt 342",
        "provincia":"Salta",
        "localidad":"Salta",
        "mail":"institutoguemes@cali.edu.ar"
    }
];
$("document").ready(function(){
    $(".boton").addClass("separar");
    $('.slider').slick({
        autoplay:true,
      
        dots:true,
        fade:true,
        infinite: true,
        mobileFirst: true
     } ); 
     $("#contenedor-precio").hide();
    $("#hora-mod   ").change(function(){
 agregarPrecio($(this).val());
        
    });
$(".boton").click(function(){
       guardarvalores();
});

} );
function guardarvalores(){
    let dato1=$("#provincia option:selected").html();
    let dato2=$("#instituto option:selected").html();
    let dato3=$("#idioma option:selected").html();
    let dato4=$("#hora-mod option:selected").html();
    let dato5=$("#output option:selectrd").html();

    localStorage.setItem("provincia",dato1);
    localStorage.setItem("instituto",dato2);
    localStorage.setItem("idioma",dato3);
    localStorage.setItem("hora-mod",dato4);
    localStorage.setItem("precio",dato5);
   
    
}
function agregarPrecio(valor){
    console.log(valor);

    if(valor==1 ||valor==3||valor==7){
    
        $(".output").text("5000$");
       
        $("#contenedor-precio").show();

    }else{
      
        $(".output").text("3000$");
       
        $("#contenedor-precio").show();
    }



}