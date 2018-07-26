function iniciar(){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    lienzo.fillRect(110,110,100,100);
}
window.addEventListener("load", iniciar, false);