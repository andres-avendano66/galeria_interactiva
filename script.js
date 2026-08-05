/* Función que se ejecuta cuando el cursor pasa sobre la imagen */
function upDate(previewPic) {
    // 1. Mostrar en consola para comprobar que el evento se dispara (Instrucciones paso a y b)
    console.log("Evento disparado: el ratón está sobre la imagen");
    console.log("Atributo alt de la imagen:", previewPic.alt);
    console.log("Atributo src de la imagen:", previewPic.src);

    // 2. Cambiar el texto del div por el atributo alt de la imagen enfocada (Instrucción paso c)
    document.getElementById('image').innerHTML = previewPic.alt;

    // 3. Cambiar la imagen de fondo del div por el atributo src de la imagen enfocada (Instrucción paso e)
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

/* Función que se ejecuta cuando el cursor sale de la imagen */
function unDo() {
    console.log("Evento disparado: el ratón salió de la imagen");

    // 1. Restaurar la imagen de fondo del div al valor original vacío (Instrucción paso 4a)
    document.getElementById('image').style.backgroundImage = "url('')";

    // 2. Restaurar el texto del div al mensaje original (Instrucción paso 4b)
    document.getElementById('image').innerHTML = "Pase el ratón por encima de una imagen para mostrarla aquí";
}