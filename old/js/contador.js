


export function addContador(contador) {
        let j1 = document.createElement("h1");
        let j2 = document.createElement("h1");
        let secondsElement = document.createElement("h1");
      
        j1.id = "j1"; // Establece el atributo 'id'
        j2.id = "j2"; // Establece el atributo 'id'
        secondsElement.id = "secondsElement"; // Establece el atributo 'id'
      
        j1.innerText = "3";
        j2.innerHTML = "3";
        secondsElement.innerHTML = "60";
      
        contador.appendChild(j1);
        contador.appendChild(j2);
        contador.appendChild(secondsElement);
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

export function countdown(secondsElement) {

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