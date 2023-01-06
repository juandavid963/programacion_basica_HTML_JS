function seleccionarMascotaJugador() {
 
    if(document.getElementById('hipodoge').checked){
        alert('SELECCIONASTE TU MASCOTA HIPODOGE')
    }
    else if(document.getElementById('capipepo').checked){
        alert('SELECCIONASTE TU MASCOTA CAPIPEPO')
    }
    else if(document.getElementById('ratigueya').checked){
        alert('SELECCIONASTE TU MASCOTA RATIGUEYA')
    }
    else{
        alert('NO SELECCIONASTE TU MASCOTA')
    }
    
}

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

//para que todos los elementos de HTML existan
window.addEventListener('load', iniciarJuego)