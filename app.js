//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHMTL = document.querySelector(elemento);
    elementoHMTL.innerHTML = texto;
    return;
}

function verificarIntento(){
    //let numeroDeUsuario = document.querySelector('input');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste al número en ${intentos} ${intentos > 1 ? 'veces' : 'vez'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //usuario no acierta
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numeor Secreto');
    asignarTextoElemento('p','Indica un numero del 1 al '+numeroMaximo);
    numeroSecreto = generarNumeroScreto();
    intentos = 1;
}

function generarNumeroScreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroScreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego(){
    //limpiarcaja
    limpiarCaja();
    //mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar numero de intentos
    condicionesIniciales();
    //desahibilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
 condicionesIniciales();
