// Знаходимо елементи HTML, з якими будемо працювати
const form = document.querySelector('form');
const typetrInput = document.querySelector('#typetr');
const amountInput = document.querySelector('#amount');
const dateInput = document.querySelector('#date');
const areaInput = document.querySelector('#area');
const adressInput = document.querySelector('#adress');
const table = document.querySelector('#requestTable tbody');

// Створюємо масив для зберігання заявок
let requests = [];

// Функція, яка додає нову заявку до масиву та оновлює таблицю
function addRequest(event) {
	event.preventDefault();
  
// Створюємо об'єкт для нової заявки
const request = {
	typetr: typetrInput.value,
	amount: amountInput.value,
	date: dateInput.value,
	area: areaInput.value,
	adress: adressInput.value
};
  
// Додаємо нову заявку до масиву
  requests.push(request);
  
  // Очищаємо форму
  form.reset();
  
  // Оновлюємо таблицю
  updateTable();
}

// Функція, яка оновлює таблицю
function updateTable() {
// Очищаємо таблицю
table.innerHTML = '';

// Проходимо по всіх заявках у масиві та додаємо їх до таблиці
requests.forEach(request => {
    const row = document.createElement('tr');
    const typetrCell = document.createElement('td');
    const amountCell = document.createElement('td');
    const dateCell = document.createElement('td');
    const areaCell = document.createElement('td');
	 const adressCell = document.createElement('td');
    
    typetrCell.innerText = request.typetr;
    amountCell.innerText = request.amount;
    dateCell.innerText = request.date;
    areaCell.innerText = request.area;
    adressCell.innerText = request.adress;

    row.appendChild(typetrCell);
    row.appendChild(amountCell);
    row.appendChild(dateCell);
    row.appendChild(areaCell);
	 row.appendChild(adressCell);

    table.appendChild(row);
  });
}

// Додаємо обробник події на форму
form.addEventListener('submit', addRequest);
// Функція, яка видаляє заявку з масиву та оновлює таблицю
function removeRequest(index) {
  requests.splice(index, 1);
  updateTable();
  }
  
// Функція, яка створює кнопку для видалення заявки
  function createDeleteButton(index) {
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Замовлення виконане';
  deleteButton.addEventListener('click', () => removeRequest(index));
  return deleteButton;
  }
  
// Функція, яка оновлює таблицю
  function updateTable() {
  // Очищаємо таблицю
  table.innerHTML = '';
  
// Проходимо по всім заявкам у масиві та додаємо їх до таблиці
  requests.forEach((request, index) => {
  const row = document.createElement('tr');
  const typetrCell = document.createElement('td');
  const amountCell = document.createElement('td');
  const dateCell = document.createElement('td');
  const areaCell = document.createElement('td');
  const adressCell = document.createElement('td');
  const deleteCell = document.createElement('td');
  

  typetrCell.innerText = request.typetr;
  amountCell.innerText = request.amount;
  dateCell.innerText = request.date;
  areaCell.innerText = request.area;
  adressCell.innerText = request.adress;
  deleteCell.appendChild(createDeleteButton(index));
  
  row.appendChild(typetrCell);
  row.appendChild(amountCell);
  row.appendChild(dateCell);
  row.appendChild(areaCell);
  row.appendChild(adressCell);
  row.appendChild(deleteCell);
  
  table.appendChild(row);
  });
  }

// Функція, яка оновлює підрахунок заявок
function updateRequestCount() {
  const requestCount = document.querySelector('#requestCount');
  const count = requests.length;
  requestCount.innerText = `Черга із замовлень: ${count}`;
}

// Функція, яка додає нову заявку до масиву та оновлює таблицю
function addRequest(event) {
  event.preventDefault();

  // Створюємо об'єкт для нової заявки
  const request = {
	typetr: typetrInput.value,
	amount: amountInput.value,
	date: dateInput.value,
	area: areaInput.value,
	adress: adressInput.value
  };

  // Додаємо нову заявку до масиву
  requests.push(request);

  // Очищаємо форму
  form.reset();

  // Оновлюємо таблицю та підрахунок заявок
  updateTable();
  updateRequestCount();
}

// Функція, яка видаляє заявку з масиву та оновлює таблицю
function removeRequest(index) {
	requests.splice(index, 1);
  updateTable();
  updateRequestCount();
}
  
  // Додаємо обробник події на форму
  form.addEventListener('submit', addRequest);


  function updateOptions() {
	var companySelect = document.getElementById("typecomp");
	var typeSelect = document.getElementById("typetr");
	var selectedCompany = companySelect.value;

	// Очистка списку видів відходів
	while (typeSelect.options.length > 0) {
		typeSelect.options.remove(0);
	}

	// Додавання опції "Оберіть тип відходів" в список видів відходів
	typeSelect.options.add(new Option("Оберіть тип відходів", "", true, true));
	// Відключення можливості вибору опції "Оберіть тип відходів"
	typeSelect.options[0].disabled = true;

	// Додавання опцій в залежності от обраного типу компанії
	if (selectedCompany === "manufacturing") {
		typeSelect.options.add(new Option("Пластикові корпуси обладнання"));
		typeSelect.options.add(new Option("Витратні матеріали з пластику"));
		typeSelect.options.add(new Option("Пластикова тара"));
		typeSelect.options.add(new Option("Змішані відходи"));
		document.getElementById("textInput").disabled = true;
	} else if (selectedCompany === "catering") {
		typeSelect.options.add(new Option("Пластикові упаковки продуктів"));
		typeSelect.options.add(new Option("Одноразовий пластиковий посуд"));
		typeSelect.options.add(new Option("Пластикові пляшки"));
		typeSelect.options.add(new Option("Змішані відходи"));
		document.getElementById("textInput").disabled = true;
	} else if (selectedCompany === "medical") {
		typeSelect.options.add(new Option("Бахіли"));
		typeSelect.options.add(new Option("Ємності для аналізів"));
		typeSelect.options.add(new Option("Медичні прилади з пластиковим корпусом"));
		typeSelect.options.add(new Option("Змішані відходи"));
		document.getElementById("textInput").disabled = true;
	}
	else if (selectedCompany === "office") {
		typeSelect.options.add(new Option("Жалюзі"));
		typeSelect.options.add(new Option("Пластикові меблі"));
		typeSelect.options.add(new Option("Канцелярське приладдя"));
		typeSelect.options.add(new Option("Змішані відходи"));
		document.getElementById("textInput").disabled = true;
	}
	else if (selectedCompany === "other") {
		typeSelect.options.add(new Option("Тип відходів не із переліку"));
		document.getElementById("textInput").disabled = false;
	}
	else if (selectedCompany === "private") {
		typeSelect.options.add(new Option("Тип відходів не із переліку"));
		document.getElementById("textInput").disabled = false;
	}
 }