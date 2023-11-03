
export function perderVida(jugador){
        let vida = document.getElementById(jugador);
        
        if(vida.innerHTML >1){
                vida.innerHTML = vida - 1;
        }else{

        }
        contador.appendChild(vida);
}

export function countdown(secondsElement) {
    let seconds = secondsElement.innerText - 1;
    secondsElement.innerText = seconds;
}