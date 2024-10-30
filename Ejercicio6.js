function EnviarDatos() {
    var Nombre = document.getElementById("nombre").value;
    var Usuario = document.getElementById("usuario").value;
    var Email = document.getElementById("email").value;
    var Numero = parseFloat(document.getElementById("numero")).value;
    var Contras = document.getElementById("contras").value;

    if (Nombre == "")
    {
        alert("No ha ingresado su nombre completo");
        document.getElementById("Nombre").focus();
    }
    else if (Usuario == "")
    {
        alert("No ha ingresado su nombre de usuario");
        document.getElementById("Usuario").focus();
    }
    else if (Email == "")
    {
        alert("No ha ingresado su correo");
        document.getElementById("Email").focus();
    }
    else if (Numero == "")
    {
        alert("No ha ingresado su numero de teléfono");
        document.getElementById("Numero").focus();
    }
    else if (Contras == "")
    {
        alert("No ha ingresado su contraseña");
        document.getElementById("Contras").focus();
    }
    else
    {
        alert("Sus datos han sido registrados con éxito");
        console.log(Nombre + " " + Usuario + " " + Email + " " + Numero + " " + Contras);
    }
}

function Selectos() {
    if (document.getElementById("Seleccion").value == "predeterminado")
    {
        alert("No deje esta parte vacía, eliga una opción");
    }
}

function Marcado() {
    if (document.getElementById("Marcado").checked == false)
    {
        alert("Esta opción es obligatoria");
    }
}

function Datos() {
    Marcado();
    Selectos();
    EnviarDatos();
}