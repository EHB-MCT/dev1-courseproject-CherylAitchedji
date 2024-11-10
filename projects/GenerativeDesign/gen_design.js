"use strict";
// importeren van script files
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

//hoogte + breedte van container (scherm)
let width = canvas.width;
let height = canvas.height;

//Linewidth voor bubble en sparkle
let n = 5;

//functieoproep heel canvas + bubbles + sparkles
draw();

////////////////////////////Canvas//////////////////////////////
function draw() {
  // maakt zwart achtergrond met als argumenten breedte en hoogte van scherm
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);
  //Linewidth bubble
  context.lineWidth = 5;

  //functieoproep
  generateBubbles();
  generateSparkles();
}

////////////////////////Bubble generator////////////////////////
function generateBubbles() {
  let amount = 35;
  let margin = 200;
  //loop om meerdere bubbles de genereren doorheen de scherm (+margin)
  for (let i = 0; i < amount; i++) {
    let x = Utils.randomNumber(margin / 2, width - margin / 2);
    let y = Utils.randomNumber(margin / 2, height - margin / 2);
    let r = Utils.randomNumber(20, 100);
    bubble(x, y, r);
  }
}
//////////////////////////Sparkle Generator/////////////////////////
function generateSparkles() {
  let amount = 10;
  for (let i = 0; i < amount; i++) {
    let x = i * 200;
    let y = height / 4 + Noise.perlinNoise(i) * 500;
    sparkle(x, y);
  }
}
////////////////////////////Bubble//////////////////////////////
function bubble(x, y, size) {
  //omtrek bubble
  context.strokeStyle = "white";
  Utils.strokeCircle(x, y, size);
  //neemt kleur over heel rgb spectrum
  context.strokeStyle = Utils.rgba(
    Utils.randomNumber(0, 255),
    Utils.randomNumber(0, 255),
    Utils.randomNumber(0, 255),
    75
  );
  //highlight 1
  Utils.strokeCircle(x, y, size - n);
  //highlight 2
  context.strokeStyle = Utils.rgba(
    Utils.randomNumber(0, 255),
    Utils.randomNumber(0, 255),
    Utils.randomNumber(0, 255),
    50
  );
  Utils.strokeCircle(x, y, size - n * 2);
  //Specular highlight
  context.fillStyle = "white";
  Utils.fillCircle(x + size / 2, y - size / 3, size / 5);
}

///////////////////////////////////SPARKLE///////////////////////////////////////
//teken sparkle op positie x, y
function sparkle(x, y) {
  context.strokeStyle = "white";
  Utils.drawLine(x, y, x + 50, y);
  Utils.drawLine(x + 25, y - 30, x + 25, y + 30);
  Utils.fillCircle(x + 25, y, 7);
}
