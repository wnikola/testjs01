console.log('It Works! :D');

const insert = document.querySelector('#btn-add');
let nameInput = document.querySelector('#txt-company-name');
let dateInput = document.querySelector('#txt-time');
let valueInput = document.querySelector('#txt-value');
const itemList = document.querySelector('#item-list');
const inputContainer = document.querySelector('.input-container');

let fDel = document.querySelector('.item-trashCan');

fDel.addEventListener('click', (e) => {
  if (!confirm('Are you sure?')) {
    return;
  }
  let remBtn = e.target;
  let remDiv = remBtn.parentElement.parentElement;
  remDiv.remove();
});

class Item {
  constructor(name, pib, date, value, currency, time, dateStamp) {
    this.name = name;
    this.pib = pib;
    this.dateIssued = date;
    this.value = Number(value);
    this.currency = currency;
    this.timeStamp = time;
    this.dateStamp = dateStamp;
  }
}

let niz = [];

let prikaziNiz = document.createElement('button');
prikaziNiz.innerHTML = 'Ispisi niz';

inputContainer.appendChild(prikaziNiz);

prikaziNiz.addEventListener('click', () => {
  console.log(niz);
});

function remFun(e) {
  if (!confirm('Are you sure?')) {
    return;
  }
  let remBtn = e.target;
  let remDiv = remBtn.parentElement.parentElement;
  remDiv.remove();
}

insert.addEventListener('click', () => {
  addItem();
});

function addItem() {
  let itemConatainer = document.createElement('div');
  itemConatainer.className = 'item-container';
  let itemInfo = document.createElement('div');
  itemInfo.className = 'item-info';
  let name = document.createElement('label');
  name.className = 'company-name';
  let itemsContainer = document.createElement('div');
  let timeStampContainer = document.createElement('div');
  let insertTimestamp = document.createElement('label');
  insertTimestamp.className = 'insert-timestamp';
  let itemActions = document.createElement('div');
  itemActions.className = 'item-actions';
  let pib = document.createElement('label');
  pib.className = 'company-pib';
  let timeCreated = document.createElement('label');
  timeCreated.className = 'time-created';
  let time = document.createElement('label');
  time.className = 'time-created';
  let value = document.createElement('label');
  value.className = 'price-value';
  let pibInput = document.querySelector('#txt-company-pib');
  let remove = document.createElement('button');
  remove.className = 'item-trashCan';
  remove.innerHTML = 'DELETE';
  remove.addEventListener('click', remFun);

  itemActions.appendChild(remove);

  if (nameInput.value.trim() === '') {
    alert('Naziv kompanije ne sme biti blanko znak');
    return;
  }

  if (isNaN(pibInput.value) || pibInput.value.length !== 8) {
    console.log(pibInput.value.length);
    alert('PIB mora biti osmocifreni broj');
    return;
  }

  if (isNaN(valueInput.value)) {
    alert('Value mora biti broj');
    return;
  }

  name.innerHTML = `${nameInput.value} `;
  pib.innerHTML = `${pibInput.value} `;
  timeCreated.innerHTML = `${dateInput.value} `;
  value.innerHTML = `${valueInput.value} RSD`;

  let date = new Date();
  let timeStamp = `[<span>${date.getFullYear()}-${date.getMonth() + 1} - ${date.getDate()}]</span><span>@${date.getHours()}:${date.getMinutes()}</span>`;
  insertTimestamp.innerHTML = timeStamp;

  itemsContainer.appendChild(name);
  itemsContainer.appendChild(pib);
  itemsContainer.appendChild(timeCreated);
  itemsContainer.appendChild(value);

  timeStampContainer.appendChild(insertTimestamp);

  itemInfo.appendChild(itemsContainer);
  itemInfo.appendChild(timeStampContainer);

  itemConatainer.appendChild(itemInfo);
  itemConatainer.appendChild(itemActions);
  itemList.appendChild(itemConatainer);



  let ntime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  let ndate = `${date.getFullYear()}-${date.getMonth() + 1} - ${date.getDate()}`;


  niz.push(new Item(nameInput.value, pibInput.value, dateInput.value, valueInput.value, 'RSD', ntime, ndate));

  console.log(new Item(nameInput.value, pibInput.value, dateInput.value, valueInput.value, 'RSD', ntime, ndate));

  nameInput.value = '';
  pibInput.value = '';
  dateInput.value = '';
  valueInput.value = '';

}