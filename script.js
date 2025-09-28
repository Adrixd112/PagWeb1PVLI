
let showLike = true;
let showDislike = true;
let like_colour = 'aquamarine';
let dislike_colour = 'darkred';

//cambio de clase: si tengo like paso a ser dislike y viceversa. Actualizo todos los botones(no me interesa ser tan eficiente).
function cambiaClase(yo) {
    if (yo.classList.contains('like')) { yo.className = 'dislike'; }
    else { yo.className = 'like'; }

    actualizarBotonesLista();
}

//Actualizar color y visibilidad de cosas de la clase like y dislike según showLike,showDislike,like_colour y dislike_colour.
function actualizarBotonesLista() {
    //cojo los elementos de la clase like
    let botones = document.getElementsByClassName('like'); 

    //separo los componentes rgb de el color de los liked (está guardado como una cadena de texto)
    let R = parseInt(like_colour[1] + like_colour[2], 16);
    let G = parseInt(like_colour[3] + like_colour[4], 16);
    let B = parseInt(like_colour[5] + like_colour[6], 16);

    //calculo si es necesario que el texto sea negro o blanco para que se vea bien
    let whiteText = 0.2126 * Math.pow(R / 255, 2.2) + 0.7152 * Math.pow(G / 255, 2.2) + 0.0722 * Math.pow(B / 255, 2.2) < 0.12;

    //para cada cosa de la clase like, actualizo su visibilidad y su color según showLike y like_colour.
    for (let i = 0; i < botones.length; i++) {
        botones[i].style.visibility = showLike ? 'visible' : 'hidden';
        botones[i].style.background = like_colour;

        if (whiteText) {
            botones[i].style.color = 'white';
        } else { botones[i].style.color = 'black'; }

    }

    //lo mismo que con like pero con los botones de la clase dislike

    botones = document.getElementsByClassName('dislike');
     R = parseInt(dislike_colour[1] + dislike_colour[2], 16);
     G = parseInt(dislike_colour[3] + dislike_colour[4], 16);
     B = parseInt(dislike_colour[5] + dislike_colour[6], 16);
     whiteText = 0.2126 * Math.pow(R / 255, 2.2) + 0.7152 * Math.pow(G / 255, 2.2) + 0.0722 * Math.pow(B / 255, 2.2) < 0.12;

    for (let i = 0; i < botones.length; i++) {
        botones[i].style.visibility = showDislike ? 'visible' : 'hidden';
        botones[i].style.background = dislike_colour;

        if (whiteText) {
            botones[i].style.color = 'white';
        } else { botones[i].style.color = 'black'; }
    }



}
//cambiar la visibilidad de los botones de la clase like y el texto de mi botón (yo soy el botón de visibilidad de like)
function cambiaVisibilidad_like(yo) {
    showLike = !showLike;
    actualizarBotonesLista();
    yo.textContent = (showLike ? "Hide" : "Show") + " likes";
}

//cambiar la visibilidad de las cosas de la clase dislike y el texto de mi botón (yo soy el botón de visibilidad de dislike)
function cambiaVisibilidad_dislike(yo) {
    showDislike = !showDislike;
    actualizarBotonesLista();
    yo.textContent = (showDislike ? "Hide" : "Show") + " dislikes";
}


//cambiar color de las cosas de la clase like
function cambiaColores_like() {
    //calculo el color con un número random 0-0xFFFFFF y lo paso a hex
    like_colour = '#' + (Math.floor(Math.random() * 16777215)).toString(16);
    actualizarBotonesLista();
}
//cambiar color de las cosas de la clase dislike
function cambiaColores_dislike() {
    //calculo el color con un número random 0-0xFFFFFF y lo paso a hex
    dislike_colour = '#' + (Math.floor(Math.random() * 16777215)).toString(16);
    actualizarBotonesLista();
}



