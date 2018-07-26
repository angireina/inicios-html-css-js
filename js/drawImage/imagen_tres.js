function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    //Creamos el objeto imagen
    var imagen = new Image();
    //Especificamos su ubicación
    imagen.src = '..//img/imagen5.jpg';
    //Cargamos la imagen y la dibujamos en el lienzo
    imagen.addEventListener("load", function(){
        //Dibujamos la imagen en la posición 0,0
        lienzo.drawImage(imagen,0,0);
        //para escalar la imagen
        lienzo.drawImage(imagen,285,0, 150,107);
        //Para escalar solo una parte de la imagen
        lienzo.drawImage(imagen,130,85,80,60,310,150,150,107);

    }, false);
}
window.addEventListener("load", iniciar, false);