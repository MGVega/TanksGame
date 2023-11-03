import { drawImage } from "./modules/drawImage.js";
import { clearRect } from "./modules/clearRect.js";
import { WIDTH, HEIGHT, FACTOR, X_IZQUIERDA, X_DERECHA, Y_ARRIBA, Y_ABAJO } from "./modules/constants.js";
import {  countdown } from "./old/js/contador.js";

let secondsElement = document.getElementById("secondsElement");

const myCanvas = document.getElementById("myCanvas");
myCanvas.width = WIDTH;
myCanvas.height = HEIGHT;

// El contexto se refiere al "pincel" que proporciona el lienzo (canvas)
let context = myCanvas.getContext("2d");

// Ejemplo movimiento jugador

const player1 = {
  url: "./images/1abajo.png",
  x: (WIDTH / 2) - (-210),
  y: HEIGHT - 470,
  speed: 200
};

const player2 = {
  url: "./images/2arriba.png",
  x: (WIDTH / 2) - 310,
  y: HEIGHT - 110,
  speed: 200
};


function update() {
  console.log("update");
  requestAnimationFrame(render);
  requestAnimationFrame(update);
}

function render() {
  clearRect(context);
  drawImage(context, player1);
  drawImage(context, player2);
}

addEventListener("keydown", (event) => {
  let isLeft = event.key === "ArrowLeft";
  let isRight = event.key === "ArrowRight";
  let isUp = event.key === "ArrowUp";
  let isDown = event.key === "ArrowDown";
  
  let isLeft2 = event.key.toLowerCase() === "a";
  let isRight2 = event.key.toLowerCase() === "d";
  let isUp2 = event.key.toLowerCase() === "w";
  let isDown2 = event.key.toLowerCase() === "s";

  if (isLeft && player1.x > X_IZQUIERDA) {
    player1.x -= player1.speed * FACTOR;
    player1.url = "./images/1izquierda.png";
  }
  if (isRight &&  player1.x < X_DERECHA - 100) {
    player1.x += player1.speed * FACTOR;
    player1.url = "./images/1derecha.png";
  }
  if (isUp && player1.y > Y_ARRIBA) {
    player1.y -= player1.speed * FACTOR;
    player1.url = "./images/1arriba.png";
  }
  if (isDown && player1.y < Y_ABAJO - 100) {
    player1.y += player1.speed * FACTOR;
    player1.url = "./images/1abajo.png";
  }
  
  if (isLeft2 && player2.x > X_IZQUIERDA) {
    player2.x -= player2.speed * FACTOR;
    player2.url = "./images/2izquierda.png";
  }
  if (isRight2 && player2.x < X_DERECHA - 100) {
    player2.x += player2.speed * FACTOR;
    player2.url = "./images/2derecha.png";
  }
  if (isUp2 && player2.y > Y_ARRIBA) {
    player2.y -= player2.speed * FACTOR;
    player2.url = "./images/2arriba.png";
  }
  if (isDown2 && player2.y < Y_ABAJO - 100) {
    player2.y += player2.speed * FACTOR;
    player2.url = "./images/2abajo.png";
  }
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
