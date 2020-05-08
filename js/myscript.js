/*for JS_page start*/
var id = null;
var elem = document.getElementById("animate");   
var posX = 0;
var posY = 0;
var n = 0;
let jsText = document.getElementsByClassName('active')[0].innerText;

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
}


document.addEventListener('keydown', function(event) {
  // debugger
  //KeyboardEvent.charCode;

  let n = 0;
  if (event.keyCode == '83' && jsText == 'JS') {
    if(posY < 93){
      moveDown();
    }
  }
  if (event.keyCode == '68' && jsText == 'JS') {
    if(posX < 77){
      moveRight();
    }
  }

  if (event.keyCode == '87' && jsText == 'JS') {
    if(posY > -3){
      moveTop();
    }
  }

  if (event.keyCode == '65' && jsText == 'JS') {
    if(posX > 0){
      moveLeft();
    }
  }
});

/*for JS_page end*/

/*for formatting_page start*/
function show(id){

  var alldiv = document.getElementsByClassName('d');
  var numLinkId = id.replace(/\D+/g,"");
  var arrLinks = document.getElementsByClassName('a');
  var columns = 0;

  if(document.getElementById(id).text == 'Двухколонный') {
    columns = 1;
  }
  
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
    if (columns == 1 && numDivId === numLinkId){
      mydiv.style.display = "flex";
      columns = 0;
    }
  }
}

/*for formatting_page end*/

/*for CSS_page start*/

  function select(id) {
    switch (id) {
      case '1': var x = document.getElementById('parentLi');
      // debugger
              // document.getElementsByClassName('psevdo').ul>li:first-child.style.background-color = '#3dab00';
              break;
      case '2': alert('2222');
              break;
              
    }
  }

  function setStyle(){
    let elements = document.getElementsByClassName('changeLi')[0].children;
    let number = document.getElementById('userNumber').value;

    elements[number-1].style.backgroundColor = 'white';
    elements[number-1].style.color = 'black';
    elements[number-1].style.border = '2px solid black';
  }

  function resetAll(){
    let arr_checks = document.getElementsByClassName('checks');
    let div = document.getElementsByClassName('number')[0];
    let elementsli = document.getElementsByClassName('changeLi')[0].children;
    
    div.style.display = 'none';

    for(let i=0; i<arr_checks.length; i++) {
      arr_checks[i].checked = false;
    }
    arr_checks[7].checked = true;

    for(let i=0; i<elementsli.length; i++) {
      elementsli[i].style.backgroundColor = '';
      elementsli[i].style.color = '';
      elementsli[i].style.border = '';
    }
  }

  function numberShow(){
    let div = document.getElementsByClassName('number')[0];
    div.style.display = 'flex';
  }
/*for CSS_page end*/

/*for liveReload*/
  //document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
  document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
/*end*/