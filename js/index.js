var fin = new Date('12/10/2022 10:20 PM');
var _segundos = 1000;
var _minutos = _segundos * 60;
var _horas = _minutos * 60;
var _dias = _horas * 24;
var temporizador;

function showRemaining() {
    var hoy = new Date();
    var tiempo = fin - hoy;
    if (tiempo < 0) {

        clearInterval(temporizador);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';

        return;
    }
    var dias = Math.floor(tiempo / _dias);
    var horas = Math.floor((tiempo % _dias) / _horas);
    var minutos = Math.floor((tiempo % _horas) / _minutos);
    var segundos = Math.floor((tiempo % _minutos) / _segundos);

    document.getElementById('countdown').innerHTML = dias + ':';
    if (horas < 10){
        document.getElementById('countdown').innerHTML += '0' + horas + ':';
    }

    else{
        document.getElementById('countdown').innerHTML += horas + ':';
    }
    if (minutos < 10){
        document.getElementById('countdown').innerHTML += '0' + minutos + ':';
    }

    else{
        document.getElementById('countdown').innerHTML += minutos + ':';
    }
    if (segundos < 10){
        document.getElementById('countdown').innerHTML += '0' + segundos;
    }

    else{
        document.getElementById('countdown').innerHTML += segundos;
    }
}

var fin2 = new Date('12/25/2022 7:20 PM');
var temporizador2;
function showRemaining2() {
    var hoy = new Date();
    var tiempo = fin2 - hoy;
    if (tiempo < 0) {

        clearInterval(temporizador2);
        document.getElementById('countdown2').innerHTML = 'EXPIRED!';

        return;
    }
    var dias = Math.floor(tiempo / _dias);
    var horas = Math.floor((tiempo % _dias) / _horas);
    var minutos = Math.floor((tiempo % _horas) / _minutos);
    var segundos = Math.floor((tiempo % _minutos) / _segundos);

    document.getElementById('countdown2').innerHTML = dias + ':';
    if (horas < 10){
        document.getElementById('countdown2').innerHTML += '0' + horas + ':';
    }

    else{
        document.getElementById('countdown2').innerHTML += horas + ':';
    }
    if (minutos < 10){
        document.getElementById('countdown2').innerHTML += '0' + minutos + ':';
    }

    else{
        document.getElementById('countdown2').innerHTML += minutos + ':';
    }
    if (segundos < 10){
        document.getElementById('countdown2').innerHTML += '0' + segundos;
    }

    else{
        document.getElementById('countdown2').innerHTML += segundos;
    }
}

var fin3 = new Date('1/12/2023 5:34 AM');
var temporizador3;
function showRemaining3() {
    var hoy = new Date();
    var tiempo = fin3 - hoy;
    if (tiempo < 0) {

        clearInterval(temporizador3);
        document.getElementById('countdown3').innerHTML = 'EXPIRED!';

        return;
    }
    var dias = Math.floor(tiempo / _dias);
    var horas = Math.floor((tiempo % _dias) / _horas);
    var minutos = Math.floor((tiempo % _horas) / _minutos);
    var segundos = Math.floor((tiempo % _minutos) / _segundos);

    document.getElementById('countdown3').innerHTML = dias + ':';
    if (horas < 10){
        document.getElementById('countdown3').innerHTML += '0' + horas + ':';
    }

    else{
        document.getElementById('countdown3').innerHTML += horas + ':';
    }
    if (minutos < 10){
        document.getElementById('countdown3').innerHTML += '0' + minutos + ':';
    }

    else{
        document.getElementById('countdown3').innerHTML += minutos + ':';
    }
    if (segundos < 10){
        document.getElementById('countdown3').innerHTML += '0' + segundos;
    }

    else{
        document.getElementById('countdown3').innerHTML += segundos;
    }
}

var fin4 = new Date('12/10/2022 10:20 PM');
var temporizador4;
function showRemaining4() {
    var hoy = new Date();
    var tiempo = fin4 - hoy;
    if (tiempo < 0) {

        clearInterval(temporizador4);
        document.getElementById('countdown4').innerHTML = 'EXPIRED!';

        return;
    }
    var dias = Math.floor(tiempo / _dias);
    var horas = Math.floor((tiempo % _dias) / _horas);
    var minutos = Math.floor((tiempo % _horas) / _minutos);
    var segundos = Math.floor((tiempo % _minutos) / _segundos);

    document.getElementById('countdown4').innerHTML = dias + ':';
    if (horas < 10){
        document.getElementById('countdown4').innerHTML += '0' + horas + ':';
    }

    else{
        document.getElementById('countdown4').innerHTML += horas + ':';
    }
    if (minutos < 10){
        document.getElementById('countdown4').innerHTML += '0' + minutos + ':';
    }

    else{
        document.getElementById('countdown4').innerHTML += minutos + ':';
    }
    if (segundos < 10){
        document.getElementById('countdown4').innerHTML += '0' + segundos;
    }

    else{
        document.getElementById('countdown4').innerHTML += segundos;
    }
}

function indexa(){
    temporizador = setInterval(showRemaining, 1000);
    temporizador2 = setInterval(showRemaining2, 1000);
    temporizador3= setInterval(showRemaining3, 1000);
    temporizador4 = setInterval(showRemaining4, 1000);
}