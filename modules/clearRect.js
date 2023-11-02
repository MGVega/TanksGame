import { WIDTH, HEIGHT } from "./constants.js";

export const clearRect = (ctx, x = 0, y = 0, w = WIDTH, h = HEIGHT) => {
  ctx.fillStyle = "black";
  //ctx.drawImage(wallpaper, 0, 0, w, h);
  ctx.fillRect(x, y, w, h);
};

//MAPA
// Obtener el elemento canvas y su contexto 2D
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


// Definir el tamaño del mapa y el tamaño de las casillas
const mapaSize = 25; // Tamaño del mapa (ancho y alto en casillas)
const canvasWidth = 800;
const canvasHeight = 600;
const tileSize = canvasWidth / mapaSize; // Tamaño de las casillas en píxeles


// Establecer el tamaño del canvas en el HTML
canvas.width = canvasWidth;
canvas.height = canvasHeight;


// Cambiar el fondo a un color gris oscuro
ctx.fillStyle = "#333333";
ctx.fillRect(0, 0, canvasWidth, canvasHeight);


// Función para dibujar un rectángulo rotado
function drawRotatedRect(x, y, width, height, color, angle) {
    ctx.fillStyle = color;
    ctx.save(); // Guardar el estado actual del contexto
    ctx.translate(x + width / 2, y + height / 2); // Mover el origen al centro del rectángulo
    ctx.rotate(angle * (Math.PI / 180)); // Rotar en grados (convertidos a radianes)
    ctx.fillRect(-width / 2, -height / 2, width, height); // Dibujar el rectángulo
    ctx.restore(); // Restaurar el estado anterior del contexto
}


// Distribuir 6 paredes rotadas en el mapa en rojo neon
function distributeRotatedWalls() {
    // Pared 1 (rotada 45 grados)
    drawRotatedRect(4 * tileSize, 2 * tileSize, 3 * tileSize, 1 * tileSize, "#FF0000", -30);//arriba a la izq


    drawRotatedRect(4 * tileSize, 11 * tileSize, 3 * tileSize, 1 * tileSize, "#FF0000", 0);//L izquierda
    // Pared 2 (rotada -45 grados)
    drawRotatedRect(18 * tileSize, 1.5 * tileSize, 1 * tileSize, 3 * tileSize, "#FF0000", -50);//arriba a la derecha
    // Pared 3 (rotada 30 grados)
    drawRotatedRect(3 * tileSize, 9 * tileSize, 3 * tileSize, 1 * tileSize, "#FF0000", 90);
    // Pared 4 (rotada -30 grados)
    drawRotatedRect(18 * tileSize, 9 * tileSize, 3 * tileSize, 1 * tileSize, "#FF0000", 90);
    // Pared 5 (rotada 60 grados)
    drawRotatedRect(7 * tileSize, 13 * tileSize, 1 * tileSize, 3 * tileSize, "#FF0000", -45);
    // Pared 6 (rotada -60 grados)
    drawRotatedRect(11 * tileSize, 8 * tileSize, 2 * tileSize, 1 * tileSize, "#FF0000", 0);//la del centro


    drawRotatedRect(16 * tileSize, 14 * tileSize, 3 * tileSize, 1 * tileSize, "#FF0000", -45);
}


// Llamar a la función para distribuir las 6 paredes rotadas en el mapa en rojo neon
distributeRotatedWalls();




