const brickWidth = 80;
const brickHeight = 40;
var brickColor;
var brickStatus = true;
var brickDurability;

class Brick {
  constructor(x, y, width, height, status, durability) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.status = status;
    this.color = brickColor;
    this.durability = durability;
  }

  draw() {
    if (this.durability === 1) {
      this.color = "#FC4100";
    } else if (this.durability === 2) {
      this.color = "#FFC55A";
    } else if (this.durability === 3) {
      this.color = "#00215E";
    }
    c.beginPath();
    c.rect(this.x, this.y, this.width, this.height);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }
}

var bricks = [];
var brickRows = 2;
var brickColumns = 6;
var brickPadding = 20;
var brickOffsetTop = 70;
var brickOffsetLeft = 75;

function createBricks() {
  for (var row = 0; row < brickRows; row++) {
    bricks[row] = [];
    for (var col = 0; col < brickColumns; col++) {
      brickDurability = Math.floor(Math.random() * 3) + 1;
      var brickX = col * (brickWidth + brickPadding) + brickOffsetLeft;
      var brickY = row * (brickHeight + brickPadding) + brickOffsetTop;
      bricks[row][col] = new Brick(
        brickX,
        brickY,
        brickWidth,
        brickHeight,
        brickStatus,
        brickDurability
      );
    }
  }
}

createBricks();

function drawBricks() {
  for (var row = 0; row < brickRows; row++) {
    for (var col = 0; col < brickColumns; col++) {
      if (bricks[row][col].status) {
        bricks[row][col].draw();
      }
    }
  }
}

function ballBrickCollision() {
  for (var row = 0; row < brickRows; row++) {
    for (var col = 0; col < brickColumns; col++) {
      var brick = bricks[row][col];
      if (brick.status) {
        // Check if ball hit the brick
        if (
          ball.x + ball.radius >= brick.x &&
          ball.x - ball.radius <= brick.x + brick.width &&
          ball.y + ball.radius >= brick.y &&
          ball.y - ball.radius <= brick.y + brick.height
        ) {
          brickHit.play();
          var prevBallX = ball.x - ball.speedX;

          // Check ball hit left or right side of the brick
          if (
            prevBallX + ball.radius < brick.x ||
            prevBallX - ball.radius > brick.x + brick.width
          ) {
            ball.speedX = -ball.speedX;
          } else ball.speedY = -ball.speedY;

          brick.durability--;
          if (brick.durability === 0) {
            brick.status = false;
            score += 10;
          }
        }
      }
    }
  }
}
