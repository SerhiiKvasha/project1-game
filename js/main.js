let game = document.getElementById("game-board");
let player = document.getElementById("player");
let objects = document.getElementById("objects");
let playerTop= parseInt(
  window.getComputedStyle(player).getPropertyValue("top")
);



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
     
      if(objectLeft < 10) {
          alert ("game over");
        }
        objectLeft -= 5;
        object.style.left = objectLeft + 'px';
        object.style.top = objectTop + 'px'
    }
    setInterval(moveObjects, 20);
    setTimeout(createObjects, 2000);
    

}
createObjects();

document.addEventListener("keydown", move);
