// Obtener el elemento canvas y su contexto 2D
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Definir el tamaño del mapa y el tamaño de las casillas
const mapaSize = 50; // Tamaño del mapa (ancho y alto en casillas)
const canvasWidth = 800;
const canvasHeight = 600 + 50; // Ajustar la altura del canvas para incluir el borde inferior
const tileSize = canvasWidth / mapaSize; // Tamaño de las casillas en píxeles

// Establecer el tamaño del canvas en el HTML
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Crear un mapa con paredes en horizontal y vertical
const mapa = [];
for (let y = 0; y < mapaSize; y++) {
    const row = [];
    for (let x = 0; x < mapaSize; x++) {
        // Colocar paredes en los bordes del mapa
        if (x === 0 || y === 0 || x === mapaSize - 1 || y === mapaSize - 1) {
            row.push(1);
        } else if (x % 7 === 0 || y % 7 === 0) { // Poner paredes en las posiciones múltiplo de 7
            row.push(1);
        } else {
            row.push(0);
        }
    }
    mapa.push(row);
}

// Función para dibujar un triángulo mirando al centro
function drawCenteredTriangle(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x + size / 2, y + size / 2);
    ctx.closePath();
    ctx.fill();
}

// Dibujar 4 triángulos grandes en las esquinas mirando al centro
const centerX = Math.floor(mapaSize / 2) * tileSize;
const centerY = Math.floor(mapaSize / 2) * tileSize;
const triangleSize = 100; // Tamaño de los triángulos
const neonColor = "#FF00FF"; // Color neon
drawCenteredTriangle(0, 0, triangleSize, neonColor); // Esquina superior izquierda
drawCenteredTriangle(canvasWidth - triangleSize, 0, triangleSize, neonColor); // Esquina superior derecha
drawCenteredTriangle(0, canvasHeight - triangleSize, triangleSize, neonColor); // Esquina inferior izquierda
drawCenteredTriangle(canvasWidth - triangleSize, canvasHeight - triangleSize, triangleSize, neonColor); // Esquina inferior derecha

// Dibujar formas adicionales
const additionalShapesSize = 54; // Tamaño de las formas adicionales
const additionalShapesColor = "#FFFF00"; // Color neon
drawCenteredTriangle(centerX, centerY - triangleSize - additionalShapesSize / 2, additionalShapesSize, additionalShapesColor); // Forma en el centro superior
drawCenteredTriangle(centerX, centerY + triangleSize + additionalShapesSize / 2, additionalShapesSize, additionalShapesColor); // Forma en el centro inferior
drawCenteredTriangle(centerX - triangleSize - additionalShapesSize / 2, centerY, additionalShapesSize, additionalShapesColor); // Forma en el centro izquierda
drawCenteredTriangle(centerX + triangleSize + additionalShapesSize / 2, centerY, additionalShapesSize, additionalShapesColor); // Forma en el centro derecha
