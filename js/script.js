
const botonMostrar = document.getElementsByClassName('mostrar');
let arrayMostrar = [...botonMostrar];
const botonOcultar = document.getElementsByClassName('ocultar');
let arrayOcultar = [...botonOcultar];
const cardBottom = document.getElementsByClassName('cardBottom');
let arrayBottom = [...cardBottom];
arrayMostrar.map(item => item.addEventListener("click", mostrarBottom));
arrayOcultar.map(item => item.addEventListener("click", ocultarBottom));

function mostrarBottom(e) {
    arrayBottom.map((item) => {
       if (item.previousElementSibling == e.target) {
        item.classList.add('show')
        console.log(item)
       }
    })
}

function ocultarBottom(e) {
    arrayBottom.map((item) => {
        item.classList.remove('show')
        console.log(item)

    })
}

/*
const cardFront = document.getElementsByClassName('cardFront');
let arrayFront = [...cardFront];
const cardBottom = document.getElementsByClassName('cardBottom');
let arrayBottom = [...cardBottom];
arrayFront.map(item => item.addEventListener("mouseover", mostrarBottom));
arrayBottom.map(item => item.addEventListener("mouseout", mostrarBottom));

function mostrarBottom(e) {
    if (e.type == "mouseover") {
        e.target.parentNode.classList.add('showBottom');
    } 
    if (e.type == "mouseout") {
        e.target.parentNode.classList.remove('showBottom');
    } 
}
 */
