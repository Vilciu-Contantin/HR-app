var button = document.querySelector('#adauga');
var angajatiElement= document.querySelector('#angajati');
var amountToAdd = document.querySelector('#colectareOre');
var dataElement = document.querySelector('#ziua');
var total = document.querySelector('.ore');
var table = document.querySelector('#tabel');
var tableBody = document.querySelector('.tableBody');

console.log(angajatiElement, amountToAdd, dataElement);

button.addEventListener('click', function(){
     
    console.log(angajatiElement.value); 
    console.log(amountToAdd.value);
    console.log(dataElement);
  
  var amountToAddParsed = parseFloat(amountToAdd.value);
  var angajat = angajatiElement.value;
  
  if (isNaN(amountToAddParsed) || angajat === '' || angajat.trim().length === 0 ) {
    console.error('Validarea a depistat probleme')
    return;
  };

  var tableRow = document.createElement('tr');

  tableRow.innerHTML = `<td>${angajat}</td>
                        <td>${amountToAdd.value}</td>
                        <td>${dataElement.value}</td>`

   tableBody.appendChild(tableRow);
  
  // total.innerHTML = `<strong>${ parseFloat(amountToAdd.value) + parseFloat(total.children[0].innerHTML)}</strong>`;
  amountToAdd.value ='';
  angajatiElement.value ='';
});


axios.post('pontaje.json',)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
