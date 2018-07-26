function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');

    //Aplicamos los estilos generales del texto
    lienzo.font = "bold 20px verdana, sans-serif";
    //Escribimos nuestro texto en el lienzo
    //Indicamos su posición inicial
    lienzo.fillText("PRUEBA", 50,20);

    //1° Transformación "translate"
    //Específicamos su nueva posición
    lienzo.translate(50,70);

    //Escribimos nuevamente nuestro texto
    lienzo.fillText("PRUEBA",0,0);

}
window.addEventListener("load", iniciar, false);