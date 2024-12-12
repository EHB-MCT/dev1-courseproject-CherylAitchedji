"use strict";
// importeren van script files
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let width = canvas.width;
let height = canvas.height;

let speed = 3;
let moving = true;

//let bubbles = [];

////////////////////////////Setup//////////////////////////////
//creeeren van loop met bubble object
function setup() {
  for (let i = 0; i < 35; i++) {
    let bubble = {
      x: Utils.randomNumber(0, width),
      y: Utils.randomNumber(0, height),
      size: Utils.randomNumber(20, 50),
      color: Utils.randomNumber(0, 255),
    };
  }
}

///////////////////////////////Bubble Object////////////////////////////
function bubble(x, y, size, hue) {
  let n = (context.lineWidth = 5);
  //omtrek bubble
  context.strokeStyle = "white";
  Utils.strokeCircle(x, y, size);
  //neemt kleur over heel rgb spectrum
  context.strokeStyle = Utils.hsla(hue, 100, 50, 75);
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

/////////////////////////////Animation///////////////////////////

draw();

function draw() {
  if (moving) {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    bubble(200, 200, 200, 100);
  }
  requestAnimationFrame(draw);
}

// bubble
// bubble randomizen
// bubble beweegt + bounced rond de scherm (container scherm)
// klik op bubble? verdwijnt
