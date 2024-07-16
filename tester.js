var Num1 = 10;
var Num2 = 10;
var Result;
var Oper = prompt("Ingresa la operación a realizar");
var Prueba = Operaciones();

alert(Prueba);

function Operaciones() {
    if (Oper == "sumar") {
        suma();
    }
    if (Oper == "restar") {
        restar();
    }
    if (Oper = "multiplicar") {
        multiplicacion();
    }
    if (Oper = "dividir") {
        division();
    }
    reuno = resultado;
    console.log("El resultado es: " + resultado)
}
function suma() {
    Result = Num1 + Num2;
}
function resta() {
    Result = Num1 - Num2;
}
function mulitplicacion() {
    Result = Num1 * Num2;
}
function division() {
    Result = Num1 / Num2;
}