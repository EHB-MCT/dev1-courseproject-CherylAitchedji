"use strict";
// importeren van script files
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let width = canvas.width;
let height = canvas.height;

let n = 5;

//let bubbles = [];

setup();

////////////////////////////Canvas//////////////////////////////
function setup() {
  // maakt zwart achtergrond met als argumenten breedte en hoogte van scherm
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);
  //Linewidth bubble
  context.lineWidth = 5;

  bubble(500, 500, 200);
}

///////////////////////////////Bubble////////////////////////////
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
