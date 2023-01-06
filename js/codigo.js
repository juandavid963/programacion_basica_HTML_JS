//1 es piedra, 2 es papel, 3 es tijera
let jugador=0
let pc = 0 
let ganador = 0
let perdedor = 0


while(ganador < 3 && perdedor<3){
    pc = Math.floor(Math.random()*(3-1+1)+1)
    jugador = prompt('Elije 1 para piedra, 2 para papel, 3 para tijera')
    
    //Eleccion del jugador
    if (jugador==1){
        alert('Elejiste Piedra')
    }
    else if (jugador==2){
        alert('Elejiste Papel')
    }
    else if(jugador==3) {
        alert('Elejiste tijera')
    }
    else{
        alert('elejiste perder')
    }

    //Eleccion del PC
    if (pc==1){
        alert('PC Elijió Piedra')
    }
    else if (pc==2){
        alert('PC Elijió Papel')
    }
    else if(pc==3) {
        alert('PC Elijió tijera')
    }
    else{
        alert('PC Elijió perder')
    }

    if(jugador==pc){
        alert('EMPATE')
    }
    else if(jugador == 1 && pc == 3){
        alert('GANASTE')
        ganador=ganador+1
    }
    else if(jugador == 2 && pc == 1){
        alert('GANASTE')
        ganador=ganador+1
    }
    else if (jugador == 3 && pc == 2){
        alert('GANASTE')
        ganador=ganador+1
    }
    else{
        alert('PERDISTE')
        perdedor=perdedor+1
    }
}
alert('Perdiste ' + perdedor + ' veces. Ganaste ' + ganador + ' veces')