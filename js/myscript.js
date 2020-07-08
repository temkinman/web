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

/*krossword_page start*/
let numbersX = [
                  [6, 6], [9, 4], [5, 3, 4, 9], [5, 2, 5, 10], [15, 1], [2, 1, 11, 5], [1, 1, 4, 6, 1, 11, 4, 13],
                  [2, 0, 2, 3, 3, 8, 3, 14], [2, 0, 5, 7, 2, 15], [2, 0, 2, 6, 2, 9, 18, 12],
                  [1, 0, 1, 6, 1, 10, 2, 14, 9, 24], [2, 0, 2, 3, 5, 29], [1, 0, 2, 2, 1, 10, 5, 30], [4, 0, 1, 7, 2, 9, 1, 28, 1, 31, 2, 33],
                  [2, 3, 4, 6, 1, 26, 2, 28, 1, 31, 2, 33], [2, 3, 4, 6, 1, 27, 1, 29, 1, 32, 1, 34],
                  [3, 4, 2, 8, 1, 17, 1, 27, 1, 29, 1, 32, 1, 34], [3, 4, 2, 9, 1, 15, 2, 17, 1, 27, 1, 32, 1, 34],
                  [2, 5, 2, 9, 1, 12, 2, 15, 2, 18, 1, 32, 1, 34], [1, 6, 2, 9, 2, 12, 2, 16, 1, 19, 1, 28, 3, 32],
                  [1, 1, 1, 3, 2, 6, 2, 10, 3, 13, 1, 17, 1, 19, 1, 26, 1, 28, 2, 33],
                  [1, 1, 1, 3, 1, 6, 1, 8, 1, 11, 1, 14, 1, 22, 1, 24, 3, 26, 2, 33], [2, 1, 1, 6, 1, 8, 2, 11, 1, 16, 2, 18, 2, 21, 1, 24, 2, 26, 3, 32],
                  [1, 1, 1, 3, 2, 6, 1, 9, 2, 11, 1, 14, 13, 16, 1, 30, 2, 32], [1, 1, 1, 3, 15, 6, 4, 22, 7, 27],
                  [2, 6, 5, 9, 3, 15, 1, 25, 1, 27, 5, 29], [5, 5, 1, 12, 1, 15, 4, 24, 1, 29, 2, 32],
                  [4, 5, 5, 11, 3, 24, 1, 29, 3, 31], [5, 10, 5, 28], [3, 10, 4, 28]
                ];

let numbersY = [
                  [7, 7], [6, 4, 1, 11, 1, 13, 5, 20], [3, 3, 2, 12, 1, 22], [3, 2, 1, 7, 5, 11, 2, 20, 2, 23], [4, 1, 1, 7, 1, 11, 4, 14],
                  [5, 1, 3, 16, 2, 26], [7, 0, 2, 9, 14, 14], [3, 0, 3, 4, 2, 8, 3, 13, 1, 20, 5, 23], [2, 0, 5, 4, 3, 14, 2, 21, 1, 24, 2, 26],
                  [3, 0, 6, 4, 7, 13, 4, 23], [6, 0, 4, 7, 2, 12, 4, 17, 2, 24, 2, 28], [7, 0, 1, 8, 6, 20, 3, 27], [5, 1, 1, 9, 2, 18, 8, 22],
                  [4, 3, 1, 9, 2, 19, 2, 24, 2, 27], [5, 3, 2, 9, 2, 20, 2, 23, 2, 27],
                  [7, 4, 2, 17, 1, 20, 4, 24], [4, 6, 2, 18, 4, 22], [1, 9, 2, 16, 2, 19, 3, 23], [1, 9, 2, 17, 3, 22], [1, 9, 3, 18, 3, 22],
                  [1, 9, 2, 23], [1, 9, 2, 22], [1, 9, 4, 21], [1, 9, 2, 23],
                  [2, 9, 4, 21, 2, 26], [2, 9, 5, 23], [2, 9, 1, 14, 4, 20, 2, 26], [2, 9, 3, 15, 6, 21], [2, 9, 2, 13, 3, 19, 2, 23, 2, 28],
                  [3, 9, 3, 14, 6, 24], [3, 10, 3, 23, 2, 28],
                  [5, 10, 2, 24, 3, 27], [3, 10, 5, 15, 7, 22], [4, 11, 9, 19], [11, 12]
                ];

let winner_score; 
let col_rows=[]; 
let winner = document.getElementById('winner');
let rows = [];             
let columns = [];

function startGame() {
  let main = document.getElementsByClassName('main-content')[0];
  let tbl = document.createElement('table');
  tbl.classList.add("nonogram_table");
  let tbdy = document.createElement('tbody');
  let btn_start = document.getElementById('start');
  let btn_result = document.getElementById('result');
  let btn_reset = document.getElementById('reset_game');
  let btn_stop_game = document.getElementById('stop_game');
  btn_start.style.display = 'none';
  btn_result.style.display = 'inline-block';
  btn_reset.style.display = 'inline-block';
  btn_stop_game.style.display = 'inline-block';

  winner_score = 0;
  
  for(var i=0; i<2; i++) {
    let tr = document.createElement('tr');
    createTr(tr, i);
    
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  main.appendChild(tbl);
  
  newGame(0);
}

function stopGame(){
  let tbl = document.getElementsByClassName('nonogram_table');
  let btn_result = document.getElementById('result');
  let btn_reset = document.getElementById('reset_game');
  let btn_stop_game = document.getElementById('stop_game');
  let btn_start = document.getElementById('start');
  
  if (tbl) {
    // tbl[0].style.display = 'none';
    tbl[0].remove();
    btn_start.style.display = 'inline-block';
    btn_result.style.display = 'none';
    btn_reset.style.display = 'none';
    btn_stop_game.style.display = 'none';
    winner.style.display = 'none';
  }
  newGame(0);
}

function createTr(tr, index) {
  if (index == 0) {
    for (var i=0; i<2; i++) {
      let td = document.createElement('td');

      if (i == 0) {
        td.innerText = '\u00A0';
        td.id = 'nmti';
      }
      else {
        createtableTop(td);
      }
      // td.appendChild(document.createTextNode('\u0020'));
      tr.appendChild(td);
    }
  }
  if (index == 1) {
    for (var i=0; i<2; i++) {
        let td = document.createElement('td');
        let tbl = document.createElement('table');
        let tbdy = document.createElement('tbody');

        if(i == 0) {
          tbl.id = 'leftTable';
          createtableLeft(tbdy);
        }
        else {
          createtableMain(tbdy);
        }
        tbl.appendChild(tbdy);
        td.appendChild(tbl);
        tr.appendChild(td);
    }
  }
}

function createtableMain(tbdy) {
  tbdy.classList.add("game_pic");
  tbdy.id = 'centertable';
  for(var i=0; i<30; i++){
    let tr = document.createElement('tr');
    for(var j=0;j<35;j++){
      let td = document.createElement('td');
      
      td.innerText = '\u00A0'; 
      td.id = 'nmf_' + i + '_' + j;
      td.classList.add('pic');
      td.setAttribute("oncontextmenu", "oncell_rightClick(event)");
      td.setAttribute("onmousedown", "oncell_leftClick(event)");
      
      tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
}

function createtableTop(td) {
  let tbdy = document.createElement('tbody');
  tbdy.id = 'top';
  let tbl = document.createElement('table');
  tbl.id = 'topTable';
  
  for (var i=0; i<6;i++){
    let tr = document.createElement('tr');
    for(var j=0;j<35;j++){
      let div = document.createElement('div');
      let td = document.createElement('td');
      div.innerText = '\u00A0'; 
      div.classList.add('num_empty');
      td.appendChild(div);
      tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  td.appendChild(tbl);

  
  list= tbl.rows;
  for (var j = 0; j < 35; j++) {
    let b = 0;
    for (var i = 0; i < 6; i++) {
      if ( i >= 6 - (numbersY[j].length / 2) ) {
          let div = list[i].getElementsByTagName("td")[j].firstChild;
          div.innerText = numbersY[j][b];
          div.id='nmv_' + i + '_' + j;
          div.classList.add('num');
          b+=2;
      }
    }
  }
}

function createtableLeft(tbdy) {
  for(var i=0; i<30; i++){
    let tr = document.createElement('tr');
    let b=0;
    for(var j=0;j<10;j++){
      let div = document.createElement('div');
      let td = document.createElement('td');
      
      if ( j >= 10 - (numbersX[i].length / 2) ) {
        div.innerText = numbersX[i][b];
        div.id='nmh_' + i + '_' + j;
        div.classList.add('num');
        b+=2;
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
}

function oncell_rightClick(e){
  e.preventDefault();
  e.target.style.fontSize='9px';
  e.target.style.backgroundColor = 'white';

  let isX = e.target.innerText;
  if (isX == 'X') {
    e.target.innerText = '';
    e.target.classList.remove('manual');
  }
  else {
    e.target.innerText = 'X';
    e.target.classList.add('manual');
  }
}

function oncell_leftClick(e){
  col_rows = e.target.id.split('_');
  let col = col_rows[2];
  let row = col_rows[1];

  e.preventDefault();

  if (e.button == 0) {
    e.target.innerText = '';
    if ( e.target.style.backgroundColor == 'white' || e.target.style.backgroundColor == '') {
      e.target.style.backgroundColor = 'black';
    }
    else {
      e.target.style.backgroundColor = 'white';
    }
  }
  checkColumn(col);
  checkRow(row);
  sayWin();
}

function checkColumn(col){
  let centertbl = document.getElementById('centertable');
  let number_rows = centertbl.rows.length;
  let rightDiv = 0;
  let blackDiv = 0;
  let controlNumber;
  
  for (var m=0; m<number_rows; m++) {
    let div = centertbl.rows[m].cells[col];

    if( div.style.backgroundColor == 'black' ){
      controlNumber = 0;
      for(var i=0; i<numbersY[col].length; i+=2){
        let pos = numbersY[col][i+1];
        let number = numbersY[col][i];
        controlNumber += number;

        if ( m >= pos && m < (pos + number) ) {
          rightDiv++;
        }
      }
      blackDiv++;
    }
  }

  if(blackDiv == rightDiv && rightDiv == controlNumber) {
    columns[col] = 1;
  }
  else {
    columns[col] = 0;
  }

  for (var m=0; m<number_rows; m++) {
    let div = centertbl.rows[m].cells[col];

    if(columns[col] == 0) {
      if( div.classList.contains('manual') ) {
        continue;
      }
      if( div.style.backgroundColor != 'black' ){
        div.innerText = ' ';
      }
    }
  }
  console.log(columns);
  console.log(rows);
  console.log("----------------------");
}

function checkRow(row){
  let centertbl = document.getElementById('centertable');
  let number_rows = centertbl.rows[row].cells.length;
  let rightDiv = 0;
  let blackDiv = 0;
  let controlNumber;

  for (var m=0; m<number_rows; m++) {
    let div = centertbl.rows[row].cells[m];
    if( div.style.backgroundColor == 'black' ){
      controlNumber = 0;
      for(var i=0; i<numbersX[row].length; i+=2){
        let pos = numbersX[row][i+1];
        let number = numbersX[row][i];
        controlNumber += number;

        if ( m >= pos && m < (pos + number) ) {
          rightDiv++;
        }
      }
      blackDiv++;
    }
  }

  if(blackDiv == rightDiv && rightDiv == controlNumber) {
    rows[row] = 1;
  }
  else {
    rows[row] = 0;
  }
}

function show_right_rows_and_columns(){
  let centertbl = document.getElementById('centertable');
  let number_rows = centertbl.rows.length;
  
  for(var i=0;i<rows.length;i++){
    let number_rows = centertbl.rows[i].cells.length;

    for (var j=0; j<number_rows; j++) {
      let div = centertbl.rows[i].cells[j];

      if(rows[i] == 1) {
        if( div.style.backgroundColor != 'black' ){
          div.innerText = 'X';
        }  
      }

      if(rows[i] == 0) {
        if( div.classList.contains('manual') ) {
          continue;
        }
        if( div.style.backgroundColor != 'black' ){
          div.innerText = ' ';
        }
      }
    }
  }

  for(var i=0; i<columns.length; i++) {
    for (var j=0; j<number_rows; j++) {
      let div = centertbl.rows[j].cells[i];
      if(rows[j] == 1) {
        continue;
      }

      if(columns[i] == 1) {
        if( div.style.backgroundColor != 'black' ){
          div.innerText = 'X';
        }
      }

      if(columns[i] == 0) {
        if( div.classList.contains('manual') ) {
          continue;
        }
        if( div.style.backgroundColor != 'black' ){
          div.innerText = ' ';
        }
      }
    }
  } 
}

function sayWin(){
  winner_score = 0;
  
  show_right_rows_and_columns();

  for(var i=0; i<columns.length;i++) {
    if(columns[i] == 0) {
      break;
    }
    else winner_score++;
  }

  for(var i=0; i<rows.length;i++) {
    if(rows[i] == 0) {
      break;
    }
    else winner_score++;
  }

  if ( winner_score == 65) {
    winner.style.display = 'block';
  }
  else {
    winner.style.display = 'none';
  }
}

function newGame(number){
  rows = [];
  columns = [];

  for (var i=0; i<30; i++) {
    rows.push(number);
  }
  for (var i=0; i<35; i++) {
    columns.push(number);
  }
}

function  show_result(){
  let centertbl = document.getElementById('centertable');
  let n = numbersY.length;


  //newGame(1);

  for(var i=0, col=0; i<n; i++, col++){
    for(var j=1; j<numbersY[i].length; j+=2){
      let pos = numbersY[i][j];
      let number = numbersY[i][j-1];

      for(var x=pos, item=0; item<number; x++, item++) {
        let div = centertbl.rows[x].cells[col];  
        div.style.backgroundColor = 'black';
      }
    }
  }
  sayWin();
}

function reset() {
  let maintbl = document.getElementsByClassName('pic');
  right_rows = 0;
  right_columns = 0;

  winner.style.display = 'none';
  newGame(0);

  for(var i=0; i<maintbl.length; i++){
    maintbl[i].style.backgroundColor = 'white';
    maintbl[i].innerText = '';
  }
}
/*krossword_page end*/

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

/*dates_page start*/
  function addPerson(event){
    event.preventDefault();
    let tblperson = document.getElementById('list_person');
    let values = document.getElementById('form_person').elements;
    let result= "<tr>";

    for(var i=0; i<3; i++){
      result += "<td>" + values[i].value + "</td>";
    }
    result += "</tr>";
    tblperson.lastElementChild.insertAdjacentHTML('afterEnd', result);
  }
/*dates_page stop*/

/*for liveReload*/
  //document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
  document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
/*end*/

