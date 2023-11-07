
export function perderVida(jugador, popup){
        let vida = document.getElementById(jugador);
        let ganador = document.getElementById("ganador")
        
        if(vida.innerText > 1){
                vida.innerText = vida.innerText - 1;
        }else{
                popup.style.display = "block";
                if(jugador == "j1"){
                        ganador.innerText = "¡¡HAS GANADO J2!!";
                }else{
                        ganador.innerText = "¡¡HAS GANADO J1!!";  
                }
        }
}

export function countdown(secondsElement) {
    let ganador = document.getElementById("ganador")
    let vida1 = document.getElementById("j1");
    let vida2 = document.getElementById("j2");
    let seconds = secondsElement.innerText - 1;
    secondsElement.innerText = seconds;
    if(secondsElement.innerText == 0){
        popup.style.display = "block";
        if(vida1.innerText < vida2.innerText){
                ganador.innerText = "¡¡HAS GANADO J2!!";
        } else if(vida1.innerText > vida2.innerText){
                ganador.innerText = "¡¡HAS GANADO J1!!";
        }else{
                ganador.innerText = "¡¡EMPATE!!";
        }
    }
}