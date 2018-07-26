function iniciar() {
    var imagenes = document.querySelectorAll('#cajaimagenes > img');
    for(var i = 0; i<imagenes.length; i++){

        imagenes[i].addEventListener('dragstart', arrastrado, false);
        imagenes[i].addEventListener('dragend', finalizado, false);
    }

    soltar = document.getElementById('lienzo');
    lienzo = soltar.getContext('2d');

    soltar.addEventListener('dragenter', function(e) {
        e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e) {
        e.preventDefault(); }, false);

    soltar.addEventListener('drop', soltado, false);
}

function arrastrado(e) {
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));

    e.dataTransfer.setDragImage(e.target, 40, 40);
} 

function soltado(e) {
    e.preventDefault();
    
    var img = e.dataTransfer.getData('Text');
    
    var elemento = document.getElementById(img);
    var posx = e.pageX - (40 + soltar.offsetLeft);
    var posy = e.pageY - (40 + soltar.offsetTop);

    lienzo.drawImage(elemento, posx, posy);
}

function finalizado(e) {
    elemento = e.target;
    elemento.style.visibility = 'hidden';
}

window.addEventListener('load', iniciar, false);