"use strict";
// importeren van script files
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let width = canvas.width;
let height = canvas.height;

let bubbles = [];
let moving = true;
setup();
draw();

////////////////////////////Setup//////////////////////////////
//creeeren van loop met bubble object
//pusht bubble object in array (bubbles)
function setup() {
  let amount = 25;
  let margin = 50;
  for (let i = 0; i < amount; i++) {
    let bubble = {
      x: Utils.randomNumber(margin, width - margin),
      y: Utils.randomNumber(margin, height - margin),
      size: Utils.randomNumber(20, 100),
      hue1: Utils.randomNumber(0, 360),
      hue2: Utils.randomNumber(0, 360),
      hSpeed: Utils.randomNumber(1, 3),
      vSpeed: Utils.randomNumber(1, 3),
    };
    bubbles.push(bubble);
  }
}

/////////////////////////////Animation///////////////////////////

function draw() {
  if (moving) {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    console.log(bubbles);
    for (let i = 0; i < bubbles.length; i++) {
      let bubble = bubbles[i];

      drawBubble(bubble.x, bubble.y, bubble.size, bubble.hue1, bubble.hue2);
      bubble.x += bubble.hSpeed;
      bubble.y += bubble.vSpeed;
      if (bubble.x >= width - bubble.size || bubble.x <= bubble.size) {
        bubble.hSpeed *= -1;
      }
      if (bubble.y >= height - bubble.size || bubble.y <= bubble.size) {
        bubble.vSpeed *= -1;
      }
      bubbles[i] = bubble;
    }
  }
  requestAnimationFrame(draw);
}

///////////////////////////////Bubble Object////////////////////////////
function drawBubble(x, y, size, hue1, hue2) {
  let n = (context.lineWidth = 5);
  //omtrek bubble
  context.strokeStyle = "white";
  Utils.strokeCircle(x, y, size);
  //neemt kleur over heel rgb spectrum
  context.strokeStyle = Utils.hsla(hue1, 50, 50, 75);
  //highlight 1
  Utils.strokeCircle(x, y, size - n);
  //highlight 2
  context.strokeStyle = Utils.hsla(hue2, 50, 50, 75);
  Utils.strokeCircle(x, y, size - n * 2);
  //Specular highlight
  context.fillStyle = "white";
  Utils.fillCircle(x + size / 2, y - size / 3, size / 5);
}

// klik op bubble? verdwijnt
//score
//signature
