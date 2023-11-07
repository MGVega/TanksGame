import { drawImage } from "./modules/drawImage.js";
import { clearRect } from "./modules/clearRect.js";
import { WIDTH, HEIGHT, FACTOR, X_IZQUIERDA, X_DERECHA, Y_ARRIBA, Y_ABAJO } from "./modules/constants.js";
import { countdown } from "./js/contador.js";
import { espacioTiempo } from "./js/espacioTIempo.js";

let secondsElement = document.getElementById("secondsElement");

const myCanvas = document.getElementById("myCanvas");
myCanvas.width = WIDTH;
myCanvas.height = HEIGHT;

// El contexto se refiere al "pincel" que proporciona el lienzo (canvas)
let context = myCanvas.getContext("2d");

// Ejemplo movimiento jugador

export const fondo = {
  color: "#fff",
}

export const player1 = {
  url: "./images/1abajo.png",
  x: (WIDTH / 2) - (-210),
  y: HEIGHT - 470,
  width: 100,
  speed: 200,
  direccion:"d"
};

export const player2 = {
  url: "./images/2arriba.png",
  x: (WIDTH / 2) - 310,
  y: HEIGHT - 110,
  width: 100,
  speed: 200,
  direccion:"u"
};


export const bala = {
  width: 10,
  height: 10,
  speed: 5,
  color: "red",
};

export const balas = [];


function update() {
  requestAnimationFrame(render);
  requestAnimationFrame(update);

  for (let i = 0; i < balas.length; i++) {
    const balaActual = balas[i];
    if(player1.direccion="u") {
      balaActual.y -= bala.speed;
    }
    

    console.log("Dibujando bala en x: " + balaActual.x + ", y: " + balaActual.y); 

    context.fillStyle = bala.color;
    context.fillRect(balaActual.x, balaActual.y, bala.width, bala.height); 
    
    if (balaActual.y < 0) {
      balas.splice(i, 1); 
      i--;
    }
  }
}
function render() {
  clearRect(context);
  // Dibuja el fondo en el lienzo
  context.fillStyle = fondo.color; // Configura el color de fondo
  context.fillRect(0, 0, WIDTH, HEIGHT); // Dibuja un rectángulo de fondo que cubre todo el lienzo

  // Dibuja las balas
  for (let i = 0; i < balas.length; i++) {
    const balaActual = balas[i];

    context.fillStyle = bala.color;
    context.fillRect(balaActual.x, balaActual.y, bala.width, bala.height);
  }
  drawImage(context, player1);
  drawImage(context, player2);
}

addEventListener("keydown", (event) => {
  espacioTiempo(event);
});


let wallpaper = new Image();
wallpaper.src = "./images/space-bg.png";
wallpaper.onload = function () {
  render();
  update();
};


let countdownInterval = setInterval(function() {
  countdown(secondsElement);
}, 1000);
