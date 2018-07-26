function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    var imagen = new Image();
    /*
    1- La imagen tiene que estar en nuestro host.
    Esto es porque solo cuando el documento...
    y la imagen corresponden a la misma fuente (URL)...
    el método getImageData() trabajará adecuadamente. 
    */
    imagen.src = "../../img/imagen5.jpg";
    // 2- Recuerde que primero debemos cargar la imagen 
    imagen.addEventListener("load", modificarimagen, false);
}
// 3- Creamos una nueva función
function modificarimagen(e){
    /*
    4- Generamos una referencia a la imagen usando la...
       propiedad target.
            La propiedad "target" devuelve el elemento que...
            desencadenó el evento.
    */
    imagen = e.target;
    
    //5-  Usando esta referencia el método drawImage(), 
    //    la imagen es dibujada en el lienzo en la posición 0,0.
    
    lienzo.drawImage(imagen,0,0);

    /* 6- La imagen utilizada tiene 128px de ancho por 128px de alto...
        por lo que usando el método getImageData() con los valores
        0,0 para la esquina superior izquierda, y 64,128 para el valor 
        horizontal y vertical, estamos extrayendo solo la mitad de la
        imagen original.
     Estos datos son grabados dentro de la variable info. */
    var info = lienzo.getImageData(0,0,64,128);
    // Esta variable nos va a servir para almacenar cada valor 
    // de nuestro rgb().
    var pos;
    /*  7-  Para obtener el valor negativo
            se obtiene restando el valor real a 255 
            -> fórmula: colorNegativo = 225 - colorReal

            Para realizar este proceso con cad pixel
            implementamos dos bucles for para filas y columnas */

    //  El bucle para las x va de 0 a 64 "tamaño horizontal"

    for(x=0; x<=64; x++){
        //  9- El bucle para las y va de 0 a 128 "tamaño vertical"
        for(y=0; y<=128; y++){
            //  10- Especificamos la fórmula para la posición
            //      de cada valor en el array.

            //Este es para el color rojo
            pos = (info.width*4*y)+(x*4);

            //  11- Operaciones para cambiar a negativo
            //      "colorNegativo = 255 - colorReal"
            info.data[pos] = 255 - info.data[pos];
            //  Para el color verde
            info.data[pos+1] = 255 - info.data[pos+1];
            //  Para el color azul
            info.data[pos+2] = 255 - info.data[pos+2];
        }
    }
    /*  12- Luego de que cada pixel es procesado,
            la variable info con los datos de la imagen
            es enviada al lienzo como una imagen usando
            el método putImageData().       */
    lienzo.putImageData(info,0,0);
    /*  13- La imagen es ubicada en la misma posición
            que la original, reemplazando la mitad izquierda
            de la imagen original por el negativo que acabamos 
            de crear.       */
}
window.addEventListener("load", iniciar, false);