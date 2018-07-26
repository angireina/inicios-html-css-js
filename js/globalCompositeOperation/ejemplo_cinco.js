function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext("2d");

    //2° transformación "rotate"
    //Especificamos su ángulo    
    lienzo.rotate(Math.PI / 180 * 45);

    //Aplicamos los estilos generales del texto
    lienzo.font = "bold 20px verdana, sans-serif";

    //Escribimos nuestro texto en el lienzo
    //Indicamos su posición inicial
    lienzo.fillText("PRUEBA",50,20);

}
window.addEventListener("load", iniciar, false);
