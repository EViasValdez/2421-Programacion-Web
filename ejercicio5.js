$( document ).ready(
function() {
    cargarValores();
}
);

var total = 0;

$(".botones").click(function()
{   
    var valor = $(this).attr("valor");
    if (valor == 1){
        $(this).css("background-color", "white");            
        total++;
    }else{
        $(this).css("background-color", "red");
        alert("Perdiste, estos son tus puntos: " + total);
        location.reload();            
    }
}
);
function valorAleatorio(min = 0, max = 1){
    return Math.floor(Math.random () * (max - min + 1)) + min;
}
function cargarValores(){
    $(".verificar").each(
        function(){
            $(this).attr("valor", valorAleatorio)
        }
    );
}