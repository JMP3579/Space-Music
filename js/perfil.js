

$(".ventana_playlist").hide();
function cancelar_playlist(){
    $(".ventana_playlist").hide();
}

function nombre_play_list(){
    $(".ventana_playlist").show();
}

function nombre_introducido_correcto () {
    nombre_introducido = document.getElementById("nombre_introducido").value;
    if (nombre_introducido != null && nombre_introducido != ""){
        nueva_playlist(nombre_introducido);
    }
}

function nueva_playlist(nombre){
    $(".ventana_playlist").hide();
    /* Se añade el html correcpondiente */
    const play_list = document.createElement("div");
    play_list.className = "play_list";
    play_list.id = nombre;

    const nombre_pl = document.createElement("h3");
    nombre_pl.innerHTML = nombre;

    const imagen_pl = document.createElement("img");
    imagen_pl.src = "images/play.png";
    imagen_pl.className = "imagen-playlist"
    imagen_pl.onclick = crear_redirigir(nombre);

    const imagen_pl2 = document.createElement("img");
    imagen_pl2.src = "images/basura.png";
    imagen_pl2.className = "basura-playlist"
    imagen_pl2.onclick = borrador(nombre);

    play_list.appendChild(imagen_pl);
    play_list.appendChild(imagen_pl2);
    play_list.appendChild(nombre_pl);

    const play_lists = document.getElementById("play_lists");
    play_lists.appendChild(play_list);

    /* Se añade la playlist al usuario */
    play_list_usuario = JSON.parse( localStorage.getItem ( "play_list" ));
    play_list_usuario.push([nombre , []]);
    localStorage.setItem ("play_list", JSON.stringify ( play_list_usuario ) );
    
}


function borrar_playlist(id){
    localStorage.setItem("borrar_pl", id);
    $(".ventana_eliminar").show();
}

function borrador(id){
    return function(){borrar_playlist(id)}
}

function completar_playlist() {
    play_list_usuario = JSON.parse( localStorage.getItem ( "play_list" ));
    for ( i = 0 ; i < play_list_usuario.length ; i++ ){
        const play_list = document.createElement("div");
        play_list.className = "play_list";
        play_list.id = play_list_usuario[i][0];
                
        const nombre_pl = document.createElement("h3");
        nombre_pl.innerHTML = play_list_usuario[i][0];
    
        const imagen_pl = document.createElement("img");
        imagen_pl.src = "images/play.png";
        imagen_pl.className = "imagen-playlist"
        imagen_pl.onclick = crear_redirigir(play_list_usuario[i][0]);

        const imagen_pl2 = document.createElement("img");
        imagen_pl2.src = "images/basura.png";
        imagen_pl2.className = "basura-playlist"
        imagen_pl2.onclick = borrador(nombre);
    
        play_list.appendChild(imagen_pl);
        play_list.appendChild(imagen_pl2);
        play_list.appendChild(nombre_pl);
    
        const play_lists = document.getElementById("play_lists");
        play_lists.appendChild(play_list);
    }
}

function eliminar_pl(){
    const pl = localStorage.getItem("borrar_pl");
    const list = JSON.parse( localStorage.getItem ( "play_list" ));
    const pos = 0;
    for (i = 0; i < list.length; i++){
        if (list[i]== pl){
            pos = i;
        }
    }
    list.splice(pos, pos+1);
    localStorage.setItem ("play_list", JSON.stringify ( list ) );
    window.location.href = "perfil.html";
}

function crear_redirigir(id){
    return function(){redirigir_playlist(id)}
}

function redirigir_playlist(id){
    localStorage.setItem("lista_actual" , id)
    window.location.href = "playlist.html";
    crear_playlist();
}

function redirigir_seguidos(){
    window.location.href = "seguidos.html";
}

function redirigir_artistas(){
    window.location.href = "artista.html";
}

function redirigir_index(){
    window.location.href = "index.html";
}

