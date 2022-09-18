let game = document.getElementById("game-board");
let player = document.getElementById("player");
let playerPosition = parseInt(
  window.getComputedStyle(player).getPropertyValue("top")
);


function movePlayerUp() {
  if (playerPosition > 0) {
    playerPosition -= 15;
    player.style.top = playerPosition + "px";
  }
}

function movePlayerDown() {
  if (playerPosition < 500) {
    playerPosition += 15;
    player.style.top = playerPosition + "px";
  }
}

function move(e) {
  if (e.key == "ArrowUp") {
    movePlayerUp();
  }
  if (e.key == "ArrowDown") {
    movePlayerDown();
  }
}

document.addEventListener("keydown", move);
