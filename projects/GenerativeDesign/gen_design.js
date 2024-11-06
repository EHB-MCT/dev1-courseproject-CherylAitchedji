"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

//functieoproep
generateBubbles();

//functie definitie
function generateBubbles() {
  //maakt zwart achtergrond met als arg breedte en hoogte van scherm
  let width = canvas.width;
  let height = canvas.height;
  context.fillRect(0, 0, width, height);

  //tekent bubble
  context.fillStyle = "white";
  Utils.fillAndStrokeCircle(width / 2, height / 2, 20);
}
