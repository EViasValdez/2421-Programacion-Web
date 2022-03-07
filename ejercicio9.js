function tabla(){
    var nombre = document.getElementById("nombres").value;
    var ap = document.getElementById("apellidos").value;
    var montoprestamo = document.getElementById("montoprestamo").value;
    var fechapago = document.getElementById("fechapago").value;
    var nplazo = document.getElementById("nplazo").value;

    if (nombre == "" || ap == "" || montoprestamo == "" || fechapago == "" || nplazo == "")
    {
        alert("No ha ingresado dato alguno");
    }
    else{
        var fila = "<tr><th>"+ nombre +"</th><th>"+ ap +"</th><th>"+ montoprestamo + "</th><th>" + fechapago + "</th><th>"+ nplazo + "</th></tr>";
        var boton = document.createElement("tr");
        boton.innerHTML = fila;
        document.getElementById("tablacontenido").appendChild(boton);
        alert("Datos aceptados");
    }
}

function amortizacion(){
    var iva = montoprestamo * 0.12;
    let iniciointeres = monto * 0.01 + iva;
    var total = montoprestamo + iniciointeres;
    var totaln = 0 - total;
    var amortizacion = document.getElementById("amortizacion");

    if (amortizacion == 1){
        let aux = 1 + 0.12 / plazos * plazos;
        var FRC = 1 + 0.12 / plazos * aux / aux * -1;
        var PI = total * FRC;
        console.log(PI);
    }
    else (amortizacion == 2);{
        var A2 = PI;
        FO = A2 + I * 1 + 0.12

        if (totaln > 0){
            alert("Saldo salado");
        }
    }
}
function poner(){
    tabla();
    amortizacion();
}