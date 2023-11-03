

/*
export function addContador(contador) {
        let j1 = document.createElement("h1");
        let j2 = document.createElement("h1");
        let secondsElement = document.createElement("h1");
      
        j1.id = "j1"; // Establece el atributo 'id'
        j2.id = "j2"; // Establece el atributo 'id'
        secondsElement.id = "secondsElement"; // Establece el atributo 'id'
      
        j1.innerHTML = "3";
        j2.innerHTML = "3";
        secondsElement.innerHTML = "60";
      
        contador.appendChild(j1);
        contador.appendChild(secondsElement);
        contador.appendChild(j2);
        
}
*/
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