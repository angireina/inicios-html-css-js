function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    //Creamos el objeto imagen
    var imagen = new Image();
    //Especificamos su ubicación
    imagen.src = '..//img/imagen5.jpg';
    //Cargamos la imagen y la dibujamos en el lienzo
    imagen.addEventListener("load", function(){
        //Dibujamos la imagen en la posición 00
        lienzo.drawImage(imagen,0,0);
    }, false);
}
window.addEventListener("load", iniciar, false);