function iniciar(){
    //Referenciamos nuestro lienzo.
    var elemento = document.getElementById('lienzo');
    
    //Creamos el contexto.
    lienzo = elemento.getContext('2d');

    //Referenciamos el video y creamos el evento que lo activará
    video = document.getElementById('medio');

    //Añadimos una escucha que llame a la función "presionar" al hacer clic
    video.addEventListener('click', presionar, false);
}
/*  
    Creamos nuestra función presionar
    "presionar" es la función que será escuchada.
    Esta función  inicia o detiene el video al hacer click. 
*/
function presionar(){

    /* 
        Condicional if:
        Leyendo de izquierda a derecha por el doble "&&" dice:
        Si el video NO está pausado "&& = and" y el video no ha terminado
    */      
    if(!video.paused && !video.ended){

        //  Cuando se produzca el evento "click" pausa el video
        video.pause();

        /*
            clearInterval: Cancela la acción repetida que se creó utilizando setInterval.
            es decir, el método clearInterval() despeja un temporizador
            ajustado con el método setInterval(argumento).
        */
        window.clearInterval(bucle);
    }else{

        //  Con 1 sentencia else le decimos, "de lo contrario se reproduce el video."
        video.play();

        //  Cuando el video se reproduce, procesamos el video con la función "procesarCuadros"
        bucle = setInterval(procesarCuadros, 33);

        /*
            setInterval: Llama a una función o ejecuta un fragmento
                de código en varias ocasiones, con un intervalo de
                tiempo fijo entre cada llamada a la función.
            Su sintaxis genérica sería:
                var IdDelIntervalo = window.setInterval(fnción, tiempo en ms);
            Su significado sería:
                IdDelIntervalo: es un identificador único que se puede pasar a clearInterval()
                función: es la función que desea ser llamado en varias ocasiones.
                tiempo en ms: es el número de milisegundos (milésimmas de segundo) que el setInterval() esta
                funcion debe esperar antes de cada llamada a la función. 
        */
    }
}

//  Finalmente nuestra función que procesará el video.
function procesarCuadros(){

    //  Dibujamos la imágen en el lienzo
    lienzo.drawImage(video, 0, 0, 500, 300);

    //  Convertimos la imagen a datos
    //  Estos datos son grabados dentro de la variable "info"
    var info = lienzo.getImageData(0, 0, 500, 300);

    //  Almacenamos los colores de cada pixxel en estas variables
    var pos;
    var gris;

    //  Nuestro bucle for que proocesará cada pixel de nuestra imagen
    for(x=0; x<=500; x++){
        for(y=0; y<=300; y++){

            //   Formula para obtener el polinomio para el color real de "info"
            pos = (info.width*4*y) + (x*4);

            //  Formmula para obtener el color gris
            gris = parseInt(info.data[pos]*0.2989 + info.data[pos+1]*0.5870) + info.data[pos+2]*0.1140;
            
            //  Procesamos cada uno de los colores
            
            //  Para el color rojo
            info.data[pos] = gris;

            //  Para el color verde
            info.data[pos+1] = gris;

            //  Para el color azul
            info.data[pos+2] = gris;
        }
    }

    /*
        Finalmente colocamos en el lienzo la imagen procesada, que cambiará cada 33 ms
        Esto da la apariencia de un video a escala de gris 
    */
    lienzo.putImageData(info, 0, 0);
}
window.addEventListener('load', iniciar, false);