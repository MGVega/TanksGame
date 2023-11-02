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
  url: "./images/player.png",
  x: (WIDTH / 2) - 50,
  y: HEIGHT - 150,
  speed: 100
};

const player2 = {
  url: "./images/player.png",
  x: (WIDTH / 2) - 100,
  y: HEIGHT - 150,
  speed: 100
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
  }
  if (isRight) {
    player1.x += player1.speed * FACTOR;
  }
  if (isUp) {
    player1.y -= player1.speed * FACTOR;
  }
  if (isDown) {
    player1.y += player1.speed * FACTOR;
  }
  
  if (isLeft2) {
    player2.x -= player2.speed * FACTOR;
  }
  if (isRight2) {
    player2.x += player2.speed * FACTOR;
  }
  if (isUp2) {
    player2.y -= player2.speed * FACTOR;
  }
  if (isDown2) {
    player2.y += player2.speed * FACTOR;
  }
});


let wallpaper = new Image();
wallpaper.src = "./images/space-bg.png";
wallpaper.onload = function () {
  render();
  update();
};


