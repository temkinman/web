/*for JS_page start*/

var id = null;
var elem = document.getElementById("animate");   
var posX = 0;
var posY = 0;
var n = 0;

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

function startMoveText() {
  setStartPosition();
  id = setInterval(frame, 30);
  
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
}

function stopMoveText(){
  clearInterval(id);
}

/*for JS_page end*/

/*for formatting_page start*/
function show(id){

  var alldiv = document.getElementsByClassName('d');
  var numLinkId = id.replace(/\D+/g,"");
  var arrLinks = document.getElementsByClassName('a');
  
  for (let i=0; i<arrLinks.length;i++){
    arrLinks[i].style.fontWeight = 'normal';
  }
  document.getElementById(id).style.fontWeight = 'bold';

  for(let i=0;i < alldiv.length;i++){
    var numDivId = alldiv[i].id.replace(/\D+/g,"");
    var mydiv = document.getElementById('div_' + numDivId);
    if (numDivId === numLinkId){
      mydiv.style.display = "block";
    }
    else {
      mydiv.style.display = "none";
    }
  }
}

/*for formatting_page end*/