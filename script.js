import { drawImage } from "./modules/drawImage.js";
import { clearRect } from "./modules/clearRect.js";
import { WIDTH, HEIGHT, FACTOR } from "./modules/constants.js";

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
  
  let isLeft2 = event.key === "a";
  let isRight2 = event.key === "d";
  let isUp2 = event.key === "w";
  let isDown2 = event.key === "s";

  if (isLeft) {
    player1.x -= player1.speed * FACTOR;
    player1.url = "./images/1izquierda.png";
  }
  if (isRight) {
    player1.x += player1.speed * FACTOR;
    player1.url = "./images/1derecha.png";
  }
  if (isUp) {
    player1.y -= player1.speed * FACTOR;
    player1.url = "./images/1arriba.png";
  }
  if (isDown) {
    player1.y += player1.speed * FACTOR;
    player1.url = "./images/1abajo.png";
  }
  
  if (isLeft2) {
    player2.x -= player2.speed * FACTOR;
    player2.url = "./images/2izquierda.png";
  }
  if (isRight2) {
    player2.x += player2.speed * FACTOR;
    player2.url = "./images/2derecha.png";
  }
  if (isUp2) {
    player2.y -= player2.speed * FACTOR;
    player2.url = "./images/2arriba.png";
  }
  if (isDown2) {
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


