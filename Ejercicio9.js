function Tabla() {
    var Nombre = document.getElementById("nombres").value;
    var Ap = document.getElementById("apellidos").value;
    var MontoPrestamo = document.getElementById("MontoPrestamo").value;
    var FechaPago = document.getElementById("FechaPago").value;
    var NPlazo = document.getElementById("NPlazo").value;

    if (Nombre == "" || Ap == "" || MontoPrestamo == "" || FechaPago == "" || NPlazo == "")
    {
        alert("No ha ingresado dato alguno");
    }
    else
    {
        var Fila = "<tr><th>"+ Nombre +"</th><th>"+ Ap +"</th><th>"+ MontoPrestamo + "</th><th>" + FechaPago + "</th><th>"+ NPlazo + "</th></tr>";
        var Boton = document.createElement("tr");

        Boton.innerHTML = Fila;
        document.getElementById("tablacontenido").appendChild(Boton);
        alert("Datos aceptados");
    }
}
function Amortizacion() {
    var Iva = MontoPrestamo * 0.12;
    let InicioInteres = monto * 0.01 + Iva;
    var Total = MontoPrestamo + InicioInteres;
    var TotalN = 0 - Total;
    var Amortizacion = document.getElementById("Amortizacion");

    if (Amortizacion == 1) {
        let Aux = 1 + 0.12 / plazos * plazos;
        var FRC = 1 + 0.12 / plazos * Aux / Aux * - 1;
        var PI = Total * FRC;
        
        console.log(PI);
    }
    else (Amortizacion == 2);
    {
        var A2 = PI;
        
        FO = A2 + I * 1 + 0.12

        if (TotalN > 0) {
            alert("Saldo salado");
        }
    }
}
function Poner() {
    Tabla();
    Amortizacion();
}