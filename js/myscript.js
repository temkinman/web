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
function create_table() {
  let main = document.getElementsByClassName('main-content')[0];
  let tbl = document.createElement('table');
  tbl.classList.add("nonogram_table");
  let tbdy = document.createElement('tbody');
  
  for(var i=0; i<2; i++) {
    let tr = document.createElement('tr');
    createTr(tr, i);
    
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  main.appendChild(tbl);
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
  for(var i=0; i<30; i++){
    let tr = document.createElement('tr');
    for(var j=0;j<35;j++){
      let div = document.createElement('div');
      let td = document.createElement('td');
      
      div.innerText = '\u00A0'; 
      div.id = 'nmf_' + i + '_' + j;
      div.classList.add('pic');
      div.setAttribute("oncontextmenu", "oncell_rightClick(event)");
      div.setAttribute("onmousedown", "oncell_leftClick(event)");
      
      td.appendChild(div);
      tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
}

function createtableTop(td) {
  let tbdy = document.createElement('tbody');
  let tbl = document.createElement('table');
  tbl.id = 'topTable';
  
  let numbersY = [
                  [7], [6, 1, 1, 5], [3, 2, 1], [3, 1, 5, 2, 2], [4, 1, 1, 4], [5, 3, 2],
                  [7, 2, 14], [3, 3, 2, 3, 1, 5], [2, 5, 3, 2, 1, 2], [3, 6, 7, 4],
                  [6, 4, 2, 4, 2, 2], [7, 1, 6, 3], [5, 1, 2, 8], [4, 1, 2, 2, 2], [5, 2, 2, 2, 2],
                  [7, 2, 1, 4], [4, 2, 4], [1, 2, 2, 3], [1, 2, 3], [1, 3, 3], [1, 2], [1, 2], [1, 4], [1, 2],
                  [2, 4, 2], [2, 5], [2, 1, 4, 2], [2, 3, 6], [2, 2, 3, 2, 2], [3, 3, 6], [3, 3, 2],
                  [5, 2, 3], [3, 5, 7], [4, 9], [11]
                ];

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
    if ( i >= 6 - numbersY[j].length ) {
        let div = list[i].getElementsByTagName("td")[j].firstChild;
        div.innerText = numbersY[j][b];
        div.id='nmv_' + i + '_' + j;
        div.classList.add('num');
        b++;
      }
    }
  }
}

function createtableLeft(tbdy) {
  let numbersX = [
                  [6], [9], [5, 4], [5, 5], [15], [2, 11], [1, 4, 1, 4], [2, 2, 3, 3], [2, 5,2],
                  [2, 2, 2, 18], [1, 1, 1, 2, 9], [2, 2, 5], [1, 2, 1, 5], [4, 1, 2, 1, 1, 2],
                  [2, 4, 1, 2, 1, 2], [2, 4, 1, 1, 1, 1], [3, 2, 1, 1, 1, 1, 1], [3, 2, 1, 1, 2, 1, 1],
                  [2, 2, 1, 2, 2, 1, 1], [1, 2, 2, 2, 1, 1, 3], [1, 1, 2, 2, 3, 1, 1, 1, 1, 2],
                  [1, 1, 1, 1, 1, 1, 1, 1, 3, 2], [2, 1, 1, 2, 1, 2, 2, 1, 2, 3], [1, 1, 2, 1, 2, 1, 13, 1, 2],
                  [1, 1, 15, 4, 7], [2, 5, 3, 1, 1, 5], [5, 1, 1, 4, 1, 2], [4, 5, 3, 1, 3], [5, 5], [3, 4]
                  ];

  for(var i=0; i<30; i++){
    let tr = document.createElement('tr');
    let b=0;
    for(var j=0;j<10;j++){
      let div = document.createElement('div');
      let td = document.createElement('td');
      
      if ( j >= 10 - numbersX[i].length ) {
        div.innerText = numbersX[i][b];
        div.id='nmh_' + i + '_' + j;
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
}

function oncell_rightClick(e){
  e.preventDefault();
  e.target.style.fontSize='14px';
  e.target.innerText = 'X'
  console.log('Right click');
}

function oncell_leftClick(e){
  e.preventDefault();
  if (e.button == 0) {
    e.target.style.backgroundColor = 'black';
  }
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

