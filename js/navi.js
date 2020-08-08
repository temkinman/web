document.addEventListener("DOMContentLoaded", createNaviMenu);

function createNaviMenu() {
  let navigation = document.querySelector('[index]');
  let naviNames = [ 'Форматирование', 'CSS', 'JS', 'Кроссворд', 'Форма', 'Даты'];
  let naviRefs = [ 'index.html', 'css_page.html', 'js_page.html', 'krossword.html', 'form.html', 'dates.html'];
  let index = navigation.getAttribute('index');
  let ul = document.createElement('ul');

  for (var i=0; i<naviNames.length; i++) {
    let li = document.createElement('li');
    link = document.createElement('a');
    link.href = naviRefs[i];
    link.innerText = naviNames[i];

    if(index == i) {
      link.classList.add('active');
    }
    li.appendChild(link);
    ul.appendChild(li);
  }

  navigation.appendChild(ul);
}


function show(id){

  let alldiv = document.getElementsByClassName('d');
  let numLinkId = id.replace(/\D+/g,"");
  let arrLinks = document.getElementsByClassName('a');
  let columns = 0;

  if(document.getElementById(id).text == 'Двухколонный') {
    columns = 1;
    if (screen.width <= 770) {
      let col = document.getElementsByClassName('columns');
      col.style.display = 'block !important';
    }
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