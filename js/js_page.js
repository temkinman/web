let id = null;
let elem = document.getElementById("animate");   
let posX = 0;
let posY = 0;
let n = 0;
let navigation = document.querySelector('[index]');
let index = navigation.getAttribute('index');
let isStart = false;
let start_btn = document.getElementById('start');
let stop_btn = document.getElementById('stop');

start_btn.addEventListener('click', startMoveText);
stop_btn.addEventListener('click', stopMoveText);
stop_btn.disabled = true;

start_btn.classList.add('move_btn');
stop_btn.classList.add('move_btn');

function moveDown(){
  posY++; 
  elem.style.top = posY + '%';   
}

function setStartPosition(){
  n = 0;
  posX = 0;
  posY = 0;
  elem.style.left = posX;
}

function moveDiagonal(){
  posX++;
  posY = posY - 1.12; 
  elem.style.left = posX + '%';
  elem.style.top = posY + '%';
}

function moveRight(){
  posX++;
  elem.style.left = posX + '%';
}

function moveLeft(){
  posX--;
  elem.style.left = posX + '%';
}

function moveTop(){
  posY--; 
  elem.style.top = posY + '%';
}

function startMoveText() {
  setStartPosition();
  id = setInterval(frame, 30);
  isStart = true;
  checkStart();
}

function checkStart(){
  if(isStart) {
    start_btn.disabled = true;
    stop_btn.disabled = false;

    start_btn.style.color = '#9c9b98';
    stop_btn.style.color = '';
  }
  else {
    console.log('isStart: ' + isStart);
    start_btn.disabled = false;
    stop_btn.disabled = true;
    
    stop_btn.style.color = '#9c9b98';
    start_btn.style.color = '';
  }
}

function frame() {
    if(n === 0 && posY < 93){
        moveDown();
        if(posY > 91) {
          n++;
      }
    }

    if(n == 1){
      if(posY > 0) {
        moveDiagonal();  
      }
      else {
        n++;
      }
    }

    if(n === 2){
      if(posY < 93){
        moveDown();  
      }
      if(posY > 91) {
        setStartPosition();
      }
    }
  }

function stopMoveText(){
  clearInterval(id);
  isStart = false;
  checkStart();
}

document.addEventListener('keydown', function(event) {
  if(index == 2) {
    switch(event.keyCode) {
      case 83:  if(posY < 93){
                  moveDown();
                }
                break;
      case 68:  if(posX < 77){
                  moveRight();
                }    
                break; 
      case 87:  if(posY > -3){
                  moveTop();
                }           
                break;
      case 65:  if(posX > 0){
                  moveLeft();
                }
                break;
    }
  }
  n = 0;  
});