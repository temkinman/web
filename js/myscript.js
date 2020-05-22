/*for JS_page start*/
let id = null;
let elem = document.getElementById("animate");   
let posX = 0;
let posY = 0;
let n = 0;
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

  let alldiv = document.getElementsByClassName('d');
  let numLinkId = id.replace(/\D+/g,"");
  let arrLinks = document.getElementsByClassName('a');
  let columns = 0;

  if(document.getElementById(id).text == 'Двухколонный') {
    columns = 1;
  }
  
  for (let i=0; i<arrLinks.length;i++){
    arrLinks[i].style.fontWeight = 'normal';
  }
  document.getElementById(id).style.fontWeight = 'bold';

  for(let i=0;i < alldiv.length;i++){
    let numDivId = alldiv[i].id.replace(/\D+/g,"");
    let mydiv = document.getElementById('div_' + numDivId);

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
      case '1': let x = document.getElementById('parentLi');
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

/*date_page start*/
function tableCreate() {
  let main = document.getElementsByClassName('main-content')[0];
  let tbl = document.createElement('table');
  tbl.classList.add("nonogram_table");
  let tbdy = document.createElement('tbody');
  let tr = document.createElement('tr');

  for(var i=0; i<2; i++) {
    let td = document.createElement('td');
    if (i == 0) {
      td.innerText = '\u00A0';
      td.id = 'nmti';
    }
    else {
      createtableAdd(td);
    }
    td.appendChild(document.createTextNode('\u0020'));
    tr.appendChild(td);
    tbdy.appendChild(tr);
  }

  tbl.appendChild(tbdy);
  main.appendChild(tbl);
}

function createtableAdd(td) {
  let tbdy = document.createElement('tbody');
  let tbl = document.createElement('table');
  
  let numbersY = [[3, 2, 6], [3, 3, 5, 4, 4, 5, 2], [6, 1, 4, 2, 3, 3, 2, 7, 5, 1, 2, 7, 1, 2, 2]];
  
  for(var i=0; i<6; i++){
    let tr = document.createElement('tr');
    let a=0;
    let b=0;
    for(var j=0;j<35;j++){
      let div = document.createElement('div');
      let td = document.createElement('td');
      
      if( i == 0 && (j == 7 || j == 8 || j == 10)) {
        div.innerText = numbersY[a][b];
        b++;
        div.id='nmv_' + i + '_' + j;
        div.classList.add('num');  
      }
      else if ( i == 1 && (j == 3 || j == 7 || j == 8 || j == 10 || j == 13 || j == 14 || j == 28) ) {
        a=1;
        div.innerText = numbersY[a][b];
        div.id='nmv_' + i + '_' + j;
        div.classList.add('num'); 
        b++;
      }
      else if ( i == 2 && (j == 1 || j == 3 || j == 4 || j == 7 || j == 8 || j == 9 || j == 10 || j == 11 || j == 12 || j == 13 || j == 14 || j == 15 || j == 17 || j == 26 || j == 28) ) {
        a=2;
        div.innerText = numbersY[a][b];
        div.id='nmv_' + i + '_' + j;
        div.classList.add('num'); 
        b++;
      }

      else {
        div.innerText = '\u00A0'; 
        div.classList.add('num_empty'); 
      }
      
      td.appendChild(div);
      tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  td.appendChild(tbl);
}
/*date_page end*/

/*form_page start*/

function change_percent(){
  let total_percent = document.getElementById('total_percent');
  let percent = document.getElementById('percent');
  
  total_percent.value = percent.value;
}

function send(event){
  event.preventDefault();

  
  let form_1 = document.getElementById('form_1');

  var benchTable;

  
    // очистить всё
    //benchTable = document.getElementById('bench-table');
    // while (benchTable.firstChild) {
    //   benchTable.removeChild(benchTable.firstChild);
    // }
  

  
    var tbody = document.createElement('tbody');
    var th = document.createElement('th');

    tr_1 = document.createElement('tr');
    th.innerText='1111';
    tr_1.appendChild(th);
    for (var i = 0; i < 2; i++) {
      // var tr = document.createElement('TR');
      // tbody.appendChild(tr);
      // for (var j = 0; j < 20; j++) {
      //   var td = document.createElement('td');
      //   tr.appendChild(td);
      //   td.appendChild(document.createTextNode('' + i.toString(20) + j.toString(20)));
      // }
    }

    form_1.appendChild(tbody);
  
}

/*form_page stop*/

/*for liveReload*/
  //document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
  document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
/*end*/

