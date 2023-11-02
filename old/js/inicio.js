function crearLaser() {
    const laser = document.createElement("div");
    laser.className = "laser";
    document.getElementById("bolas-container").appendChild(laser);

    const left = Math.random() * window.innerWidth;
    const duracion = Math.random() * 4 + 2; // Duración aleatoria entre 2 y 6 segundos

    laser.style.left = `${left}px`;
    laser.style.animation = `disparar ${duracion}s linear forwards`;

    laser.addEventListener("animationend", () => {
        document.getElementById("bolas-container").removeChild(laser);
    });
}

setInterval(crearLaser, 2000);
