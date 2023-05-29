const lista = document.getElementById("canciones");

Sortable.create(lista , {});

function crear_playlist(){
    // Ocultar el buscador para añadir canciones
    let input = document.getElementById('search_cancion').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('buscador_cancion');

    if (input == "" || input==null){ 
        for (i = 0; i < x.length; i++) { 
            x[i].style.display="none";
        }
   }

    id = localStorage.getItem("lista_actual");
    canciones = "";
    if (id == "like"){ //Obtencion de la playlist de likes
        canciones = JSON.parse(localStorage.getItem ( "like" ));
    } else {  // Obtencion de cualquier playlist
        playlist = JSON.parse( localStorage.getItem ( "play_list" ));
        for (i = 0; i < playlist.length; i++){
            if (playlist[i][0] == id) {
                canciones = playlist[i][1];
            }
        }
    }
    boton = document.getElementsByClassName("eliminar_playlist");
    boton.id = id; 
    for ( i = 0; i < canciones.length ; i++ ) {
        crear_cancion(canciones[i]);
    }
}

function añadir_cancion_playlist (id){
    lista_ahora = localStorage.getItem("lista_actual");
    var lista = [];
    if (lista_ahora != "like"){
        listas = JSON.parse( localStorage.getItem ( "play_list" ));
        for (i = 0; i < listas.length; i++){
            if (listas[i][0] == lista_ahora){
                lista_completa = listas[i];
                lista = listas[i][1];
                pos = i;
            }
        }
        listas.splice(pos , pos+1);
    }else {
        lista = JSON.parse( localStorage.getItem ( "like" ));
    }
    lista.push(id);
    if (lista_ahora == "like"){
        localStorage.setItem ("like", JSON.stringify ( lista ) );
    }else{
        console.log(lista_completa);
        lista_completa[1] = lista;
        listas.push (lista_completa)
        localStorage.setItem ("play_list", JSON.stringify ( listas ) );
    }
    crear_cancion(id);
    hay_canciones();
    /*setTimeout(function(){ alert("Hello"); }, 3000);*/
}

function crear_cancion(nombre){
    // Creacion del div cancion
    const cancion = document.createElement("div");
    cancion.className = "cancion";
    cancion.onclick = crear_play_cancion(nombre);
    // Creacion de la imagen
    const imagen_cancion = document.createElement("img");
    imagen_cancion.src = "/images/" + nombre + ".jfif";
    imagen_cancion.className = "imagen_cancion";
    // Creacion del h3
    const h3_cancion = document.createElement("h3");
    h3_cancion.id = "nombre_cancion";
    h3_cancion.textContent = nombres_canciones[nombre];
    // Creacion de play
    const play = document.createElement("img");
    play.src = "/images/play.png";
    play.className = "play";
    play.id = nombre;

    const imagen_pl2 = document.createElement("img");
    imagen_pl2.src = "images/basura.png";
    imagen_pl2.className = "basura-cancion"
    imagen_pl2.onclick = borrador2(nombre);

    //Añado todo a el html
    cancion.appendChild(imagen_cancion);
    cancion.appendChild(play);
    cancion.appendChild(h3_cancion);
    cancion.appendChild(imagen_pl2)
    const canciones_div = document.getElementById("canciones");
    canciones_div.appendChild(cancion);
}


$(".ventana_eliminar2").hide();
function cancelar_eliminado2(){
    $(".ventana_eliminar2").hide();
}

function borrar_cancion(id){
    localStorage.setItem("borrar_cancion", id);
    $(".ventana_eliminar2").show();
}

function borrador2(id){
    return function(){borrar_cancion(id)}
}

function eliminar_cancion(){
    const song = localStorage.getItem("borrar_cancion");
    var play_list = JSON.parse( localStorage.getItem ( "play_list" ));
    const play_list2 = localStorage.getItem("lista_actual");
    var play_list3 = 0;
    var pos = 0;
    var pos_list = 0;
    console.log(song);
    if (play_list2 != "like"){
    for (i= 0; i<play_list.length; i++){
        if (play_list[i][0] == play_list2){
            play_list3 = play_list[i];
            pos_list = i;
        }
    }
    for (i=0; i<play_list3[1].length; i++){
        if (play_list3[1][i]==song){
            pos = i;
        }
    }
    play_list3[1].splice(pos, 1);
    play_list[pos_list] = play_list3;
    localStorage.setItem ("play_list", JSON.stringify ( play_list ) );}

    else {
        var play_like = JSON.parse( localStorage.getItem ("like"));
        var pos_like = 0;

        for (i = 0; i < play_like.length ; i++){
            if (play_like[i] == song){
                pos_like = i;
            }
        }
        play_like.splice(pos_like, 1);
        localStorage.setItem ("like", JSON.stringify ( play_like ) );
    }
    window.location.href = "playlist.html";
}

function crear_play_cancion(id){
    return function(){play__cancion(id)}
}


function buscador_playlist() {
    let input = document.getElementById('search_cancion').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('buscador_cancion');

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

$(".no_canciones").hide();
function hay_canciones(){
    play_list =  localStorage.getItem("lista_actual");
    var lista = [];
    if(play_list == "like"){
        lista = JSON.parse(localStorage.getItem("like"));
    }
    else {
        listas = JSON.parse( localStorage.getItem("play_list"));
        for (i = 0 ; i < listas.length ; i++){
            if (listas[i][0] == play_list){
                lista = listas[i][1];
            }
        }
    }
    if (lista.length == 0){
        $(".no_canciones").show();
    }
    else{
        $(".no_canciones").hide();
    }
}