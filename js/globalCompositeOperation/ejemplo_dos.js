function iniciar(){
    var elemento = document.getElementById('lienzo');
    var lienzo = elemento.getContext('2d');

    lienzo.font = "bold 24px verdana, sans-serif";
    lienzo.textAlign = "start";
    lienzo.textBaseline = "bottom";

    var txt = "Mi mensaje";
    lienzo.fillStyle = "SpringGreen";
    lienzo.fillText("Ancho: " + lienzo.measureText(txt).width,5,30);

    lienzo.fillText(txt,5,70);


    /*
    lienzo.fillStyle="DarkRed";
    lienzo.fillText("Mensaje Fill", 100,124);
    lienzo.strokeStyle="MediumTurquoise";
    lienzo.strokeText("Mensaje stroke", 150,180);
    */
}
window.addEventListener("load", iniciar, false);