function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    //  Creamos el objeto imagen
    var imagen = new Image();
    //  Especificamos su ubicación
    imagen.src = '../../img/imagen6.jpg'
    //  Cargamos la imagen
    imagen.addEventListener('load', modificarimagen, false);
}

function modificarimagen(e) {
    imagen = e.target;
    //  Creamos nuestro patrón
    var patron = lienzo.createPattern(imagen, 'repeat');
    //  Establecemos que el diseño sea el patron
    lienzo.fillStyle = patron;
    //  Que nuestro trazo comiece en 0,0 y sea del tamaño del lienzo
    lienzo.fillRect(0,0,500,300);
}
window.addEventListener('load', iniciar, false);