function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    video = document.getElementById('medio');
    video.addEventListener('click', presionar, false);
}

function presionar(){
    if(!video.paused && !video.ended){
        video.pause();
        window.clearInterval(bucle);
    }else{
        video.play();
        bucle = setInterval(procesarCuadros, 33);
    }

}

function procesarCuadros(){
    lienzo.drawImage(video, 0, 0, 500, 300);
    var info = lienzo.getImageData(0, 0, 500, 300);
    var pos;
    var neg;
    for(x=0; x<=500; x++){
        for(y=0; y<=300; y++){
            pos = (info.width*4*y) + (x*4);
            neg = parseInt((255 - info.data[pos]) + (255 - info.data[pos+1]) + (255 - info.data[pos+2])); 
            info.data[pos] = neg;
            info.data[pos + 1] = neg;
            info.data[pos + 2] = neg;
        }
    }

    lienzo.putImageData(info, 0, 0);
}
window.addEventListener('load', iniciar, false);