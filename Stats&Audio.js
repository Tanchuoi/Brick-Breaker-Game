//Images
const heartImg = new Image();
heartImg.src = "assets/img/lives.png";
const levelImg = new Image();
levelImg.src = "assets/img/level-up.png";
const starImg = new Image();
starImg.src = "assets/img/star.png";

//Sounds
const wallHit = new Audio();
wallHit.src = "assets/sound/wall.mp3";
const paddleHit = new Audio();
paddleHit.src = "assets/sound/paddle_hit.mp3";
const brickHit = new Audio();
brickHit.src = "assets/sound/brick_hit.mp3";
const win = new Audio();
win.src = "assets/sound/win.mp3";
wallHit.muted = true;
paddleHit.muted = true;
brickHit.muted = true;
win.muted = true;

//Game Stats
var score = 0;
var life = 9;
var level = 1;

function showGameStats(text, textX, textY, img, imgX, imgY) {
  c.fillStyle = "#FFF";
  c.font = "25px Lato";
  c.fillText(text, textX, textY);

  c.drawImage(img, imgX, imgY, 25, 25);
}

const soundElement = document.getElementById("soundBtn");

soundElement.addEventListener("click", audioChange);

function audioChange() {
  if (soundElement.getAttribute("src") == "assets/img/SOUND_OFF.png") {
    soundElement.setAttribute("src", "assets/img/SOUND_ON.png");
    wallHit.muted = false;
    paddleHit.muted = false;
    brickHit.muted = false;
    win.muted = false;
  } else if (soundElement.getAttribute("src") == "assets/img/SOUND_ON.png") {
    soundElement.setAttribute("src", "assets/img/SOUND_OFF.png");
    wallHit.muted = true;
    paddleHit.muted = true;
    brickHit.muted = true;
    win.muted = true;
  }
}

const gameOverScreen = document.getElementById("gameOver");
const youWin = document.getElementById("youWinImg");
const youLose = document.getElementById("youLoseImg");

const restart = document.getElementById("restart");

restart.addEventListener("click", function () {
  location.reload();
});

function showYouWin() {
  gameOverScreen.style.display = "flex";
  youWin.style.display = "block";
  restart.style.display = "block";
}

function showYouLose() {
  gameOverScreen.style.display = "flex";
  youLose.style.display = "block";
  restart.style.display = "block";
}

const gameTitle = document.getElementById("gameTitle");
