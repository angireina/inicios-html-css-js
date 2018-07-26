function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    //  Algún dibujo básico
    lienzo.fillStyle = "rgb(255,0,0)";
    lienzo.fillRect(20,20,100,100);

    lienzo.fillStyle = "rgb(0,255,0)";
    lienzo.fillRect(60,60,140,140);

    lienzo.fillStyle = "rgb(0,0,255)";
    lienzo.fillRect(100,100,180,180);

    //  Almacenamos el data:url dentro de DataUrl
    var dataUrl = elemento.toDataURL();

    //  Colocamos el contenido en un textarea
    document.getElementById("textArea").value = dataUrl;


    //  La abrimos en una ventana emergente
    var image = new Image();
    image.src = dataUrl;
    var w = window.open("", "toDataURL() image", "width=500, height=300");
    w.document.write(image.outerHTML);

}
window.addEventListener("load", iniciar, false);