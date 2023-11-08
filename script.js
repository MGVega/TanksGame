import { drawImage } from "./modules/drawImage.js";
import { clearRect } from "./modules/clearRect.js";
import { WIDTH, HEIGHT, FACTOR, X_IZQUIERDA, X_DERECHA, Y_ARRIBA, Y_ABAJO } from "./modules/constants.js";
import { countdown, perderVida } from "./js/contador.js";
import { espacioTiempo } from "./js/espacioTIempo.js";

// Definido un array de líneas del canvas
const lineas = [
  { x1: 150, y1: 100, x2: 150, y2: 200 }, // Línea arriba izquierda
  { x1: 500, y1: 100, x2: 500, y2: 200 }, // Línea arriba derecha
  { x1: 150, y1: 280, x2: 150, y2: 380 }, // Línea abajo izquierda
  { x1: 500, y1: 280, x2: 500, y2: 380 }, // Línea abajo derecha
  { x1: 325, y1: 120, x2: 325, y2: 200 }, // T arriba (vertical)
  { x1: 250, y1: 200, x2: 400, y2: 200 }, // T arriba (horizontal)
  { x1: 325, y1: 280, x2: 325, y2: 360 }, // T abajo (vertical)
  { x1: 250, y1: 280, x2: 400, y2: 280 }, // T abajo (horizontal)
];

let secondsElement = document.getElementById("secondsElement");
let ganador = document.getElementById("ganador");
const myCanvas = document.getElementById("myCanvas");
myCanvas.width = WIDTH;
myCanvas.height = HEIGHT;

// El contexto se refiere al "pincel" que proporciona el lienzo (canvas)
let context = myCanvas.getContext("2d");

// Ejemplo movimiento jugador

export const fondo = {
  color: "#000",
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
  speed: 15,
  color: "red",
};

export const balas1 = [];
export const balas2 = [];


function update() {
  requestAnimationFrame(render);
  requestAnimationFrame(update);

  for (let i = 0; i < balas1.length; i++) {
    const balaActual = balas1[i];
    if(balaActual.direccion == "u") {
      balaActual.y -= bala.speed;
    }
    if(balaActual.direccion == "d") {
      balaActual.y += bala.speed;
    }
    if(balaActual.direccion == "l") {
      balaActual.x -= bala.speed;
    }
    if(balaActual.direccion == "r") {
      balaActual.x += bala.speed;
    }

    context.fillStyle = bala.color;
    context.fillRect(balaActual.x, balaActual.y, bala.width, bala.height); 
    
    if (balaActual.y < 0) {
      balas1.splice(i, 1); 
      i--;
    }
  }

  for (let i = 0; i < balas2.length; i++) {
    const balaActual = balas2[i];
    if(balaActual.direccion == "u") {
      balaActual.y -= bala.speed;
    }
    if(balaActual.direccion == "d") {
      balaActual.y += bala.speed;
    }
    if(balaActual.direccion == "l") {
      balaActual.x -= bala.speed;
    }
    if(balaActual.direccion == "r") {
      balaActual.x += bala.speed;
    }

    context.fillStyle = bala.color;
    context.fillRect(balaActual.x, balaActual.y, bala.width, bala.height); 
    
    if (balaActual.y < 0) {
      balas2.splice(i, 1); 
      i--;
    }
  }
}
function render() {
  clearRect(context);
  // Dibuja el fondo en el lienzo
  context.fillStyle = fondo.color; // Configura el color de fondo
  context.fillRect(0, 0, WIDTH, HEIGHT); // Dibuja un rectángulo de fondo que cubre todo el lienzo
  drawWall();
  // Dibuja las balas
  for (let i = 0; i < balas1.length; i++) {
    const balaActual = balas1[i];

    context.fillStyle = bala.color;
    context.fillRect(balaActual.x, balaActual.y, bala.width, bala.height);
  }
  for (let i = 0; i < balas2.length; i++) {
    const balaActual = balas2[i];

    context.fillStyle = bala.color;
    context.fillRect(balaActual.x, balaActual.y, bala.width, bala.height);
  }
  drawImage(context, player1);
  drawImage(context, player2);

  detectarColisiones();
  detectarColisiones2();
}

function detectarColisiones() {
  for (let i = 0; i < balas1.length; i++) {
    const bala = balas1[i];
    for (let j = 0; j < lineas.length; j++) {
      const linea = lineas[j];
      const margenX = bala.width / 2; // Margen basado en el ancho de la bala
      const margenY = bala.height / 2; // Margen basado en la altura de la bala

      if (
        bala.x >= linea.x1 &&
        bala.x <= linea.x2 &&
        bala.y >= linea.y1 &&
        bala.y <= linea.y2
      ) {
        // Colisión detectada, elimina la bala
        balas1.splice(i, 1);
        i--; // Ajusta el índice para la siguiente iteración
        break; // Sal del bucle de líneas, ya que la bala ha colisionado
      }
    }
    if(bala.x >= player2.x &&
      bala.x <= (player2.x + player2.width) &&
      bala.y >= player2.y &&
      bala.y <= player2.y + player2.width
       ){
        balas1.pop();
        perderVida("j2", popup);
        break;
       }
  }
}

function detectarColisiones2() {
  for (let i = 0; i < balas2.length; i++) {
    const bala = balas2[i];
    for (let j = 0; j < lineas.length; j++) {
      const linea = lineas[j];
      const margen = 5; // Valor ficticio para aumentar el área de colisión

      if (
        bala.x + margen >= linea.x1 &&
        bala.x - margen <= linea.x2 &&
        bala.y + margen >= linea.y1 &&
        bala.y - margen <= linea.y2
      ) {
        // Colisión detectada, elimina la bala
        balas2.splice(i, 1);
        i--; // Ajusta el índice para la siguiente iteración
        break; // Sal del bucle de líneas, ya que la bala ha colisionado
      }
    }
    if(bala.x >= player1.x &&
      bala.x <= (player1.x + player1.width) &&
      bala.y >= player1.y &&
      bala.y <= player1.y + player1.width
       ){
        balas2.pop();
        perderVida("j1", popup);
        break;
       }
  }
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



function drawWall(){
  //linea arriba izquierda
context.beginPath();
context.moveTo(150, 100);
context.lineTo(150, 200);
context.strokeStyle = "blue";
context.lineWidth = 3;
context.stroke();
context.closePath();

//linea arriba derecha
context.beginPath();
context.moveTo(500, 100);
context.lineTo(500, 200);
context.strokeStyle = "blue";
context.lineWidth = 3;
context.stroke();
context.closePath();

//linea abajo izquierda
context.beginPath();
context.moveTo(150, 380);
context.lineTo(150, 280);
context.strokeStyle = "blue";
context.lineWidth = 3;
context.stroke();
context.closePath();

//linea abajo derecha
context.beginPath();
context.moveTo(500, 380);
context.lineTo(500, 280);
context.strokeStyle = "blue";
context.lineWidth = 3;
context.stroke();
context.closePath();

//T arriba
context.beginPath();
context.moveTo(325, 120);
context.lineTo(325, 200);
context.strokeStyle = "blue";
context.lineWidth = 3;
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(250, 200);
context.lineTo(400, 200);
context.strokeStyle = "blue";
context.lineWidth = 3;
context.stroke();
context.closePath();

//T abajo
context.beginPath();
context.moveTo(325, 280);
context.lineTo(325, 360);
context.strokeStyle = "blue";
context.lineWidth = 3;
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(250, 280);
context.lineTo(400, 280);
context.strokeStyle = "blue";
context.lineWidth = 3;
context.stroke();
context.closePath();
}