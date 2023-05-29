user = document.getElementById("usuario__id");
contrasena = document.getElementById("contrasena__id");
conf__contrasena = document.getElementById("contrasena2__id");
nombre = document.getElementById("nombre__id");
fecha__nacimiento = document.getElementById("fecha__nacimiento__id");
email = document.getElementById("email__id");
pfp = document.getElementById("pfp__id");
enviar = document.getElementsByClassName("enviar__boton");
errores = [];

function sesion() {
    errores = [];
    var parrafo = document.getElementById("mensaje_error");
    personas = JSON.parse( localStorage.getItem ( "personas" ));
    persona_encontrada = ""
    for (let i = 0; i<personas.length; i++) {
        if (user.value == personas[i].nombreUsuario) {
            persona_encontrada = personas[i]
        }
    }
    if (persona_encontrada == "") {
        errores.push("No esta registrado ese nombre de usuario");
    }
    else {
        if (persona_encontrada.contrasenaUsuario != contrasena.value){
            errores.push("La contraseña no coincide");
        }
    }

    if (errores.length != 0){
        $(".errores").show();
        for (i = 0; i < errores.length ; i++){
            var h3_errores = document.createElement("h3");
            h3_errores.textContent = errores[i];
            h3_errores.className = "error";
            parrafo.appendChild(h3_errores);
        }
    }
    else {
        localStorage.setItem( "usuario", persona_encontrada.nombreUsuario );
        localStorage.setItem( "contrasena", persona_encontrada.contrasenaUsuario );
        localStorage.setItem( "nombre", persona_encontrada.nombreCompleto );
        localStorage.setItem( "nacimiento", persona_encontrada.fechaNacimiento );
        localStorage.setItem( "email", persona_encontrada.emailUsuario );
        localStorage.setItem( "pfp",  persona_encontrada.pfpUsuario );
        localStorage.setItem( "like", persona_encontrada.like );
        localStorage.setItem( "play_list", persona_encontrada.play_list );
        localStorage.setItem( "follow", persona_encontrada.follow );

        window.location.href = "home.html";
        actualizar__cabecera()
    }
}