const ballRadius = 9;
const ballColor = "#EEF7FF";
var ballX = canvas.width / 2;
var ballY = canvas.height - paddleHeight - 35 - ballRadius;
var ballSpeedX = 5;
var ballSpeedY = -5;
var ballSpeed = 5;

class Ball {
  constructor(x, y, radius, speedX, speedY, color, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
    this.speed = speed;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = ballColor;
    c.fill();
    c.closePath();
  }
  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  ballWallCollision() {
    //Left And Right Wall
    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
      wallHit.play();
      this.speedX = -this.speedX;
    }

    //Top Wall
    if (this.y - this.radius <= 0) {
      wallHit.play();
      this.speedY = -this.speedY;
    }

    //Bottom Wall
    if (this.y + this.radius >= canvas.height) {
      this.reset();
      life--;

      if (life == 0) {
        showYouLose();
        gameOver = true;
      }
    }
  }
  ballPadlleCollision() {
    if (
      this.y + this.radius == paddle.y &&
      this.x >= paddle.x &&
      this.x <= paddle.x + paddle.width
    ) {
      paddleHit.play();
      let paddleCenterX = paddle.x + paddle.width / 2;
      let collisionPoint = this.x - paddleCenterX;
      collisionPoint = collisionPoint / (paddle.width / 2);

      this.speedX = this.speed * collisionPoint;
      this.speedY = -this.speed;
    }
  }

  reset() {
    this.x = canvas.width / 2;
    this.y = canvas.height - paddleHeight - 35 - ballRadius;
    this.speedX = ballSpeedX;
    this.speedY = ballSpeedY;
  }
}
const ball = new Ball(
  ballX,
  ballY,
  ballRadius,
  ballSpeedX,
  ballSpeedY,
  ballColor,
  ballSpeed
);
