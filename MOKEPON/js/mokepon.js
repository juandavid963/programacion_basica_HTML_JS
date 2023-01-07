let ataqueJugador = ''
let ataqueEnemigo = ''
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener('click', reiniciarJuego)

    //ocultar sección seleccionar ataque
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = 'none'
    //ocultar sección seleccionar reinicia
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = 'none'
}


function ataqueAleatorioEnemigo(){
    numAtaque = aleatorio(1,3)
    if(numAtaque == 1){
        ataqueEnemigo = 'FUEGO'
    }
    else if(numAtaque == 2){
        ataqueEnemigo = 'AGUA'
    }
    else{
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador +', la mascota del enemigo atacó con '+ ataqueEnemigo +', '+resultado
    sectionMensaje.appendChild(parrafo) 
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensaje.appendChild(parrafo) 

    let botonFuego = document.getElementById("boton-fuego")
    let botonAgua = document.getElementById("boton-agua")
    let botonTierra = document.getElementById("boton-tierra")

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = 'block'

}

function combate(){

    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    //revisar las vidas 
    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("Felicitaciones!! Ganaste 🥳🥳")
        //alert("GANASTE 🥳🥳")
    }
    else if(vidasJugador == 0){
        crearMensajeFinal("Lo siento, Perdiste 😕😕")
        //alert("PERDIMOS")
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    //alert(ataqueJugador)
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    //alert(ataqueJugador)
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    //alert(ataqueJugador)
    ataqueAleatorioEnemigo()
}

function aleatorio(min,max){
    let numero = Math.floor(Math.random()*(max-min+1)+min)
    return numero
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    
    if(ataqueAleatorio==1){
        spanMascotaEnemigo.innerHTML = 'HIPODOGE'
    }
    else if(ataqueAleatorio==2){
        spanMascotaEnemigo.innerHTML = 'CAPIPEPO'
    }
    else{
        spanMascotaEnemigo.innerHTML = 'RATIGUEYA'
    }
    
}

function seleccionarMascotaJugador() {
 
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'HIPODOGE'
        //alert('SELECCIONASTE TU MASCOTA HIPODOGE ')
    }
    else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'CAPIPEPO'
        //alert('SELECCIONASTE TU MASCOTA CAPIPEPO ')
    }
    else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'RATIGUEYA' 
        //alert('SELECCIONASTE TU MASCOTA RATIGUEYA')
    }
    else{
        //spanMascotaJugador.innerHTML = 'XXXX' 
        alert('NO SELECCIONASTE TU MASCOTA')
    }
    seleccionarMascotaEnemigo()
    
    //esconder sección seleccionar mascota
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = 'none'
    //mostrar sección seleccionar ataque
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = 'block'

}

function reiniciarJuego(){
    location.reload()
}

//para que todos los elementos de HTML existan
window.addEventListener('load', iniciarJuego)