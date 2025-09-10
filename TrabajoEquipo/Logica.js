$(document).ready(function () {
    $("#tres").hide();
        $("#boton").click(function () {
            // var Puntualizadad = Math.floor(Math.random() * 1);
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
            let InteresInicial = Monto * 0.01 + iva;
            var Total = Monto + InteresInicial;
            var TotalNegativo = 0 - Total;
            
            console.log(`Sr. ${NombreCompleto} su préstamo fue aceptado.`);  
            console.log(TotalNegativo);

            // Datos importantes
                $("#boton2").click(function () { 
                    $("#tres").show();

                    var montos = $("#pago").val();

                    if (Amortizacion == 0)
                    {
                        let Aux = 1 + 0.12 / Plazos * Plazos;
                        var FRC = 1 + 0.12 / Plazos * Aux / Aux * - 1;
                        var PI = Total * FRC;

                        console.log(PI);
                        var Nuevo = ((Math.pow((1 + (t / p))) * (t / p)), 2)
                    }
                    if (Amortizacion == 1)
                    {
                        var A2 = PI;
                        FO = A2 + I * 1 + 0.12

                        if (TotalNegativo > 0)
                        {
                            console.log("pago saldado");
                        }
                    }
                });
            $("#boton3").click( function () {
                for (let x = 0; x < Plazos; x++) {
                   $(".nombre").html(x);
                   $(".periodo").html(`${FechaPrestamo1} - ${FechaPrestamo2} - ${FechaPrestamo3}`);
                   $(".dias").html(Dias);
                   $(".saldo").html(Monto);
                   $(".insoluto").html(TotalNegativo);
                   $(".iva").html(iva);
                }
            });
    });
});