// var objeto1 = [A, B, C, D, F, G, H, J];
// var objeto2 = [R, S, C, G, H, W, X, Y];

// console.log("--------------------");
// for (var i = 0; i >= objeto1.length; i++){
//     // objeto2.push(objeto1 [i]);
//     if (objeto1 = objeto2) {
//         console.log("Estos elementos son iguales:");
//     } else {
//         console.log("Estos elementos no son iguales")
//     }
// }

// console.log(objeto1);
// console.log(objeto2);

console.log("Prueba");

var Palabra = "hola mundo";
var Obel1 = [1, 2, 3, 4, 5 ,6 ,7, 8, 9, 10];
var Contenedor = [];
var Obel2 = [11, 2, 4, 12, 20, 40, 14, 28];
var Contr = Obel1.length - 1;

for (var x = 0; x < Obel1.length; x++) {
    Contenedor.push(Palabra [x]);

    if (Obel1 [x] == Obel2 [Contr]) {
        console.log("Estos elementos son iguales");
    }
    else
    {
        console.log("Estos elementos no son iguales");
    }
    Contr--;
}
console.log(Contenedor);