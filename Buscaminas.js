const Buscaminas = {
    numMinasTotales: 30,
    numMinasEncontradas: 0,
    numFilas: 15,
    numColumnas: 15,
    aCampoMinas: []
}
function MostrarTablero() {
    let Tablero = document.querySelector("#Tablero");

    document.querySelector("html").style.setProperty("--num-filas", Buscaminas.numFilas);
    document.querySelector("html").style.setProperty("--num-columnas", Buscaminas.numColumnas);

    while (Tablero.firstChild) {
        Tablero.firstChild.removeEventListener ("contextmenu", Marcar);
        Tablero.firstChild.removeEventListener ("click", revelar);
        Tablero.removeChild (Tablero.firstChild);
    }

    for (let f = 0; f < Buscaminas.numFilas; f++) {
        for (let c = 0; c < Buscaminas.numColumnas; c++) {
            let newDiv = document.createElement("div");
            newDiv.setAttribute ("id", "f" + f + "_c" + c );
            newDiv.dataset.fila = f;
            newDiv.dataset.columna = c;
            newDiv.addEventListener ("contextmenu", Marcar);
            newDiv.addEventListener ("click", revelar);
            Tablero.appendChild (newDiv);
        }
    }
}
function GenerarCampoMinasVacio() {
    Buscaminas.aCampoMinas = new Array (Buscaminas.numFilas);
    for (let fila = 0; fila < Buscaminas.numFilas; fila++) {
        Buscaminas.aCampoMinas [fila] = new Array (Buscaminas.numColumnas);
    }
}
function PonerMinas() {
    let numMinasEsparcidas = 0;

    while (numMinasEsparcidas < Buscaminas.numMinasTotales) {
        let fila = Math.floor (Math.random() * Buscaminas.numFilas);
        let columna = Math.floor (Math.random() * Buscaminas.numColumnas);

        if (Buscaminas.aCampoMinas [fila] [columna] != "B") {
            Buscaminas.aCampoMinas [fila] [columna] = "B";
            numMinasEsparcidas++;
        }
    }
}
function contarMinasAlrededorCasilla(fila,columna) {
    let numeroMinasAlrededor = 0;

    for (let zFila = fila - 1; zFila <= fila + 1; zFila++) {
        for (let zColumna = columna - 1; zColumna <= columna + 1; zColumna++) {
            if (zFila >- 1 && zFila < Buscaminas.numFilas && zColumna> - 1 && zColumna < Buscaminas.numColumnas) {
                if (Buscaminas.aCampoMinas [zFila] [zColumna] == "B") {
                    numeroMinasAlrededor++;
                }
            }
        }
    }
    Buscaminas.aCampoMinas [fila] [columna] = numeroMinasAlrededor;
}
function ContarMinas() {
    for (let fila = 0; fila < Buscaminas.numFilas; fila++) {
        for (let columna = 0; columna < Buscaminas.numColumnas; columna++) {
            if (Buscaminas.aCampoMinas [fila] [columna] != "B") {
                contarMinasAlrededorCasilla (fila,columna);
            }
        }
    }
}
function Marcar(miEvento) {
    if (miEvento.type === "contextmenu") {
        console.log (miEvento);

        let Casilla = miEvento.currentTarget;

        miEvento.stopPropagation();
        miEvento.preventDefault();

        let fila = parseInt (Casilla.dataset.fila, 10);
        let columna = parseInt (Casilla.dataset.columna, 10);

        if (fila >= 0 && columna >= 0 && fila < Buscaminas.numFilas && columna < Buscaminas.numColumnas) {
            if (Casilla.classList.contains ("icon-bandera")) {
                Casilla.classList.remove ("icon-bandera");
                Casilla.classList.add ("icon-duda");
                Buscaminas.numMinasEncontradas--;
            } else if (Casilla.classList.contains ("icon-duda")) {
                Casilla.classList.remove ("icon-duda");
            } else if (Casilla.classList.length == 0){
                
                Casilla.classList.add ("icon-bandera");
                Buscaminas.numMinasEncontradas++;
                if (Buscaminas.numMinasEncontradas == Buscaminas.numMinasTotales) {
                    resolverTablero (true);
                }
            }
            ActualizarNumMinasRestantes();
        }
    }
}
function revelar(miEvento) {
    if (miEvento.type === "click") {
        let Casilla = miEvento.currentTarget;
        let fila = parseInt (Casilla.dataset.fila, 10);
        let columna = parseInt (Casilla.dataset.columna, 10);
        revelarCuadro (fila,columna);
    }
}
function revelarCuadro(fila, columna) {
    if (fila > - 1 && fila < Buscaminas.numFilas &&
        columna > - 1 && columna < Buscaminas.numColumnas) {

        console.log("Destapamos la Casilla con fila " + fila + " y columna " + columna );

        let Casilla = document.querySelector("#f" + fila + "_c" + columna);

        if (!Casilla.classList.contains("destapado")) {
            if (!Casilla.classList.contains("icon-bandera")) {
                Casilla.classList.add("destapado");
                Casilla.innerHTML = Buscaminas.aCampoMinas [fila] [columna];
                Casilla.classList.add("c" + Buscaminas.aCampoMinas [fila] [columna])
                if (Buscaminas.aCampoMinas [fila] [columna] !== "B") {
                    if (Buscaminas.aCampoMinas [fila] [columna] == 0) {
                        revelarCuadro(fila - 1, columna - 1);
                        revelarCuadro(fila - 1, columna);
                        revelarCuadro(fila - 1, columna + 1);
                        revelarCuadro(fila, columna - 1);
                        revelarCuadro(fila, columna + 1);
                        revelarCuadro(fila + 1, columna - 1);
                        revelarCuadro(fila + 1, columna);
                        revelarCuadro(fila + 1, columna + 1);

                        Casilla.innerHTML  = "";
                    }
                }else if (Buscaminas.aCampoMinas [fila] [columna] == "B") {
                    Casilla.innerHTML = "";
                    Casilla.classList.add("icon-bomba");
                    Casilla.classList.add("sinmarcar");
                    resolverTablero(false);
                }
            }
        }
    }
}
function resolverTablero(isOK) {
    let aCasillas = Tablero.children;
    for (let i = 0 ; i < aCasillas.length; i++) {
        aCasillas [i].removeEventListener ("click", revelar);
        aCasillas [i].removeEventListener ("contextmenu", Marcar);

        let fila = parseInt(aCasillas [i].dataset.fila,10);
        let columna = parseInt(aCasillas [i].dataset.columna,10);

        if (aCasillas [i].classList.contains ("icon-bandera")) {
            if (Buscaminas.aCampoMinas [fila] [columna] == "B") {
                aCasillas [i].classList.add ("destapado");
                aCasillas [i].classList.remove ("icon-bandera");
                aCasillas [i].classList.add ("icon-bomba");
            } else {
                aCasillas [i].classList.add ("destapado");
                aCasillas [i].classList.add ("banderaErronea");
                isOK = false;
            }
        } else if (!aCasillas[i].classList.contains ("destapado")) {
            if (Buscaminas.aCampoMinas [fila] [columna] == "B"){
                aCasillas [i].classList.add ("destapado");
                aCasillas [i].classList.add ("icon-bomba");
            }
        }
    }
    if (isOK) {
        alert("Felicidades, usted ha ganado");
    }
    else {
        alert("Acaba de perder, intente de nuevo");
    }
}
function ActualizarNumMinasRestantes() {
    document.querySelector("#numMinasRestantes").innerHTML =
        (Buscaminas.numMinasTotales - Buscaminas.numMinasEncontradas);
}
function inicio() {
    Buscaminas.numFilas = 10;
    Buscaminas.numColumnas = 10;
    Buscaminas.numMinasTotales = 12;
    MostrarTablero();
    GenerarCampoMinasVacio();
    PonerMinas();
    ContarMinas();
    ActualizarNumMinasRestantes();
}