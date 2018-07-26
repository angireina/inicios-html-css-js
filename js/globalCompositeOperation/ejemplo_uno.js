function iniciar(){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');

    //Comenzamos a realizar los trazos
    lienzo.beginPath();
    //Establecemos el color al primer trazo
    lienzo.strokeStyle="red";
    //Aplicamos el estilo en line "LineWidth"
    lienzo.lineWidth=7;
    //Posicionamos el lapiz
    lienzo.moveTo(40,20);
    //Realizamos el trazo a la posición indicada
    lienzo.lineTo(40,195);
    //Especificamos que es solo el contorno
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.strokeStyle="blue";
    //Aplicamos el estilo en linea "LineCap"
    //Esta propiedad determina la forma de la terminación de la línea
    //Esta propiedad puede recibir tres valores: butt, round y square
    lienzo.lineCap="butt";
    lienzo.moveTo(80,20);
    lienzo.lineTo(80,195);
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.strokeStyle="lime";
    lienzo.lineCap="round";
    lienzo.moveTo(120,20);
    lienzo.lineTo(120,195);
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.strokeStyle="yellow";
    lienzo.lineCap="square";
    lienzo.moveTo(160,20);
    lienzo.lineTo(160,195);
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.strokeStyle="purple";
    //LineJoin: determina la conexión entre las líneas
    lienzo.lineJoin="bevel";
    lienzo.moveTo(200,90);
    lienzo.lineTo(230,10);
    lienzo.lineTo(260,90);
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.strokeStyle="aqua";
    lienzo.lineJoin="round";
    lienzo.moveTo(200,180);
    lienzo.lineTo(230,100);
    lienzo.lineTo(260,180);
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.strokeStyle="silver";
    lienzo.lineJoin="miter"
    //Unicamente cuando usamos miter
    //Es posible hacer uso de la propiedad miterLimit
    lienzo.miterLimit=2;
    lienzo.moveTo(200,270);
    lienzo.lineTo(230,190);
    lienzo.lineTo(260,270);
    lienzo.stroke();

}
window.addEventListener("load", iniciar, false);
