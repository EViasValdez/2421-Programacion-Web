var Palabra = "aoertpser";
var Elemento1 = [1,2,3,4,5,6,78,9,70];
var ContenedorPalabra = [];
var Elemento2 = [10,5,4,8,7,8,10,2,1];
var Contrario = Elemento1.length - 1;

for (var i = 0; i < Elemento1.length; i++)
{
    ContenedorPalabra.push(Palabra [i]);

    if (Elemento1 [i] == Elemento2 [Contrario])
        console.log("Son iguales");
    else
        console.log("No son iguales");
    Contrario--;
}

console.log(ContenedorPalabra);