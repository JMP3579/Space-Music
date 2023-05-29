
lista_vacia = [];
if ( localStorage.getItem ("personas") == null) {
    localStorage.setItem ("personas", JSON.stringify ( lista_vacia ) );
}


function registro(){

    errores = [];
    var parrafo = document.getElementById("mensaje_error"); 

    validar_contrasena(contrasena.value);

    if (contrasena.value != conf__contrasena.value){
        errores.push( "No coinciden las contraseñas" );
    }

    validar_usuario(user.value);
    validar_correo(email.value);
    check = document.getElementById('condicion').checked;
    if ( !check) {
        errores.push( "No ha aceptado nuestras condiciones de uso");
    }
    if (fecha__nacimiento.value.length == 0){
        errores.push( "No has introducido tu fecha de nacimiento");
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
    
    else{ 

        localStorage.setItem( "usuario",  user.value);
        localStorage.setItem( "contrasena", contrasena.value);
        localStorage.setItem( "nombre",  nombre.value);
        localStorage.setItem( "nacimiento",  fecha__nacimiento.value);
        localStorage.setItem( "email",  email.value);
        localStorage.setItem( "pfp",  pfp.value);
        localStorage.setItem( "like", JSON.stringify ( [] ));
        localStorage.setItem( "play_list", JSON.stringify ( [] ));
        localStorage.setItem( "follow", JSON.stringify ( [] ));

        var persona = {
            nombreCompleto: nombre.value,
            nombreUsuario: user.value,
            contrasenaUsuario: contrasena.value,
            fechaNacimiento: fecha__nacimiento.value,
            emailUsuario: email.value,
            pfpUsuario: pfp.value,
            like: [],
            play_list: [],
            follow: [] 
        };

        personas.push (persona);
        localStorage.setItem ("personas", JSON.stringify ( personas ) );

        window.location.href = "home.html";
        actualizar__cabecera()

    }

}



/* ----------------- Validacion de campos ----------------------------*/

