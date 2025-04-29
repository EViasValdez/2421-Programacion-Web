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

function Funcionamiento() {
    var Marca = parseInt(document.getElementById("op").value);
    var Objeto = document.getElementById("objet").value;

    if (Marca == 1)
    {
        if (Objeto == "Core i5")
        {
            Total += 1900;
            Precios1 += 1900;
            document.getElementById("uno").innerHTML = `Productos (${Contador1}): ${Objeto} = $1900`;
            Contador1++;
        }
        if (Objeto == "Xeon")
        {
            Total += 1300;
            Precios2 += 1300;
            document.getElementById("dos").innerHTML = `Producto (${Contador2}): ${Objeto} = $1300`;
            Contador2++;
        }
        if (Objeto == "Core i9")
        {
            Total += 2900;
            Precios3 += 2900;
            document.getElementById("tres").innerHTML = `Producto(${Contador3}): ${Objeto} = $2900`;
            Contador3++;
        }
    }

    if (Marca == 2)
    {
        if (Objeto == "Ryzen 5" || Objeto == "Ryzen 5")
        {
            Total += 2600;
            Precios1 += 2600;
            document.getElementById("cuatro").innerHTML = `Producto(${Contador4}): ${Objeto} = $2600`;
            Contador4++;
        }
        if (Objeto == "Opteron")
        {
            Total += 2470;
            Precios1 += 2470;
            document.getElementById("cinco").innerHTML = `Producto(${Contador5}): ${Objeto} = $2470`;
            Contador5++;
        }
        if (Objeto == "Threadripper")
        {
            Total += 4900;
            Precios6 += 4900;
            document.getElementById("seis").innerHTML = `Producto(${Contador6}): ${Objeto} = $4900`;
            Contador6++;
        }
    }
    document.getElementById("precios").innerHTML=`Total: $${Total}`;
}