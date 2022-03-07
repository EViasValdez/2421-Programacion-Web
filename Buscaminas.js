const buscaminas = {
    numMinasTotales: 30,
    numMinasEncontradas: 0,
    numFilas: 15,
    numColumnas: 15,
    aCampoMinas: []
}
function mostrarTablero(){
    let tablero = document.querySelector("#tablero");

    document.querySelector("html").style.setProperty("--num-filas",buscaminas.numFilas);
    document.querySelector("html").style.setProperty("--num-columnas",buscaminas.numColumnas);

    while (tablero.firstChild) {
        tablero.firstChild.removeEventListener("contextmenu",marcar);
        tablero.firstChild.removeEventListener("click",revelar);
        tablero.removeChild(tablero.firstChild);
    }

    for (let f = 0; f < buscaminas.numFilas; f++){
        for (let c = 0; c < buscaminas.numColumnas; c++){
            let newDiv = document.createElement("div");
            newDiv.setAttribute("id","f" + f + "_c" + c );
            newDiv.dataset.fila = f;
            newDiv.dataset.columna = c;
            newDiv.addEventListener("contextmenu",marcar);
            newDiv.addEventListener("click",revelar);
            tablero.appendChild(newDiv);
        }
    }
}
function generarCampoMinasVacio(){
    buscaminas.aCampoMinas = new Array (buscaminas.numFilas);
    for (let fila = 0; fila < buscaminas.numFilas; fila++){
        buscaminas.aCampoMinas [fila] = new Array (buscaminas.numColumnas);
    }
}
function ponerMinas(){
    let numMinasEsparcidas = 0;

    while (numMinasEsparcidas<buscaminas.numMinasTotales){
        let fila = Math.floor (Math.random() * buscaminas.numFilas);
        let columna = Math.floor (Math.random() * buscaminas.numColumnas);

        if (buscaminas.aCampoMinas [fila] [columna] != "B"){
            buscaminas.aCampoMinas [fila] [columna] = "B";
            numMinasEsparcidas++;
        }
    }
}
function contarMinasAlrededorCasilla(fila,columna){
    let numeroMinasAlrededor = 0;

    for (let zFila = fila - 1; zFila <= fila + 1; zFila++){
        for (let zColumna = columna - 1; zColumna <= columna + 1; zColumna++){
            if (zFila >- 1 && zFila < buscaminas.numFilas && zColumna> - 1 && zColumna < buscaminas.numColumnas){
                if (buscaminas.aCampoMinas [zFila] [zColumna] == "B"){
                    numeroMinasAlrededor++;
                }
            }
        }
    }
    buscaminas.aCampoMinas [fila] [columna] = numeroMinasAlrededor;
}
function contarMinas(){
    for (let fila = 0; fila < buscaminas.numFilas; fila++){
        for (let columna = 0; columna < buscaminas.numColumnas; columna++){
            if (buscaminas.aCampoMinas [fila] [columna]!="B"){
                contarMinasAlrededorCasilla(fila,columna);
            }
        }
    }
}
function marcar(miEvento){
    if (miEvento.type === "contextmenu"){
        console.log (miEvento);

        let casilla = miEvento.currentTarget;

        miEvento.stopPropagation();
        miEvento.preventDefault();

        let fila = parseInt(casilla.dataset.fila, 10);
        let columna = parseInt(casilla.dataset.columna, 10);

        if (fila >= 0 && columna >= 0 && fila < buscaminas.numFilas && columna < buscaminas.numColumnas) {

            if (casilla.classList.contains("icon-bandera")){
                casilla.classList.remove("icon-bandera");
                casilla.classList.add("icon-duda");
                buscaminas.numMinasEncontradas--;

            } else if (casilla.classList.contains("icon-duda")){
                casilla.classList.remove("icon-duda");
            } else if (casilla.classList.length == 0){
                
                casilla.classList.add("icon-bandera");
                buscaminas.numMinasEncontradas++;
                if (buscaminas.numMinasEncontradas == buscaminas.numMinasTotales){
                    resolverTablero(true);
                }
            }
            actualizarNumMinasRestantes();
        }
    }
}
function revelar(miEvento){
    if (miEvento.type === "click"){
        let casilla = miEvento.currentTarget;
        let fila = parseInt(casilla.dataset.fila,10);
        let columna = parseInt(casilla.dataset.columna,10);
        revelarCuadro(fila,columna);
    }
}
function revelarCuadro(fila, columna){
    if (fila > - 1 && fila < buscaminas.numFilas &&
        columna > - 1 && columna < buscaminas.numColumnas){

        console.log("destapamos la casilla con fila " + fila + " y columna " + columna );

        let casilla = document.querySelector("#f" + fila + "_c" + columna);

        if (!casilla.classList.contains("destapado")){

            if (!casilla.classList.contains("icon-bandera")){
                casilla.classList.add("destapado");
                casilla.innerHTML = buscaminas.aCampoMinas [fila] [columna];
                casilla.classList.add("c" + buscaminas.aCampoMinas [fila] [columna])
                if (buscaminas.aCampoMinas [fila] [columna] !== "B"){
                    if (buscaminas.aCampoMinas [fila] [columna] == 0){
                        revelarCuadro(fila - 1, columna - 1);
                        revelarCuadro(fila - 1, columna);
                        revelarCuadro(fila - 1, columna + 1);
                        revelarCuadro(fila, columna - 1);
                        revelarCuadro(fila, columna + 1);
                        revelarCuadro(fila + 1, columna - 1);
                        revelarCuadro(fila + 1, columna);
                        revelarCuadro(fila + 1, columna + 1);

                        casilla.innerHTML  = "";
                    }
                }else if (buscaminas.aCampoMinas [fila] [columna] == "B"){
                    casilla.innerHTML = "";
                    casilla.classList.add("icon-bomba");
                    casilla.classList.add("sinmarcar");
                    resolverTablero(false);
                }
            }
        }
    }
}
function resolverTablero(isOK){
    let aCasillas = tablero.children;
    for (let i = 0 ; i < aCasillas.length; i++){
        aCasillas [i].removeEventListener("click", revelar);
        aCasillas [i].removeEventListener("contextmenu", marcar);

        let fila = parseInt(aCasillas [i].dataset.fila,10);
        let columna = parseInt(aCasillas [i].dataset.columna,10);

        if (aCasillas [i].classList.contains("icon-bandera")){
            if (buscaminas.aCampoMinas [fila] [columna] == "B"){
                aCasillas [i].classList.add("destapado");
                aCasillas [i].classList.remove("icon-bandera");
                aCasillas [i].classList.add("icon-bomba");
            } else {
                aCasillas [i].classList.add("destapado");
                aCasillas [i].classList.add("banderaErronea");
                isOK = false;
            }
        } else if (!aCasillas[i].classList.contains("destapado")){
            if (buscaminas.aCampoMinas [fila] [columna] == "B"){
                aCasillas [i].classList.add("destapado");
                aCasillas [i].classList.add("icon-bomba");
            }
        }
    }
    if (isOK){
        alert("Felicidades, used ha ganado");
    }
    else {
        alert("Acaba de perder, intente de nuevo");
    }
}
function actualizarNumMinasRestantes(){
    document.querySelector("#numMinasRestantes").innerHTML =
        (buscaminas.numMinasTotales - buscaminas.numMinasEncontradas);
}
function inicio(){
    buscaminas.numFilas = 10;
    buscaminas.numColumnas = 10;
    buscaminas.numMinasTotales = 12;
    mostrarTablero();
    generarCampoMinasVacio();
    ponerMinas();
    contarMinas();
    actualizarNumMinasRestantes();
}