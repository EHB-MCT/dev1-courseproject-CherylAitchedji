"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

//functieoproep
generateBubbles();

// functie definitie
function generateBubbles() {
  // variabelen deklareren (hoogte + breedte van container (scherm), random pos voor bubble)
  let width = canvas.width;
  let height = canvas.height;
  let rxpos = width * Math.random();
  let rypos = height * Math.random();

  // maakt zwart achtergrond met als arg breedte en hoogte van scherm
  context.fillRect(0, 0, width, height);

  // tekent circle
  context.strokeStyle = "white";
  context.lineWidth = 7;
  Utils.strokeEllipse(rxpos, rypos, 200, 200);
}
