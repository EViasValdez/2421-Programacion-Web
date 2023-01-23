var Total = 0;
var Contador1 = 1;
var Contador2 = 1;
var Contador3 = 1;
var Contador4 = 1;
var Contador5 = 1;
var Contador6 = 1;

var Precios1 = 0;
var Precios2 = 0;
var Precios3 = 0;
var Precios4 = 0;
var Precios5 = 0;
var Precios6 = 0;

function funcionamiento() {
    var marca = parseInt(document.getElementById("op").value);
    var objeto = document.getElementById("objet").value;

    if (marca == 1){
        if (objeto == "Core i5") {
            Total += 1900;
            Precios1 += 1900;
            document.getElementById("uno").innerHTML = `Productos (${Contador1}): ${objeto} = $1900`;
            Contador1++;
        }
        if (objeto == "Xeon") {
            Total += 1300;
            Precios2 += 1300;
            document.getElementById("dos").innerHTML = `Producto (${Contador2}): ${objeto} = $1300`;
            Contador2++;
        }
        if (objeto == "Core i9") {
            Total += 2900;
            Precios3 += 2900;
            document.getElementById("tres").innerHTML = `Producto(${Contador3}): ${objeto} = $2900`;
            Contador3++;
        }
    }

    if (marca == 2) {
        if (objeto == "Ryzen 5"||objeto == "Ryzen 5") {
            Total += 2600;
            Precios1 += 2600;
            document.getElementById("cuatro").innerHTML = `Producto(${Contador4}): ${objeto} = $2600`;
            Contador4++;
        }
        if (objeto == "Opteron") {
            Total += 2470;
            Precios1 += 2470;
            document.getElementById("cinco").innerHTML = `Producto(${Contador5}): ${objeto} = $2470`;
            Contador5++;
        }
        if (objeto == "Threadripper") {
            Total += 4900;
            Precios6 += 4900;
            document.getElementById("seis").innerHTML = `Producto(${Contador6}): ${objeto} = $4900`;
            Contador6++;
        }
    }
    document.getElementById("precios").innerHTML=`Total: $${Total}`;
}