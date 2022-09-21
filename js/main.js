let game = document.getElementById("game-board");
let player = document.getElementById("player");
let objects = document.getElementById("objects");

// https://stackoverflow.com/questions/59275056/how-to-get-border-width-using-computedstyle-in-javascript
let playerTop = parseInt(
  window.getComputedStyle(player).getPropertyValue("top")
);
let playerLeft = parseInt(
  window.getComputedStyle(player).getPropertyValue("left")
);
let score = 0;
let lives = 3;
function movePlayerUp() {
  if (playerTop > 0) {
    playerTop -= 15;
    player.style.top = playerTop + "px";
  }
}

function movePlayerDown() {
  if (playerTop < 500) {
    playerTop += 15;
    player.style.top = playerTop + "px";
  }
}

function move(button) {
  if (button.key == "ArrowUp") {
    movePlayerUp();
  }
  if (button.key == "ArrowDown") {
    movePlayerDown();
  }
}
document.addEventListener("keydown", move);

function createObjects() {
  let objectLeft = 970;
  let objectTop = Math.floor(Math.random() * 570);
  let object = document.createElement("div");
  object.setAttribute("class", "object");
  objects.appendChild(object);
  object.style.left = objectLeft + "px";
  object.style.top = objectTop + "px";
  function moveObjects() {
    objectLeft -= 5;
    object.style.left = objectLeft + "px";
    object.style.top = objectTop + "px";
    if (
      objectLeft < playerLeft + 30 &&
      objectLeft > playerLeft &&
      objectTop > playerTop - 30 &&
      objectTop < playerTop + 100
    ) {
      objects.removeChild(object);
      clearInterval(interval);
      clearTimeout(timeout);
      score += 10;
      liveScore();
    }
    if (objectLeft < playerLeft) {
      clearInterval(interval);
      clearTimeout(timeout);
      objects.removeChild(object);
      lives--;
    }
    if (lives === 2){
      document.getElementById("life2").remove();
    }
    if (lives === 1){
      document.getElementById("life1").remove();
    }
    if (lives === 0) {
      gameOver();
    }

    if (score >= 100) {
      objectLeft -= 3;
    }
  }

  let interval = setInterval(moveObjects, 20);
  let timeout = setTimeout(createObjects, 1800);
}

function startGame() {
  game.style.display = "block";
  document.getElementById("start-game").style.display = "none";
  document.getElementById("end-game").style.display = "none";
  createObjects();
}
function gameOver() {
  document.getElementById("start-game").style.display = "none";
  game.style.display = "none";
  document.getElementById("end-game").style.display = "block";
  displayScore();
}
function tryAgain() {
  location.reload();
  return;
}

function displayScore() {
  document.getElementById("players-score").innerHTML =
    "Your score is:" + " " + score;
}
function liveScore() {
  document.getElementById("live-score").innerHTML = "SCORE:" + " " + score;
}
