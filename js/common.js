nombres_canciones = {
    "AlAndalus": "Al Andalus",
    "Believer" : "Believer",
    "ComeAndGetYourLove" : "Come and Get Your Love",
    "ComoCamaron" : "Como camaron",
    "ElCuartetoDeIbai" : "El cuarteto De Ibai",
    "GameOver" : "Game over",
    "HijoDeLaLuna" : "Hijo de la luna",
    "LaLaLa" : "La la la",
    "LoseYourself" : "Lose Yourself",
    "Overwhelmed" : "Overwhelmed",
    "RapContraElRacismo" : "Rap contra el racismo",
    "Rema" : "Rema",
    "SoldaditoMarinero" : "Soldadito Marinero",
    "Sugar" : "Sugar",
    "TillICollapse": "Till I Collapse"
}


lista_vacia = [];
if ( localStorage.getItem ("like") == null) {
    localStorage.setItem ("like", JSON.stringify ( lista_vacia ) );
}


function search__song() {
    let input = document.getElementById('search2').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('boton__cancion');

    if (input == "" || input==null){ 
        for (i = 0; i < x.length; i++) { 
            x[i].style.display="none";
        }
   }

    else{
        for (i = 0; i < x.length; i++) { 
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display="none";
            }
            else {
                x[i].style.display="list-item";                 
            }
        }
    }
}

$(".reproductor").hide();
function play__cancion(id){
    // Ver si el usuario ya le habia dado like
    actualizar__cabecera();
    usuario = localStorage.getItem("usuario");
    lista_likes = localStorage.getItem ( "like" );
    encontrado = 0;
    if(usuario != ""  && usuario != null){
        for (i=0; i < lista_likes.length; i++){
            if (lista_likes[i] == id)
                encontrado = 1;
        }
        if (encontrado == 1){
            $(".like_active").show();
            $(".no_like").hide();
        } else {
            $(".like_active").hide();
            $(".no_like").show();
        }
    }

    path_cancion = "audio/" + id + ".mp3";
    path_imagen = "images/" + id + ".jfif";
    document.getElementById("audio").src = path_cancion;
    document.getElementById("audio").class = id;
    document.getElementById("reproductor__imagen").src = path_imagen;
    
    $(".reproductor").show();
    audio = document.getElementsByClassName("reproductor_audio");
    audio[0].load();
    audio[0].play();
    

}


function dar_like(){
    cancion = document.getElementById("audio").class;
    lista_likes = JSON.parse(localStorage.getItem ( "like" ));
    lista_likes.push(cancion);
    localStorage.setItem ("like", JSON.stringify ( lista_likes ) );
    $(".like_active").show();
    $(".no_like").hide();

}

function quitar_like(){
    cancion = document.getElementById("audio").class;
    lista_likes = JSON.parse(localStorage.getItem ( "like" ));
    var pos = 0;
    for (i = 0; i < lista_likes.length ; i++){
        if (lista_likes[i] == cancion){
            pos = i
        }
    };
    lista_likes.splice( pos , 1 );
    localStorage.setItem ("like", JSON.stringify ( lista_likes ) );
    $(".like_active").hide();
    $(".no_like").show();

}

$(".ventana_eliminar").hide();
function cancelar_eliminado(){
    $(".ventana_eliminar").hide();
}

$(".ventana_cerrar_sesion").hide();
function esconder_mensaje(){
    $(".ventana_cerrar_sesion").hide();
}

function aparecer_mensaje(){
    $(".ventana_cerrar_sesion").show();
}


function cerrar_sesion(){
        guardar_modificado(localStorage.getItem( "usuario" ));
        localStorage.setItem( "usuario", "");
        localStorage.setItem( "contrasena", "");
        localStorage.setItem( "nombre", "");
        localStorage.setItem( "nacimiento", "");
        localStorage.setItem( "email", "");
        localStorage.setItem( "pfp", "");
        localStorage.setItem( "like", "");
        localStorage.setItem( "play_list", "");
        window.location.href = "home.html";
        actualizar__cabecera();
}

function actualizar_pagina(){
    let x = document.getElementsByClassName('boton__cancion');
    for (i = 0; i < x.length; i++) { 
        x[i].style.display="none";
    }
    actualizar__cabecera();
    $(".reproductor").hide();

}

function actualizar__cabecera(){
    nombre_introducido = localStorage.getItem("usuario") 
    if (nombre_introducido == "" || nombre_introducido == null){
        /*Cuando no está iniciada la sesión*/
        $(".iniciada").hide()
        $(".no_iniciada").show()
        $(".main__footer").show()
    }
    else {
        /* Cuando está iniciada la sesión*/
        $(".iniciada").show()
        $(".no_iniciada").hide()
        $(".main__footer").hide()
        const nombre_header = document.getElementById("nombre_header");
        nombre_header.innerHTML = nombre_introducido;
        imagen = localStorage.getItem("pfp");
        if (imagen != null && imagen != ""){
            document.getElementById("imagen_perfil").src = imagen;
        }
        else {
            document.getElementById("imagen_perfil").src = "/images/foto_perfil.webp";
        }
    }
}

function guardar_modificado(usuario){
    personas = JSON.parse( localStorage.getItem ( "personas" ));
    posicion_persona = ""
    for (let i = 0; i<personas.length; i++) {
        if (usuario == personas[i].nombreUsuario) {
                posicion_persona = i
            }
        }
        personas.splice(posicion_persona , (posicion_persona+1))
        var persona = {
            nombreCompleto: localStorage.getItem("nombre"),
            nombreUsuario: localStorage.getItem("usuario"),
            contrasenaUsuario: localStorage.getItem("contrasena"),
            fechaNacimiento: localStorage.getItem("nacimiento"),
            emailUsuario: localStorage.getItem("email"),
            pfpUsuario: localStorage.getItem("pfp"),
            like: localStorage.getItem("like"),
            play_list: localStorage.getItem("play_list"),
            follow: localStorage.getItem("follow")
        };
        personas.push(persona)
        localStorage.setItem ("personas", JSON.stringify ( personas ) );
}

function completar_cuenta(){
    actualizar__cabecera()
    $(".oculto").hide()
    var usuario_campo = document.getElementById("usuario_campo");
    usuario_campo.innerHTML = localStorage.getItem("usuario");

    var email_campo = document.getElementById("email_campo");
    email_campo.innerHTML = localStorage.getItem("email");

    var contrasena_campo = document.getElementById("contrasena_campo");
    contrasena_campo.innerHTML = localStorage.getItem("contrasena");

    var fecha_campo = document.getElementById("nacimiento_campo");
    fecha_campo.innerHTML = localStorage.getItem("nacimiento");

    var nombre_campo = document.getElementById("nombre_campo");
    nombre_campo.innerHTML = localStorage.getItem("nombre");

    foto = localStorage.getItem("pfp")
    if (foto != null && foto != "") {
        document.getElementById("pfp_campo").src = foto
    }

}

$(".errores").hide();
function cerrar_mensaje_errores(){
    $(".errores").hide();
    $(".error").remove();
}

function validar_correo(email){
    regex_mail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    if  ( ! regex_mail.test(email)){
        errores.push ("El correo no es válido");
    }

    personas = JSON.parse( localStorage.getItem ( "personas" ));
    for (let i = 0; i<personas.length; i++) {
        if (email == personas[i].emailUsuario) {
            errores.push( "El correo ya tiene una cuenta asignada" );
        }
        if (email == localStorage.getItem("email")) {
            errores.push ("El correo introducido es el mismo de antes");
        }
    }
}

function validar_usuario(usuario){
    if ((usuario.length < 3) || (usuario.length > 15)){
        errores.push ("El nombre no es válido");
    }
    personas = JSON.parse( localStorage.getItem ( "personas" ));
    for (let i = 0; i<personas.length; i++) {
        if (usuario == personas[i].nombreUsuario) {
            console.log("Hey")
            errores.push("El usuario ya tiene una cuenta asignada");
        }
        if (usuario == localStorage.getItem("usuario")) {
            console.log("how")
            errores.push("El usuario introducido es el mismo de antes");
        }
    }
}

function validar_contrasena(contrasena) {
    regex_cont = /^[a-z0-9]{2,8}$/
    if ( ! regex_cont.test(contrasena)){
        errores.push ( "La contraseña no es válida");
    }
}










