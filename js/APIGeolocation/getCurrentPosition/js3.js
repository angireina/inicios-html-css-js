function iniciar() {
    var boton = document.getElementById('obtener');
    boton.addEventListener('click', obtener, false);
}

function obtener() {
    var geoconfig = {enableHighAccuracy: true, timeout: 10000, maximumAge: 60000};
    navigator.geolocation.getCurrentPosition(mostrar, errores, geoconfig);
}

function mostrar(posicion) {
    var ubicacion = document.getElementById('ubicacion');
    var datos = '';

    datos += 'Latitud: ' +posicion.coords.latitude+ '<br>';
    datos += 'Longitud: ' +posicion.coords.longitude+ '<br>';
    datos += 'Exactitud: ' +posicion.coords.accuracy+ 'mts.<br>';
    // datos += 'Altitud: ' +posicion.coords.altitude+ '<br>';
    // datos += 'Exactitud-Altitud' +posicion.coords.altitudeAcurracy+ '<br>';
    // datos += 'Grados' +posicion.coords.heading+ '<br>';
    // datos += 'Velocidad' +posicion.coords.seed+ '<br>';
    ubicacion.innerHTML = datos;
}

function errores(error) {
    
    alert('Error: ' +error.code+ ' ' +error.message);
}

window.addEventListener('load', iniciar, false);