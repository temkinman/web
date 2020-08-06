/*krossword_page start*/

//массив с решением
let solution = [
                 0,0,0,0,0,  0,1,1,1,1,  1,1,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  
                 0,0,0,0,1,  1,1,1,1,1,  1,1,1,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,
                 0,0,0,1,1,  1,1,1,0,1,  1,1,1,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,
                 0,0,1,1,1,  1,1,0,0,0,  1,1,1,1,1,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,
                 0,1,1,1,1,  1,1,1,1,1,  1,1,1,1,1,  1,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,

                 0,1,1,0,0,  1,1,1,1,1,  1,1,1,1,1,  1,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,
                 0,1,0,0,0,  0,1,1,1,1,  0,1,0,1,1,  1,1,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,
                 1,1,0,1,1,  0,0,0,1,1,  1,0,0,0,1,  1,1,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,
                 1,1,0,0,0,  0,0,1,1,1,  1,1,0,0,0,  1,1,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,
                 1,1,0,0,0,  0,1,1,0,1,  1,0,1,1,1,  1,1,1,1,1,  1,1,1,1,1,  1,1,1,1,1,  0,0,0,0,0,

                 1,0,0,0,0,  0,1,0,0,0,  1,0,0,0,1,  1,0,0,0,0,  0,0,0,0,1,  1,1,1,1,1,  1,1,1,0,0,
                 1,1,0,1,1,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,1,  1,1,1,1,0,
                 1,0,1,1,0,  0,0,0,0,0,  1,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  1,1,1,1,1,
                 1,1,1,1,0,  0,0,1,0,1,  1,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,1,0,  0,1,0,1,1,
                 0,0,0,1,1,  0,1,1,1,1,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,1,0,1,1,  0,1,0,1,1,
                 
                 0,0,0,1,1,  0,1,1,1,1,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,1,0,1,  0,0,1,0,1,
                 0,0,0,0,1,  1,1,0,1,1,  0,0,0,0,0,  0,0,1,0,0,  0,0,0,0,0,  0,0,1,0,1,  0,0,1,0,1,
                 0,0,0,0,1,  1,1,0,0,1,  1,0,0,0,0,  1,0,1,1,0,  0,0,0,0,0,  0,0,1,0,0,  0,0,1,0,1,
                 0,0,0,0,0,  1,1,0,0,1,  1,0,1,0,0,  1,1,0,1,1,  0,0,0,0,0,  0,0,0,0,0,  0,0,1,0,1,
                 0,0,0,0,0,  0,1,0,0,1,  1,0,1,1,0,  0,1,1,0,1,  0,0,0,0,0,  0,0,0,1,0,  0,0,1,1,1,

                 0,1,0,1,0,  0,1,1,0,0,  1,1,0,1,1,  1,0,1,0,1,  0,0,0,0,0,  0,1,0,1,0,  0,0,0,1,1,
                 0,1,0,1,0,  0,1,0,1,0,  0,1,0,0,1,  0,0,0,0,0,  0,0,1,0,1,  0,1,1,1,0,  0,0,0,1,1,
                 0,1,1,0,0,  0,1,0,1,0,  0,1,1,0,0,  0,1,0,1,1,  0,1,1,0,1,  0,1,1,0,0,  0,0,1,1,1,
                 0,1,0,1,0,  0,1,1,0,1,  0,1,1,0,1,  0,1,1,1,1,  1,1,1,1,1,  1,1,1,1,0,  1,0,1,1,0,
                 0,1,0,1,0,  0,1,1,1,1,  1,1,1,1,1,  1,1,1,1,1,  1,0,1,1,1,  1,0,1,1,1,  1,1,1,1,0,

                 0,0,0,0,0,  0,1,1,0,1,  1,1,1,1,0,  1,1,1,0,0,  0,0,0,0,0,  1,0,1,0,1,  1,1,1,1,0,
                 0,0,0,0,0,  1,1,1,1,1,  0,0,1,0,0,  1,0,0,0,0,  0,0,0,0,1,  1,1,1,0,1,  0,0,1,1,0,
                 0,0,0,0,0,  1,1,1,1,0,  0,1,1,1,1,  1,0,0,0,0,  0,0,0,0,1,  1,1,0,0,1,  0,1,1,1,0,
                 0,0,0,0,0,  0,0,0,0,0,  1,1,1,1,1,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,1,1,  1,1,1,0,0,
                 0,0,0,0,0,  0,0,0,0,0,  1,1,1,0,0,  0,0,0,0,0,  0,0,0,0,0,  0,0,0,1,1,  1,1,0,0,0
                ];

let userGame = Array(1050).fill(0); // массив игры пользователя
let allCells = [];
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

let winner = document.getElementById('winner');
let btn_start = document.getElementById('start');
let btn_result = document.getElementById('result');
let btn_reset = document.getElementById('reset_game');
let btn_stop_game = document.getElementById('stop_game');
let btn_usergame = document.getElementById('usergame');
let btn_show_errors = document.getElementById('errors');

btn_start.addEventListener('click', startGame);
btn_result.addEventListener('click', show_result);
btn_reset.addEventListener('click', reset);
btn_stop_game.addEventListener('click', stopGame);
btn_usergame.addEventListener('click', showUserGame);
btn_show_errors.addEventListener('click', show_errors);

function startGame() {
  let main = document.getElementsByClassName('main-content')[0];
  let tbl = document.createElement('table');
  tbl.classList.add("nonogram_table");
  let tbdy = document.createElement('tbody');

  btn_start.style.display = 'none';
  btn_result.style.display = 'inline-block';
  btn_reset.style.display = 'inline-block';
  btn_stop_game.style.display = 'inline-block';
  btn_usergame.style.display = 'inline-block';
  btn_show_errors.style.display = 'inline-block';

  winner_score = 0;
  
  for(var i=0; i<2; i++) {
    let tr = document.createElement('tr');
    createTr(tr, i);
    
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  main.appendChild(tbl);
}

function stopGame(){
  let tbl = document.getElementsByClassName('nonogram_table');
  
  tbl[0].remove();
  btn_start.style.display = 'inline-block';
  btn_result.style.display = 'none';
  btn_reset.style.display = 'none';
  btn_stop_game.style.display = 'none';
  winner.style.display = 'none';
  btn_usergame.style.display = 'none';
  btn_show_errors.style.display = 'none';
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
  let n = 0;
  for(var i=0; i<30; i++){
    
    let tr = document.createElement('tr');
    for(var j=0;j<35;j++){
      let td = document.createElement('td');
      
      td.innerText = '\u00A0'; 
      td.id = n;
      td.classList.add('pic');
      td.setAttribute("oncontextmenu", "oncell_rightClick(event)");
      td.setAttribute("onmousedown", "oncell_leftClick(event)");
      
      tr.appendChild(td);
      n++;
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

  allCells = document.getElementsByClassName('pic');
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
  let index = div.id;
  userGame[index] = 0;

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
  let div = e.target;
  e.preventDefault();

  if (e.button == 0) {
    div.innerText = '';
    let index = div.id;
    if ( div.style.backgroundColor == 'white' || div.style.backgroundColor == '') {
      div.style.backgroundColor = 'black';
      userGame[index] = 1;
    }
    else {
      div.style.backgroundColor = 'white';
      userGame[index] = 0;
    }
  }

  checkResultGame();
}

function showUserGame(){
  

  for(var i=0; i<userGame.length; i++)
  {
    let cell = allCells[i];
    if(userGame[i] == 1){
      cell.style.backgroundColor = 'black';
    }
    else {
      cell.style.backgroundColor = 'white';
    }
  }
}

function checkResultGame(){
  let error = false;

  for(var i=0; i<solution.length; i++)
  {
    let cell = allCells[i];
    if(solution[i] != userGame[i]){
      error = true;
      //console.log("error in index: " + i);
      //console.log(error);
      break;
    }
  }
  showWinnerMessage(error);
}

function show_errors(){
  let error = false;
  for (var i=0; i<solution.length; i++) {
    if (userGame[i] == 1 ){
      if (userGame[i] != solution[i]){
        let cell = allCells[i];
        cell.style.backgroundColor = 'red'; 
        error = true; 
      }  
    }
  }
  if(!error) {
    alert('пока ошибок нет!');
  }
  setTimeout(showUserGame,3000);
}

function showWinnerMessage(error){
  if ( !error) {
    winner.style.display = 'block';
  }
  else {
    winner.style.display = 'none';
  }
}

function  show_result(){
  let allCells = document.getElementsByClassName('pic');

  for(var i=0; i<solution.length;i++){
    let div = allCells[i];
    if(solution[i] == 1) {
      div.style.backgroundColor = 'black';
    }
    else {
      div.style.backgroundColor = 'white';
    }
  }
  checkResultGame();
}

function reset() {
  let maintbl = document.getElementsByClassName('pic');
  userGame.fill(0);

  winner.style.display = 'none';

  for(var i=0; i<maintbl.length; i++){
    maintbl[i].style.backgroundColor = 'white';
    maintbl[i].innerText = '';
  }
}
/*krossword_page end*/