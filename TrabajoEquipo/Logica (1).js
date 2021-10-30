$(document).ready(function () {
 
    $("#tres").hide();

        $("#boton").click(function () {
        var puntualizadad=Math.floor(Math.random() * 1);
        var nombre=$("#nombres").val();
        var apeidoPaterno=$("#apeidoP").val();
        var apeidoMaterno=$("#apeidoM").val();
        var monto=parseFloat($("#pedido").val());
        var plazos=parseFloat($("#tipo").val());
        var amortizacion=$("#amortizacion").val();
        var fechaPrestamo1=$("#fecha1").val();
        var fechaPrestamo2=$("#fecha2").val();
        var fechaPrestamo3=$("#fecha3").val();
        var dias=28*plazos;
        var nombreCompleto=nombre+" "+apeidoPaterno+" "+apeidoMaterno;
        var iva=monto*0.12;
        let interesInicial=monto*0.01+iva;
        var total=monto+interesInicial;
        var totalNegativo=0-total;
    
        console.log(`Sr. ${nombreCompleto} su prestamo fue aceptado.`);  
        console.log(totalNegativo);
        //datos importantes 
            $("#boton2").click(function () { 
                $("#tres").show();

                var montos=$("#pago").val();
                if(amortizacion==0){
                    //secion2
                    let aux=1+0.12/plazos*plazos;
                    var FRC=1+0.12/plazos*aux/aux*-1;
                    var PI=total*FRC;
                    console.log(PI);
                    var nuevo=((Math.pow((1+(t/p)))*(t/p)),2)
                }
                if(amortizacion==1){
                    var A2=PI;
                    FO=A2+I*1+0.12
                    if(totalNegativo>0){
                        console.log ("pago saldado");
                    }
                }
            });

            $("#boton3").click( function () {
                for(let x=0;x<plazos;x++){
                   $(".nombre").html(x);
                   $(".periodo").html(`${fechaPrestamo1}-${fechaPrestamo2}-${fechaPrestamo3}`);
                   $(".dias").html(dias);
                   $(".saldo").html(monto);
                   $(".insoluto").html(totalNegativo);
                   $(".iva").html(iva);
                }
            });
    });
});
