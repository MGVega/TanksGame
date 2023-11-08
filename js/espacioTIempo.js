
import { WIDTH, HEIGHT, FACTOR, X_IZQUIERDA, X_DERECHA, Y_ARRIBA, Y_ABAJO } from "../modules/constants.js";
import { player1, player2, bala, balas1, balas2 } from "../script.js";

export function espacioTiempo(event) {
 
  let isLeft = event.key === "ArrowLeft";
  let isRight = event.key === "ArrowRight";
  let isUp = event.key === "ArrowUp";
  let isDown = event.key === "ArrowDown";
  
  let isLeft2 = event.key.toLowerCase() === "a";
  let isRight2 = event.key.toLowerCase() === "d";
  let isUp2 = event.key.toLowerCase() === "w";
  let isDown2 = event.key.toLowerCase() === "s";


  //PLAYER 1
  if (
    //Muro arriba derecha
    !(
        (isLeft && player1.x == 490 && player1.y == 50) ||
        (isLeft && player1.x == 490 && player1.y == 90) ||
        (isLeft && player1.x == 490 && player1.y == 130) ||
        (isRight && player1.x == 410 && player1.y == 50) ||
        (isRight && player1.x == 410 && player1.y == 90) ||
        (isRight && player1.x == 410 && player1.y == 130) ||
        (isDown && player1.x == 450 && player1.y == 10) ||
        (isUp && player1.x == 450 && player1.y == 170)
    ) && 
    //Muro abajo derecha
    !(
      (isLeft && player1.x == 490 && player1.y == 250) ||
      (isLeft && player1.x == 490 && player1.y == 290) ||
      (isLeft && player1.x == 490 && player1.y == 330) ||
      (isRight && player1.x == 410 && player1.y == 250) ||
      (isRight && player1.x == 410 && player1.y == 290) ||
      (isRight && player1.x == 410 && player1.y == 330) ||
      (isDown && player1.x == 450 && player1.y == 210) ||
      (isUp && player1.x == 450 && player1.y == 370)
    )&&
    //Muro arriba izquierda
    !(
      (isLeft && player1.x == 130 && player1.y == 50) ||
      (isLeft && player1.x == 130 && player1.y == 90) ||
      (isLeft && player1.x == 130 && player1.y == 130) ||
      (isRight && player1.x == 50 && player1.y == 50) ||
      (isRight && player1.x == 50 && player1.y == 90) ||
      (isRight && player1.x == 50 && player1.y == 130) ||
      (isDown && player1.x == 90 && player1.y == 10) ||
      (isUp && player1.x == 90 && player1.y == 170)
    )&&
    //Muro abajo izquierda
    !(
      (isLeft && player1.x == 130 && player1.y == 250) ||
      (isLeft && player1.x == 130 && player1.y == 290) ||
      (isLeft && player1.x == 130 && player1.y == 330) ||
      (isRight && player1.x == 50 && player1.y == 250) ||
      (isRight && player1.x == 50 && player1.y == 290) ||
      (isRight && player1.x == 50 && player1.y == 330) ||
      (isDown && player1.x == 90 && player1.y == 210) ||
      (isUp && player1.x == 90 && player1.y == 370)
    )&&
    //Muro arriba centro
    !(
      (isLeft && player1.x == 290 && player1.y == 90) ||
      (isLeft && player1.x == 290 && player1.y == 130) ||

      (isRight && player1.x == 250 && player1.y == 90) ||
      (isRight && player1.x == 250 && player1.y == 130) ||
      
      (isDown && player1.x == 330 && player1.y == 130) ||
      (isDown && player1.x == 290 && player1.y == 130) ||
      (isDown && player1.x == 250 && player1.y == 130) ||
      (isDown && player1.x == 210 && player1.y == 130) ||
      
      (isUp && player1.x == 210 && player1.y == 170) ||
      (isUp && player1.x == 250 && player1.y == 170) ||
      (isUp && player1.x == 290 && player1.y == 170) ||
      (isUp && player1.x == 330 && player1.y == 170)
    )&&
    //Muro abajo centro
    !(
      (isLeft && player1.x == 290 && player1.y == 250) ||
      (isLeft && player1.x == 290 && player1.y == 290) ||

      (isRight && player1.x == 250 && player1.y == 250) ||
      (isRight && player1.x == 250 && player1.y == 290) ||
      
      (isDown && player1.x == 330 && player1.y == 210) ||
      (isDown && player1.x == 290 && player1.y == 210) ||
      (isDown && player1.x == 250 && player1.y == 210) ||
      (isDown && player1.x == 210 && player1.y == 210) ||
      
      (isUp && player1.x == 210 && player1.y == 250) ||
      (isUp && player1.x == 250 && player1.y == 250) ||
      (isUp && player1.x == 290 && player1.y == 250) ||
      (isUp && player1.x == 330 && player1.y == 250)
    )
) {
  if (isLeft && player1.x > X_IZQUIERDA ) {
    player1.direccion= "l";
    player1.x -= player1.speed * FACTOR;
    player1.url = "./images/1izquierda.png";
  }
  if (isRight &&  player1.x < X_DERECHA - 100) {
    player1.direccion="r";
    player1.x += player1.speed * FACTOR;
    player1.url = "./images/1derecha.png";
  }
  if (isUp && player1.y > Y_ARRIBA) {
    player1.direccion="u";
    player1.y -= player1.speed * FACTOR;
    player1.url = "./images/1arriba.png";
  }
  if (isDown && player1.y < Y_ABAJO - 100) {
    player1.direccion="d";
    player1.y += player1.speed * FACTOR;
    player1.url = "./images/1abajo.png";
  }
}


// PLAYER 2
if (
  //Muro arriba derecha
  !(
      (isLeft2 && player2.x == 490 && player2.y == 50) ||
      (isLeft2 && player2.x == 490 && player2.y == 90) ||
      (isLeft2 && player2.x == 490 && player2.y == 130) ||
      (isRight2 && player2.x == 410 && player2.y == 50) ||
      (isRight2 && player2.x == 410 && player2.y == 90) ||
      (isRight2 && player2.x == 410 && player2.y == 130) ||
      (isDown2 && player2.x == 450 && player2.y == 10) ||
      (isUp2 && player2.x == 450 && player2.y == 170)
  ) && 
  //Muro abajo derecha
  !(
    (isLeft2 && player2.x == 490 && player2.y == 250) ||
    (isLeft2 && player2.x == 490 && player2.y == 290) ||
    (isLeft2 && player2.x == 490 && player2.y == 330) ||
    (isRight2 && player2.x == 410 && player2.y == 250) ||
    (isRight2 && player2.x == 410 && player2.y == 290) ||
    (isRight2 && player2.x == 410 && player2.y == 330) ||
    (isDown2 && player2.x == 450 && player2.y == 210) ||
    (isUp2 && player2.x == 450 && player2.y == 370)
  )&&
  //Muro arriba izquierda
  !(
    (isLeft2 && player2.x == 130 && player2.y == 50) ||
    (isLeft2 && player2.x == 130 && player2.y == 90) ||
    (isLeft2 && player2.x == 130 && player2.y == 130) ||
    (isRight2 && player2.x == 50 && player2.y == 50) ||
    (isRight2 && player2.x == 50 && player2.y == 90) ||
    (isRight2 && player2.x == 50 && player2.y == 130) ||
    (isDown2 && player2.x == 90 && player2.y == 10) ||
    (isUp2 && player2.x == 90 && player2.y == 170)
  )&&
  //Muro abajo izquierda
  !(
    (isLeft2 && player2.x == 130 && player2.y == 250) ||
    (isLeft2 && player2.x == 130 && player2.y == 290) ||
    (isLeft2 && player2.x == 130 && player2.y == 330) ||
    (isRight2 && player2.x == 50 && player2.y == 250) ||
    (isRight2 && player2.x == 50 && player2.y == 290) ||
    (isRight2 && player2.x == 50 && player2.y == 330) ||
    (isDown2 && player2.x == 90 && player2.y == 210) ||
    (isUp2 && player2.x == 90 && player2.y == 370)
  )&&
  //Muro arriba centro
  !(
    (isLeft2 && player2.x == 290 && player2.y == 90) ||
    (isLeft2 && player2.x == 290 && player2.y == 130) ||

    (isRight2 && player2.x == 250 && player2.y == 90) ||
    (isRight2 && player2.x == 250 && player2.y == 130) ||
    
    (isDown2 && player2.x == 330 && player2.y == 130) ||
    (isDown2 && player2.x == 290 && player2.y == 130) ||
    (isDown2 && player2.x == 250 && player2.y == 130) ||
    (isDown2 && player2.x == 210 && player2.y == 130) ||
    
    (isUp2 && player2.x == 210 && player2.y == 170) ||
    (isUp2 && player2.x == 250 && player2.y == 170) ||
    (isUp2 && player2.x == 290 && player2.y == 170) ||
    (isUp2 && player2.x == 330 && player2.y == 170)
  )&&
  //Muro abajo centro
  !(
    (isLeft2 && player2.x == 290 && player2.y == 250) ||
    (isLeft2 && player2.x == 290 && player2.y == 290) ||

    (isRight2 && player2.x == 250 && player2.y == 250) ||
    (isRight2 && player2.x == 250 && player2.y == 290) ||
    
    (isDown2 && player2.x == 330 && player2.y == 210) ||
    (isDown2 && player2.x == 290 && player2.y == 210) ||
    (isDown2 && player2.x == 250 && player2.y == 210) ||
    (isDown2 && player2.x == 210 && player2.y == 210) ||
    
    (isUp2 && player2.x == 210 && player2.y == 250) ||
    (isUp2 && player2.x == 250 && player2.y == 250) ||
    (isUp2 && player2.x == 290 && player2.y == 250) ||
    (isUp2 && player2.x == 330 && player2.y == 250)
  )
) {
  if (isLeft2 && player2.x > X_IZQUIERDA) {
    player2.direccion="l";
    player2.x -= player2.speed * FACTOR;
    player2.url = "./images/2izquierda.png";
  }
  if (isRight2 && player2.x < X_DERECHA - 100) {
    player2.direccion="r";
    player2.x += player2.speed * FACTOR;
    player2.url = "./images/2derecha.png";
  }
  if (isUp2 && player2.y > Y_ARRIBA) {
    player2.direccion="u";
    player2.y -= player2.speed * FACTOR;
    player2.url = "./images/2arriba.png";
  }
  if (isDown2 && player2.y < Y_ABAJO - 100) {
    player2.direccion="d";
    player2.y += player2.speed * FACTOR;
    player2.url = "./images/2abajo.png";
  }

}
if ((event.key === "z") && player1) {

  balas1.pop();
};

if ((event.key === "z") && player2) {

balas2.pop();
};



if ((event.key === "*") && player1) {

  const nuevaBala = {
    x: player1.x + (player1.width / 2) - (bala.width / 2), 
    y: player1.y + (player1.width / 2) - (bala.width / 2),
    direccion: player1.direccion
  };

  balas1.push(nuevaBala); 
}

if ((event.key === "v") && player2) {

  const nuevaBala = {
    x: player2.x + (player2.width / 2) - (bala.width / 2), 
    y: player2.y + (player2.width / 2) - (bala.width / 2),
    direccion: player2.direccion
  };

  balas2.push(nuevaBala); 
}
  
}