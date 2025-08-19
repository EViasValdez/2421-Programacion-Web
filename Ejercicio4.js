document.getElementById("botoncalcular").click(function(){
    alert();
});

function Calcular() {
    let N1 = parseInt (document.getElementById("Numero1").value);
    let N2 = parseInt (document.getElementById("Numero2").value);
    var Operacion = document.getElementById("Operacion").value;
    // var Calcular = document.getElementById("Calcular").value;

    if (Operacion == 1)
    {
        document.getElementById("Resultado").value = N1 + N2;
    }
    else if (Operacion == 2)
    {
        document.getElementById("Resultado").value = N1 - N2;
    }
    else if (Operacion == 3)
    {
        document.getElementById("Resultado").value = N1 * N2;
    }
    else if (Operacion = 4)
    {
        document.getElementById("Resultado").value = N1 / N2;
    }
}