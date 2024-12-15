"use strict";
// importeren van script files
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

//scherm breedte en hoogte
let width = canvas.width;
let height = canvas.height;

//lege array om bubbles in te plaatsen
let bubbles = [];
let moving = true;
let amountBubbles = 25;

//Mouse event (op muis drukken)
window.onmousedown = click;

//functie oproepen
setup();
draw();

///////////////////////////////////////////////////////////////////////////Setup///////////////////////////////////////////////////////////////////////
//creeeren van loop met bubble object
//pusht bubble object in array (bubbles)
function setup() {
  let margin = 50;
  for (let i = 0; i < amountBubbles; i++) {
    let bubble = {
      x: Utils.randomNumber(margin, width - margin),
      y: Utils.randomNumber(margin, height - margin),
      size: Utils.randomNumber(50, 150),
      hue1: Utils.randomNumber(0, 360),
      hue2: Utils.randomNumber(0, 360),
      hSpeed: Utils.randomNumber(1, 7),
      vSpeed: Utils.randomNumber(1, 7),
      popped: false,
      changed: false,
    };
    bubbles.push(bubble);
  }
}

//////////////////////////////////////////////////////////////////Animation/////////////////////////////////////////////////////////////////

function draw() {
  //teken zwarte canvas
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);
  //teken space invader
  signature();
  if (moving) {
    //ittereert door array, tekent bubble per positie van array
    for (let i = 0; i < bubbles.length; i++) {
      let bubble = bubbles[i];
      drawBubble(bubble);
      //bubble beweegt door positie + snelheid
      bubble.x += bubble.hSpeed;
      bubble.y += bubble.vSpeed;
      if (bubble.x >= width - bubble.size || bubble.x <= bubble.size) {
        bubble.hSpeed *= -1;
      }
      if (bubble.y >= height - bubble.size || bubble.y <= bubble.size) {
        bubble.vSpeed *= -1;
      }
    }
  }
  requestAnimationFrame(draw);
}

/////////////////////////////////////////////////////////////Bubble Object/////////////////////////////////////////////////////////////////
function drawBubble(bubble) {
  let n = (context.lineWidth = 5);

  //als bubble.popped true is (op bubble clickt), teken een sparkle in plaats van bubble
  if (bubble.popped) {
    //Utils.strokeCircle(bubble.x, bubble.y, 0);
    context.strokeStyle = Utils.hsla(Utils.randomNumber(0, 300), 100, 90, 75);
    Utils.drawLine(bubble.x, bubble.y, bubble.x + 50, bubble.y);
    Utils.drawLine(bubble.x + 25, bubble.y - 30, bubble.x + 25, bubble.y + 30);
    Utils.fillCircle(bubble.x + 25, bubble.y, 7);
    //als bubble.popped false is (niet gepopped), teken een bubble
  } else {
    //omtrek bubble
    context.strokeStyle = "white";
    Utils.strokeCircle(bubble.x, bubble.y, bubble.size);
    //neemt kleur over heel rgb spectrum
    context.strokeStyle = Utils.hsla(bubble.hue1, 50, 50, 75);
    //highlight 1
    Utils.strokeCircle(bubble.x, bubble.y, bubble.size - n);
    //highlight 2
    context.strokeStyle = Utils.hsla(bubble.hue2, 50, 50, 75);
    Utils.strokeCircle(bubble.x, bubble.y, bubble.size - n * 2);
    //Specular highlight
    context.fillStyle = "white";
    Utils.fillCircle(
      bubble.x + bubble.size / 2,
      bubble.y - bubble.size / 3,
      bubble.size / 5
    );
  }
}
//////////////////////////////////////////////////////////////////////////MOUSE EVENT///////////////////////////////////////////////////////////////////////////////////
/**
 * @param {MouseEvent} e
 */
function click(e) {
  let hitbox = 75;
  // vergelijk afstanden van elk bubble met geclickte plaats (van muis), als de afstand kleiner is dan de hitbox, wordt bubble.popped op true gezet
  for (let i = 0; i < bubbles.length; i++) {
    let distance = Utils.calculateDistance(
      e.pageX,
      e.pageY,
      bubbles[i].x,
      bubbles[i].y
    );
    if (distance < hitbox) {
      bubbles[i].popped = true;
    }
  }
}
////////////////////////////////////////////////////////////////////SIGNATURE///////////////////////////////////////////////////////////////////////////////////
function signature() {
  //kleur
  context.fillStyle = "#d468c1";
  // space Invader (links naar rechts)
  context.fillRect(1400, 750, 50, 150);
  context.fillRect(1450, 650, 50, 200);
  context.fillRect(1500, 650, 50, 50);
  context.fillRect(1500, 800, 50, 100);
  context.fillRect(1550, 650, 50, 200);
  context.fillRect(1600, 750, 50, 150);
}
