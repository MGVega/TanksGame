import { GameObject } from "./gameObject.js";

export class Bullet extends GameObject {
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

        
    }
}
