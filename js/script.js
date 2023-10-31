//Imports
import { drawImage } from "../modules/drawImage.js";
import { clearRect } from "../modules/clearRect.js";
import { WIDTH, HEIGHT, FACTOR } from "../modules/constants.js";

const body = document.body;
const tablero = document.querySelector('#tablero');
export const contador = document.getElementById('contador');

//Tamaño del tablero de juego
tablero.width = 800;
tablero.height = 800;

//Indicamos el contexto y tipo de tablero 2Dimensiones
let context = tablero.getContext("2d");

//El tanque de pruebas
const playerPrueba = {
  url: "../img/tankie.png",
  x: (WIDTH / 2) - 50,
  y: HEIGHT - 150,
  speed: 15
};

//Actualiza la página y se llama así mismo constantemente
function update() {
  console.log("update");
  requestAnimationFrame(render);
  requestAnimationFrame(update);
}

//Renderizar el juego: Limpiamos el contexto (tablero), dibujamos a los jugadores(drawImage)
function render() {
  clearRect(context); //Limpia y pinta fondo negro
  drawImage(context, playerPrueba); //Jugador 1
  //drawImage(context, player); //Jugador 2

}

addEventListener("keydown", (event) => {
  let isLeft = event.key === "ArrowLeft";
  let isRight = event.key === "ArrowRight";

  if (isLeft) {
    player.x -= player.speed * FACTOR;
  }
  if (isRight) {
    player.x += player.speed * FACTOR;
  }
});