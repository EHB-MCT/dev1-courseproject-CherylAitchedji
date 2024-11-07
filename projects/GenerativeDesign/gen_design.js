"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

// variabelen deklareren
//hoogte + breedte van container (scherm)
let width = canvas.width;
let height = canvas.height;
//Linewidth
let n = 7;

//functieoproep
draw();

////////////////////////////Canvas//////////////////////////////
function draw() {
  // stijl voor cirkel
  // maakt zwart achtergrond met als arg breedte en hoogte van scherm
  context.fillRect(0, 0, width, height);
  context.strokeStyle = "white";
  context.lineWidth = n;

  //functieoproep
  generateBubbles();
}

////////////////////////Bubble generator////////////////////////
function generateBubbles() {
  let amount = 35;
  let r = Utils.randomNumber(50, 100);
  let margin = 200;

  //loop om meerdere bubbles de genereren doorheen de scherm (+margin)
  for (let i = 0; i < amount; i++) {
    bubble(
      (width - margin) * Math.random() + margin / 2,
      (height - margin) * Math.random() + margin / 2,
      r
    );
  }
}
////////////////////////////Bubble//////////////////////////////
function bubble(x, y, size) {
  //omtrek bubble
  context.strokeStyle = "white";
  Utils.strokeCircle(x, y, size);
  //neemt kleur tussen geel tot paars
  context.strokeStyle = Utils.hsla(Utils.randomNumber(180, 300), 100, 50, 70);
  //highlight 1
  Utils.strokeCircle(x, y, size - n);
  //highlight 2
  context.strokeStyle = Utils.hsla(Utils.randomNumber(50, 120), 100, 50, 70);
  Utils.strokeCircle(x, y, size - n * 2);
  //Spark
  context.fillStyle = "white";
  Utils.fillCircle(x + size / 2, y - size / 3, size / 5);
}
