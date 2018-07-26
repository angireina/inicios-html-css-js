function iniciar(){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    lienzo.strokeRect(100,100,120,120);
}
window.addEventListener("load", iniciar, false);