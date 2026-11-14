var Num1 = 10;
var Num2 = 10;
var Result;
var Oper = prompt("Ingresa la operación a realizar");
var Prueba = Operaciones();

alert(Prueba);

function Operaciones() {
    if (Oper == "Sumar")
    {
        Suma(); 
    }
    if (Oper == "Restar")
    {
        Restar();
    }
    if (Oper = "Multiplicar")
    {
        Multiplicacion();
    }
    if (Oper = "Dividir")
    {
        Division();
    }
    reuno = resultado;
    console.log("El resultado es: " + resultado)
}
function Suma() {
    Result = Num1 + Num2;
}
function Resta() {
    Result = Num1 - Num2;
}
function Mulitplicacion() {
    Result = Num1 * Num2;
}
function Division() {
    Result = Num1 / Num2;
}