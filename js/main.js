let game = document.getElementById("game-board");
let player = document.getElementById("player");
let objects = document.getElementById("objects");

// https://stackoverflow.com/questions/59275056/how-to-get-border-width-using-computedstyle-in-javascript
let playerTop = parseInt(
  window.getComputedStyle(player).getPropertyValue("top")
);
let playerLeft = parseInt(
  window.getComputedStyle(player).getPropertyValue("left")
)
let score = 0;



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


function createObjects(){
    let objectLeft = 970;
    let objectTop = Math.floor(Math.random() * 570);
    let object = document.createElement('div');
    object.setAttribute("class", "object");
    objects.appendChild(object);
    object.style.left = objectLeft + 'px';
    object.style.top = objectTop + 'px';
    function moveObjects(){
      if(objectLeft < playerLeft + 30 && objectLeft > playerLeft && objectTop > playerTop -30 && objectTop < playerTop +100 ){
        objects.removeChild(object);
        clearInterval(interval);
        score += 10;
      }
      if(objectLeft < playerLeft) {
          console.log("game over,your score is" + score)
          clearInterval(interval);
          clearTimeout(timeout);
        }
        objectLeft -= 5;
        object.style.left = objectLeft + 'px';
        object.style.top = objectTop + 'px'
    }
    let interval = setInterval(moveObjects, 20);
    let timeout = setTimeout(createObjects, 2000);
    

}
createObjects();

document.addEventListener("keydown", move);
