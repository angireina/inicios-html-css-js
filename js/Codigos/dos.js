function iniciar(){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');

    lienzo.beginPath();
    lienzo.strokeStyle="blue";
    //Aplicamos el estilo en linea "LineCap"
    //Esta propiedad determina la forma de la terminación de la línea
    //Esta propiedad puede recibir tres valores: butt, round y square
    lienzo.lineWidth=7;
    lienzo.lineCap="butt";
    lienzo.moveTo(80,20);
    lienzo.lineTo(80,195);
    lienzo.stroke();
}
window.addEventListener("load", iniciar, false);