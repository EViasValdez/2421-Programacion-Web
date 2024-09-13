$(document).ready(function () {
    $("#tres").hide();
        $("#boton").click(function () {
            var puntualizadad = Math.floor(Math.random() * 1);
            var Nombre = $("#nombres").val();
            var ApeidoPaterno = $("#apeidoP").val();
            var ApeidoMaterno = $("#apeidoM").val();
            var Monto = parseFloat($("#pedido").val());
            var Plazos = parseFloat($("#tipo").val());
            var Amortizacion = $("#Amortizacion").val();
            var FechaPrestamo1 = $("#fecha1").val();
            var FechaPrestamo2 = $("#fecha2").val();
            var FechaPrestamo3 = $("#fecha3").val();
            var Dias = 28 * Plazos;
            var NombreCompleto = Nombre + " " + ApeidoPaterno + " " + ApeidoMaterno;
            var iva = Monto * 0.12;
            let interesInicial = Monto * 0.01 + iva;
            var total = Monto + interesInicial;
            var totalNegativo = 0 - total;
            
            console.log(`Sr. ${NombreCompleto} su préstamo fue aceptado.`);  
            console.log(totalNegativo);

            // Datos importantes
                $("#boton2").click(function () { 
                    $("#tres").show();

                    var montos = $("#pago").val();

                    if (Amortizacion == 0) {
                        // seccion2
                        let aux = 1 + 0.12 / Plazos * Plazos;
                        var FRC = 1 + 0.12 / Plazos * aux / aux * - 1;
                        var PI = total * FRC;

                        console.log(PI);
                        var nuevo = ((Math.pow((1 + (t / p))) * (t / p)), 2)
                    }
                    if (Amortizacion == 1) {
                        var A2 = PI;
                        FO = A2 + I * 1 + 0.12
                        if (totalNegativo > 0) {
                            console.log ("pago saldado");
                        }
                    }
                });
            $("#boton3").click( function () {
                for (let x = 0; x < Plazos; x++) {
                   $(".nombre").html(x);
                   $(".periodo").html(`${FechaPrestamo1} - ${FechaPrestamo2} - ${FechaPrestamo3}`);
                   $(".dias").html(Dias);
                   $(".saldo").html(Monto);
                   $(".insoluto").html(totalNegativo);
                   $(".iva").html(iva);
                }
            });
    });
});