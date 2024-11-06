//oproep functie
signature();

//functie definitie
function signature() {
  let canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let context = canvas.getContext("2d");

  //achtergrond
  context.fillStyle = "black";

  context.fillRect(50, 50, 300, 300);

  //spaceinvader (links-rechts)
  context.fillStyle = "#d468c1";

  context.fillRect(75, 175, 50, 150);
  context.fillRect(125, 75, 50, 200);
  context.fillRect(175, 75, 50, 50);
  context.fillRect(175, 225, 50, 100);
  context.fillRect(225, 75, 50, 200);
  context.fillRect(275, 175, 50, 150);
}
