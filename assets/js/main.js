let puntosUsuarios = 0;
let puntosPC = 0;

let instrucciones = document.querySelector('#instrucciones')
let contenedorPuntosUsuarios = document.querySelector('#puntosUsuarios')
let contenedorPuntosPC = document.querySelector('#puntosComputadora')
let mensaje = document.querySelector('#mensaje')

let ganaPunto = document.querySelector('#ganaPunto')
let elegiArma = document.querySelector('#elegiArma')

let eleccionUsuario = document.querySelector('#eleccionUsuario')
let eleccionPC = document.querySelector('#eleccionPC')


let botonesArmas = document.querySelectorAll('.arma');
botonesArmas.forEach(boton =>{
    boton.addEventListener('click', iniciarTurno);
});

function iniciarTurno(e){
    contenedorPuntosUsuarios.innerText = 1;
}