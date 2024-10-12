let gameStarted = false;
var gameOver = false;
const maxLevel = 2;

function levelUp() {
  var checkBricksClear = true;
  for (var row = 0; row < brickRows; row++) {
    for (var col = 0; col < brickColumns; col++) {
      if (bricks[row][col].status == true) {
        checkBricksClear = false;
      }
    }
  }
  if (checkBricksClear) {
    brickRows++;
    createBricks();
    ball.reset();
    paddle.reset();
    life = 9;
    level++;

    if (level > maxLevel) {
      win.play();
      showYouWin();
      gameOver = true;
      return;
    }
  }
}
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !gameStarted) {
    gameStarted = true;
    gameTitle.style.display = "none";
    gameLoop();
  }
});

function gameLoop() {
  if (!gameStarted || gameOver) {
    return;
  }
  c.clearRect(0, 0, canvas.width, canvas.height);
  paddle.draw();
  ball.draw();
  drawBricks();
  showGameStats(score, 35, 27, starImg, 5, 5);
  showGameStats(life, canvas.width - 25, 27, heartImg, canvas.width - 55, 6);
  showGameStats(
    level,
    canvas.width / 2,
    27,
    levelImg,
    canvas.width / 2 - 30,
    4
  );

  paddle.move();
  ball.move();
  ball.ballWallCollision();
  ball.ballPadlleCollision();
  ballBrickCollision();
  levelUp();
  window.requestAnimationFrame(gameLoop);
}
