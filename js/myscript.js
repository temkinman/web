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
  // document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
/*end*/

