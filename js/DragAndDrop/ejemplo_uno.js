function iniciar() {
    origen1 = document.getElementById('imagen');
    origen1.addEventListener('dragstart', arrastrado, false);
    destino = document.getElementById('cajasoltar');
    //  Con e.preventDefault(), prevenimos el comportamiento por efecto de un evento.
    destino.addEventListener('dragenter', function(e){e.preventDefault();}, false);
    destino.addEventListener('dragover', function(e){e.preventDefault();}, false);
    
    destino.addEventListener('drop', soltado, false);
}

//  Las funciones de arrastrar y soltar, reciv¿ben la información necesaria para dicho proceso.
function arrastrado(e) {
    var codigo = '<img src="' + origen1.getAttribute('src') + '">';
    e.dataTrasnfer.setData('Text', codigo);
}

function soltado(e) {
    e.preventDefault();
    destino.innerHTML = e.dataTrasnfer.getData('Text');
}
window.addEventListener('load', iniciar, false);