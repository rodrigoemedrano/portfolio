
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



const botonMenu = document.getElementById('menuMobile') 
const listaMenu = document.getElementById('listaMenu') 

botonMenu.addEventListener("click", mostrarMenuMobile)


function mostrarMenuMobile() {
    listaMenu.classList.toggle('showMenu')
}



