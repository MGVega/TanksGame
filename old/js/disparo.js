import { GameObject } from "./gameObject.js";
import { setCustomProperty } from "./updateProperties.js";

export class Disparo extends GameObject {
    bulletElement;
    velocity = 5;
    timeLife = 1500;

    constructor(x, y, width, height) {
        super (x, y, width, height)
        this.setElement();
    }

    setElement() {
        this.bulletElement = document.createElement("div");
        this.bulletElement.classList.add("bullet");

        setCustomProperty(this.bulletElement, "left", this.x + "px");
        setCustomProperty(this.bulletElement, "bottom", this.y + "px");
    
        setTimeout(() => {
            this.bulletElement.remove();
        }, this.timeLife);
    }

    getElement() {
        return this.bulletElement;
    }

    updateBullet(walls, players) {
        this.y += this.velocity;
        setCustomProperty(this.bulletElement, "bottom", this.y + "px");
      
        // Detección de colisiones con las paredes
        for (const wall of walls) {
          if (collisionDetected(this, wall)) {
            this.bulletElement.remove();
            return; // Rompe el bucle si se detecta una colisión
          }
        }
      
        // Detección de colisiones con otros jugadores
        for (const player of players) {
          if (collisionDetected(this, player)) {
            this.bulletElement.remove();
            return; // Rompe el bucle si se detecta una colisión
          }
        }
      }
      

}
