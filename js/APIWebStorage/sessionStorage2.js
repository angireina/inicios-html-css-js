function iniciar() {
    var boton = document.getElementById('grabar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
}

function nuevoitem() {
    var clave = document.getElementById('clave').value;
    var valor = document.getElementById('texto').value;
    sessionStorage[clave] = valor;
    mostrar(clave); 
}

function mostrar(clave) {
    var cajadatos = document.getElementById('cajadatos');
    for(var f = 0; f<sessionStorage.length; f++) {
        var clave = sessionStorage.key(f);
        var valor = sessionStorage.getItem(clave);
        cajadatos.innerHTML += '<div>'+clave+' - '+valor+'</div>';
    }
}

window.addEventListener('load', iniciar, false);