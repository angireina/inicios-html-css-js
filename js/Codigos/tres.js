function iniciar(){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');

    lienzo.beginPath();
    lienzo.moveTo(0,0);
    lienzo.lineTo(0,200);
    lienzo.lineTo(200,200);
    lienzo.lineTo(200,0);
    lienzo.stroke();

    lienzo.beginPath();
    for(f=0; f<100; f+=10){
        lienzo.moveTo(0+f, 0+f);
        lienzo.lineTo(200-f, 0+f);

        lienzo.moveTo(200-f, 0+f);
        lienzo.lineTo(200-f, 200-f);

        lienzo.moveTo(0+f, 200-f);
        lienzo.lineTo(200-f, 200-f);

        lienzo.moveTo(0+f, 0+f);
        lienzo.lineTo(0+f, 200-f);
    }
    lienzo.stroke();

    lienzo.beginPath();
    for(f=0; f<=200; f=f+10){
        lienzo.moveTo(100,100);
        lienzo.lineTo(f, 0);

        lienzo.moveTo(100,100);
        lienzo.lineTo(f, 200);

        lienzo.moveTo(100,100);
        lienzo.lineTo(200,f);

        lienzo.moveTo(100,100);
        lienzo.lineTo(0,f);
    }
    lienzo.stroke();

}
window.addEventListener("load", iniciar, false);