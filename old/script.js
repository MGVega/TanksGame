import { drawImage } from "./modules/drawImage.js";
import { clearRect } from "./modules/clearRect.js";
import { WIDTH, HEIGHT, FACTOR } from "./modules/constants.js";

const myCanvas = document.getElementById("myCanvas");
myCanvas.width = WIDTH;
myCanvas.height = HEIGHT;

// El contexto se refiere al "pincel" que proporciona el lienzo (canvas)
let context = myCanvas.getContext("2d");

// Ejemplo movimiento jugador

const player = {
  url: "./images/player.png",
  x: (WIDTH / 2) - 50,
  y: HEIGHT - 150,
  speed: 15
};


function update() {
  console.log("update");
  requestAnimationFrame(render);
  requestAnimationFrame(update);
}

function render() {
  clearRect(context);
  drawImage(context, player);
}

addEventListener("keydown", (event) => {
  let isLeft = event.key === "ArrowLeft";
  let isRight = event.key === "ArrowRight";
  let isUp = event.key === "ArrowUp";
  let isDown = event.key === "ArrowDown";

  if (isLeft) {
    player.x -= player.speed * FACTOR;
  }
  if (isRight) {
    player.x += player.speed * FACTOR;
  }
  if (isUp) {
    player.y -= player.speed * FACTOR;
  }
  if (isDown) {
    player.y += player.speed * FACTOR;
  }
});


let wallpaper = new Image();
wallpaper.src = "./images/space-bg.png";
wallpaper.onload = function () {
  render();
  update();
};


