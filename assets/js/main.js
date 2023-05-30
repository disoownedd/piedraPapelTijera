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
    let eleccionPC = Math.floor(Math.random()*3);
    let eleccionUsuario= e.currentTarget.id;
    // console.log(eleccionUsuario)

/* 
    piedra => 0
    papel => 1
    tijera => 2
*/

    if (eleccionPC === 0){
        eleccionPC = "piedra";
    }else if(eleccionPC === 1)
    {eleccionPC = 'papel';
    }else if(eleccionPC === 2){
        eleccionPC = 'tijera'
    }

/*     console.log('Usuario' + eleccionUsuario)
    console.log("PC" + eleccionPC) */

    if(
        (eleccionUsuario === 'piedra' && eleccionPC === 'tijera') ||
        (eleccionUsuario === 'tijera' && eleccionPC === 'papel') ||
        (eleccionUsuario === 'papel' && eleccionPC == 'piedra')
    ){
        ganaUsuario()
    }else if(
        (eleccionPC === 'piedra' && eleccionUsuario === 'tijera') ||
        (eleccionPC === 'tijera' && eleccionUsuario === 'papel') ||
        (eleccionPC === 'papel' && eleccionUsuario == 'piedra')
    ){
        ganaPC()
    }else{
        empate()
    }

    mensaje.classList.remove('disabled')

    // eleccionUsuario.innerText = 

}

function ganaUsuario(){
    puntosUsuarios++;
    contenedorPuntosUsuarios.innerText = puntosUsuarios;
    ganaPunto.innerText= 'Ganaste un punto!🔥'
}

function ganaPC(){
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    ganaPunto.innerText = '¡La pc ganó un punto!😭'
}

function empate(){
    ganaPunto.innerText= '¡Empate!😱'
}