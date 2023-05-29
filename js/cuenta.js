

function modificar(clase){
    elemento = clase.substring(0, clase.length - 13)
    elemento_id = elemento + "__id"
    var variable_mod = document.getElementById(elemento_id).value;
    errores = ""
    if (elemento == "usuario") {
        errores = validar_usuario(variable_mod)
    }
    if (elemento == "contrasena") {
        errores = validar_contrasena(variable_mod)
    }
    if (elemento == "email") {
        errores = validar_correo(variable_mod)
    }
    if (variable_mod == null || variable_mod == ""){
        console.log(variable_mod)
        errores = "Porfavor, introduce una modificación"
    }
    if (errores == "") { /*No fallos, modificamos*/
        parrafo = document.getElementById("errores");
        parrafo.innerHTML = "Dato modificado";
        localStorage.setItem(elemento , variable_mod);
        guardar_modificado(user);
        completar_cuenta();
    }
    else {
        parrafo = document.getElementById("errores");
        console.log(errores)
        parrafo.innerHTML = errores;
    }
}

/*No sirve para nada esta función*/
function error_modificacion(errores){
    var parrafo = document.getElementById("errores");
    parrafo.innerHTML = errores;
}

function boton_modificar(clase){
    var className = "." + clase
    $(className).toggle()

}