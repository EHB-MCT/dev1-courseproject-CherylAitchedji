"use strict";
import context from "./context.js";

///////////////////* FUNCTIES KLEUR/////////////////////////////

/** function that formats an hsl value based on parameters
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 */
export function hsl(h, s, l) {
  return "hsl(" + h + "," + s + "%," + l + "%)";
}

/** function that formats an hsla value based on parameters
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 * @param {number} a the alpha value (opacity) in percentage
 */
export function hsla(h, s, l, a) {
  return "hsl(" + h + "," + s + "%," + l + "%," + a + "%)";
}

/** function that formats an rgb value based on parameters
 * @param {number} r red (8bits, number between 0-255)
 * @param {number} g green (8bits, number between 0-255)
 * @param {number} b blue (8bits, number between 0-255)
 */
export function rgb(r, g, b) {
  return "rgb(" + r + "," + g + "," + b + ")";
}

/** function that formats an rgba value based on parameters
 * @param {number} r red (8bits, number between 0-255)
 * @param {number} g green (8bits, number between 0-255)
 * @param {number} b blue (8bits, number between 0-255)
 * @param {number} a the alpha value (opacity) in percentage
 */

export function rgba(r, g, b, a) {
  return "rgb(" + r + "," + g + "," + b + "," + a + "%)";
}
/**
 *
 * @param {*} x x coordinate of the center of the ellipse
 * @param {*} y y coordinate of the center of the ellipse
 * @param {*} rX horizontal raduis of the ellipse (half of the width)
 * @param {*} rY vertical raduis of the ellipse (half of the height)
 */

///////////////////* FUNCTIES VOOR FIGUREN/////////////////////////////

export function fillEllipse(x, y, rX, rY) {
  context.beginPath();
  context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
  context.fill();
}

export function fillCircle(x, y, r) {
  context.beginPath();
  context.ellipse(x, y, r, r, 0, 0, Math.PI * 2);
  context.fill();
}

/**
 * Draws a stroked ellipse of which the center is at a x, y
 * @param {*} x x coordinate of the center of the ellipse
 * @param {*} y y coordinate of the center of the ellipse
 * @param {*} rX horizontal radius of the ellipse (half of the width)
 * @param {*} rY vertical radius of the ellipse (half of the height)
 */
export function strokeEllipse(x, y, rX, rY) {
  context.beginPath();
  context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
  context.stroke();
}

export function strokeCircle(x, y, r) {
  context.beginPath();
  context.ellipse(x, y, r, r, 0, 0, Math.PI * 2);
  context.stroke();
}

export function fillAndStrokeCircle(x, y, radius) {
  fillCircle(x, y, radius);
  strokeCircle(x, y, radius);
}

export function fillAndStrokeEllipse(x, y, w, h) {
  fillEllipse(x, y, w, h);
  strokeCircle(x, y, w, h);
}

/**
 *
 * @param {*} x1 x coordinate of the first point.
 * @param {*} y1 y coordinate of the first point.
 * @param {*} x2 x coordinate of the second point.
 * @param {*} y2 y coordinate of the second point.
 */
export function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}

/**
 *
 * @param {*} x x coordinate of the start point.
 * @param {*} y y coordinate of the start point.
 * @param {*} r raduis of the arc.
 * @param {*} sa y coordinate of the first point.
 * @param {*} ea x coordinate of the second point.
 */
export function drawArc(x, y, r, sa, ea) {
  context.beginPath();
  context.arcTo(x, y, r, sa, ea);
  context.stroke();
}

/** function that converts an angle in degrees to radians
 * @param {number} degrees
 */
export function degrees(degrees) {
  return degrees * (Math.PI / 180);
}

/**
 * function that calculates the distance between 2 coordinates
 * @param {number} x1 x coordinate of the first point
 * @param {number} y1 y coordinate of the first point
 * @param {number} x2 x coordinate of the second point
 * @param {number} y2 y coordinate of the second point
 */
export function calculateDistance(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

/**
 * function that returns a random whole number between a minimum and a maximumm value
 * @param {number} min minimum value
 * @param {number} max maximum value
 */
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * function that returns a structured random decimal number based on a Gaussian curve
 * Adapted from stackoverflow answer by Dorian: https://stackoverflow.com/a/39187274
 */
export function randomGaussian() {
  var rand = 0;

  for (var i = 0; i < 6; i += 1) {
    rand += Math.random() * 2 - 1;
  }

  return rand / 6;
}
