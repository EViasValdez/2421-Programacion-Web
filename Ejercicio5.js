$( document ).ready(
function() {
    CargarValores();
}
);

var Total = 0;

$(".botones").click(function()
{
    var Valor = $(this).attr("valor");
    
    if (Valor == 1)
    {
        $(this).css("background-color", "white");
        Total++;
    } else {
        $(this).css("background-color", "red");
        alert("Perdiste, estos son tus puntos: " + Total);
        location.reload();
    }
}
);

function ValorAleatorio(min = 0, max = 1) {
    return Math.floor(Math.random () * (max - min + 1)) + min;
}

function CargarValores() {
    $(".verificar").each(
        function(){
            $(this).attr("valor", ValorAleatorio)
        }
    );
}