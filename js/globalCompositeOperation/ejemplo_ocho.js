function iniciar(){
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    /*En este ounto guardamos la configuración por defecto.
    En este caso se especificó al inicio.
    Pero usted puede especificarlo en cualquier punto*/
   lienzo.save();
   //Aplicamos una nueva transformación
   lienzo.translate(50,70);
   //Creamos nuestro primer objeto (en este caso un texto)
   lienzo.font = "bold 20px verdana, sans-serif";
   lienzo.fillText("PRUEBA1",0,30);
   //Restauramos las ultimas transformaciones
   lienzo.restore();
   /*Esta vez, el objeto se crea bajo las últimas condiciones
   que se haya guardado*/
   lienzo.fillText("PRUEBA2",0,30);
}
window.addEventListener("load", iniciar, false);