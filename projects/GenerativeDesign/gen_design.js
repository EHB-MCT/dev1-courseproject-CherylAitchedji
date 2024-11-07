"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

//Linewidth
let n = 10;

// variabelen deklareren
//hoogte + breedte van container (scherm)
let width = canvas.width;
let height = canvas.height;
//creert random raduis
let random_r = Math.random() * 100;
//functieoproep
draw();

////////////////////////////Canvas//////////////////////////////
function draw() {
  // stijl voor cirkel
  // maakt zwart achtergrond met als arg breedte en hoogte van scherm
  context.fillRect(0, 0, width, height);
  context.strokeStyle = "white";
  context.lineWidth = n;

  //  generateBubbles(100, 200, 50);
  bubble(width / 2, height / 2, 200);
}

function generateBubbles() {}

////////////////////////////Bubble//////////////////////////////
function bubble(x, y, size) {
  //omtrek bubble
  Utils.strokeCircle(x, y, size);
  //neemt kleur tussen geel tot paars
  context.strokeStyle = Utils.hsla(Utils.randomNumber(130, 330), 100, 70, 70);
  //highlight 1
  Utils.strokeCircle(x, y, size - n);
  //highlight 2
  context.strokeStyle = Utils.hsla(Utils.randomNumber(50, 120), 100, 70, 70);
  Utils.strokeCircle(x, y, size - n * 2);
  //Spark
  context.fillStyle = "white";
  Utils.fillCircle(x + size / 2, y - size / 3, size / 5);
}
