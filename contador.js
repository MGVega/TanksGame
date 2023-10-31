import {contador} from './script.js';


export function addContador(){
 
        let vidas1 = document.createElement("h2");
        vidas1.id("j1")
        vidas1.innerText("3")
        contador.appendChild(vidas1);

        let vidas2 = document.createElement("h2");
        vidas2.id("j2")
        vidas2.innerText("3")
        contador.appendChild(vidas2);
   
    
}

export function perderVida(jugador){
        let vida = document.getElementById(jugador);
        
        if(vida.innerHTML >1){
                vida.innerHTML = vida - 1;
        }else{

        }
        contador.appendChild(vida);
}

let countdownInterval = setInterval(countdown, 1000);

countdown();

export function countdown() {
  
    currentDate = new Date();
    totalSeconds = 60000;
  
    // Condición para comprobar si ha llegado la hora establecida
    if (Math.floor(totalSeconds) <= 0) {
      showProduct();
      secondsElement.innerHTML = 0;
      return;
    }

    seconds = Math.floor(totalSeconds) % 60;
    secondsElement.innerHTML = seconds;
}