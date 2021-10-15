function enviardatos(){
    var nombre = document.getElementById("nombre").value;
    var usuario = document.getElementById("usuario").value;
    var email = document.getElementById("email").value;
    var numero = parseFloat(document.getElementById("numero")).value;
    var contras = document.getElementById("contras").value;
    
    if (nombre == ""){
        alert("No ha su nombre completo");
        document.getElementById("nombre").focus();
    }
    else if (usuario == ""){
        alert("No ha ingresado su nombre de usuario");
        document.getElementById("usuario").focus();
    }
    else if(email == ""){
        alert("No ha ingresado su correo");
        document.getElementById("email").focus();
    }
    else if(numero == ""){
        alert("No ha ingresado su numero de telefono");
        document.getElementById("numero").focus();
    }
    else if(contras == ""){
        alert("No ha ingresado su contraseña");
        document.getElementById("contras").focus();
    } else {
        alert("Sus datos han sido registrados con exito");
        console.log(nombre+" "+usuario+" "+email+" "+numero+" "+contras);
    }
}
function selectdos(){
    if(document.getElementById("seleccion").value == "predeterminado"){
        alert("No deje esta parte vacia, eliga una opcion");
    }
}
function marcado(){
    if(document.getElementById("marcado").checked == false){
        alert("Esta opcion es obligatoria");
    }
}
function datos(){
    marcado();
    selectdos();
    enviardatos();
}