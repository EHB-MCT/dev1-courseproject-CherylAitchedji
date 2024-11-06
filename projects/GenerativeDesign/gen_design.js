"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

// variabelen deklareren
//hoogte + breedte van container (scherm)
let width = canvas.width;
let height = canvas.height;
//creert random raduis
let random_r = Math.random() * 100;
//functieoproep
draw();

function draw() {
  // stijl voor cirkel
  // maakt zwart achtergrond met als arg breedte en hoogte van scherm
  context.fillRect(0, 0, width, height);
  context.strokeStyle = "white";
  context.lineWidth = 7;
  generateBubble();
}

// functie definitie van generateBubble
function generateBubble() {
  // aantal cirkels
  let n = 50;
  //Teken cirkels
  for (let i = 0; i < n; i++) {
    //geeft elk cirkel een kleur tussen geel tot paars
    context.fillStyle = Utils.hsla(Utils.randomNumber(60, 300), 100, 70, 70);
    Utils.fillAndStrokeCircle(
      width * Math.random(),
      height * Math.random(),
      Math.random() * 100
    );
  }
}
