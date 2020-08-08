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