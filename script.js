//Imports
import { drawImage } from "./modules/drawImage.js";
import { clearRect } from "./modules/clearRect.js";
import { WIDTH, HEIGHT, FACTOR } from "./modules/constants.js";

const body = document.body;
const tablero = document.querySelector('#tablero');
export const contador = document.getElementById('#contador');

//Tamaño del tablero de juego
tablero.width = 800;
tablero.height = 800;

//Indicamos el contexto y tipo de tablero 2Dimensiones
let context = tablero.getContext("2d");

//Renderizar el juego: Limpiamos el contexto (tablero), dibujamos a los jugadores(drawImage)
function render() {
    clearRect(context); //Limpia
    //drawImage(context, player); //Jugador 1
    //drawImage(context, player); //Jugador 2

  }
