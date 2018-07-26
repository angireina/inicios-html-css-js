function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    window.addEventListener('mousemove', animacion, false);
}

function animacion(e) {
    //  La función comienza limpiando el lienzo
    lienzo.clearRect(0, 0, 300, 500);
    //  La posición del ratón es capturada
    var xraton = e.clientX;    
    var yraton = e.clientY;
    //  La posición del primer ojo es grabada
    var xcentro = 220;
    var ycentro = 150;
//Comenzamos con las matemáticas
    //  Usando los valores de la posición del ratón y el ojo
    //  Calculamos el ángulo que va desde el ojo al ratón
    var angulo = Math.atan2(xraton - xcentro, yraton - ycentro);
    //  Este ángulo lo empleamos en la siguiente fórmula
    //  La cual nos permite calcular el punto exacto
    //  del centro del iris del ojo izquierdo.e
    var x = xcentro + Math.round(Math.sin(angulo) * 10);
    var y = ycentro + Math.round(Math.cos(angulo) * 10);

    lienzo.beginPath();
    lienzo.arc(xcentro, ycentro, 20, 0, Math.PI*2, false);
    lienzo.moveTo(xcentro + 70, 150);
    lienzo.arc(xcentro + 50, 150, 20, 0, Math.PI*2, false);
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.moveTo(x + 10, y);
    lienzo.arc(x, y, 10, 0, Math.PI*2, false);
    lienzo.moveTo(x + 60, y);
    lienzo.arc(x + 50, y, 10, 0, Math.PI*2, false);
    lienzo.fill();
}
window.addEventListener('load', iniciar, false);