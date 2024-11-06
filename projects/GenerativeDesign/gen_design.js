"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

//functieoproep
generateBubbles();

// functie definitie
function generateBubbles() {
  // variabelen deklareren
  //hoogte + breedte van container (scherm)
  let width = canvas.width;
  let height = canvas.height;
  //creeert random pos x en y
  let xpos = width * Math.random();
  let ypos = height * Math.random();
  //creert random raduis tussen ... en....
  let random_r = Math.random() * 100;

  // maakt zwart achtergrond met als arg breedte en hoogte van scherm
  context.fillRect(0, 0, width, height);

  // tekent circle
  context.strokeStyle = "white";
  context.lineWidth = 7;
  Utils.strokeEllipse(xpos, ypos / 2, random_r, random_r);
}
