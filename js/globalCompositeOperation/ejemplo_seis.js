function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');

    lienzo.font = "bold 20px verdana, sans-serif";

    lienzo.fillText("PRUEBA",50,20);

    //3° transformación "scale"
    //Especificamos su nueva escala
    lienzo.scale(2,2);

    //Aplicamos los estilos generales del texto
    lienzo.font = "bold 20px verdana, sans-serif";
    //Escribimos nuestro texto en el lienzo
    //Indicamos su posición inicial
    lienzo.fillText("PRUEBA",80,20)

}
window.addEventListener("load", iniciar, false);