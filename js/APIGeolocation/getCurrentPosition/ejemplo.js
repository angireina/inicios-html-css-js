function iniciar() {
    var boton = document.getElementById('obtener');
    boton.addEventListener('click', obtener, false);
}

function obtener() {
    navigator.geolocation.getCurrentPosition(mostrar, errores);
}

function mostrar(posicion) {
    var ubicacion = document.getElementById('ubicacion');
    /*
    var mapurl = 'https://www.google.com.ar/maps/place/32%C2%B057'
        '35.1%22W/@-32.9552422,-60.6432772,19z/data=!4m5!3m4!1s0x0:0x0!8m2!3d-32.955334!4d-60.6430918' + posicion.coords.latitude
        + ',' +posicion.coords.longitude+ posicion.coords.latitude+ ',' +posicion.coords.longitude;
    */

    var mapurl = 'http://maps.google.com/maps/api/staticmap?center='
        + posicion.coords.latitude
        + ','
        + posicion.coords.longitude
        + '&zoom=12&size=400x400&sensor=false&markers='
        + posicion.coords.latitude
        + ','
        + posicion.coords.longitude;
    
    ubicacion.innerHTML = '<img src="'+ mapurl + '">';


    console.log(mapurl);
}

function errores(error) {
    alert('Error: ' +error.code+ ' ' +error.message);
}

window.addEventListener('load', iniciar, false);