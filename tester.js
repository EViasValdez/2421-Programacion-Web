var num1 = 10;
var num2 = 10;
var result;
var oper = prompt("Ingresa la operación a realizar");
var prueba = operacion();

alert(prueba);

function operaciones() {
    if (oper == "sumar") {
        suma();
    }
    if (oper == "restar") {
        restar();
    }
    if (oper = "multiplicar") {
        multiplicacion();
    }
    if (oper = "dividir") {
        division();
    }
    reuno = resultado;
    console.log("El resultado es: " + resultado)
}
function suma() {
    result = num1 + num2;
}
function resta() {
    result = num1 - num2;
}
function mulitplicacion() {
    result = num1 * num2;
}
function division() {
    result = num1 / num2;
}