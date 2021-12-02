/* jshint strict: global, browser: true, esversion: 6, devel: true */
'use strict';

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 2;
let dy = -2;
const ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;

  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
}

setInterval(draw, 10);
