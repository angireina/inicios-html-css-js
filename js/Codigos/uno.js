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
}
window.addEventListener("load", iniciar, false);