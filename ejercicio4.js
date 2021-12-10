document.getElementById("botoncalcular").click(function(){
    alert();
});

function calcular(){
    let n1 = parseInt(document.getElementById("Numero1").value);
    let n2 = parseInt(document.getElementById("Numero2").value);
    var operacion = document.getElementById("Operacion").value;
    var calcular = document.getElementById("Calcular").value;
   if(operacion == 1){
        document.getElementById("Resultado").value = n1 + n2;
    }
    else if(operacion == 2){
        document.getElementById("Resultado").value = n1 - n2;
    }
    else if(operacion == 3){
        document.getElementById("Resultado").value = n1 * n2;
    }
    else if(operacion = 4){
        document.getElementById("Resultado").value = n1 / n2;
    }
}