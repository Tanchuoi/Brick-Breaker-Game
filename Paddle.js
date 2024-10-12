const paddleWidth = 120;
const paddleHeight = 20;
const paddleColor = "#8B322C";
var paddleX = (canvas.width - paddleWidth) / 2;
var paddleY = canvas.height - paddleHeight - 35;
var paddleSpeed = 7;
var leftArrow = false;
var rightArrow = false;

document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowLeft") {
    leftArrow = true;
  } else if (event.key == "ArrowRight") {
    rightArrow = true;
  }
});
document.addEventListener("keyup", (event) => {
  if (event.key == "ArrowLeft") {
    leftArrow = false;
  } else if (event.key == "ArrowRight") {
    rightArrow = false;
  }
});

class Paddle {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  draw() {
    c.beginPath();
    c.rect(this.x, this.y, this.width, this.height);
    c.fillStyle = paddleColor;
    c.fill();
    c.closePath();
  }

  move() {
    if (leftArrow && this.x > 0) {
      this.x -= this.speed;
    } else if (rightArrow && this.x + this.width < canvas.width) {
      this.x += this.speed;
    }
  }

  reset() {
    paddle.x = (canvas.width - paddleWidth) / 2;
  }
}
const paddle = new Paddle(
  paddleX,
  paddleY,
  paddleWidth,
  paddleHeight,
  paddleSpeed
);
