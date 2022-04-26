const summa = document.querySelector('.input__summa');
const period = document.querySelector('.input__period');
const rate = document.querySelector('.input__rate');
const btn = document.querySelector('.btn-calc');
const tbody = document.querySelector('tbody');



// function getSumma() {

// 	let genSumma = summa.value * (procent.value / 100);
// 	let month = summa.value / srok.value;
// 	let monthProcent = genSumma / srok.value;
// 	let result = month + monthProcent;
// 	console.table(result);

// 	for (let i = 0; i < srok.value; i++) {
// 		month = summa.value / srok.value;
// 		console.log(`${i} месяц ${month} суммы`);
// 	}

// 	for (let j = 0; j < srok.value; j++) {
// 		monthProcent = genSumma / srok.value;
// 		console.log(`${j} процент за ${monthProcent} месяц`);
// 	}
// }

// btn.addEventListener('click', getSumma);


// Аннуитетный

function getAnuitet() {
	let ann = 0;
	let monthRate = rate.value / 12;
	let topPart = +(summa.value * monthRate).toFixed(2);
	let bottomPart = + (1 - (1 / Math.pow(monthRate + 1, period.value))).toFixed(2);
	ann = +(topPart / bottomPart).toFixed(2);


	tbody.innerHTML += `<tr>
				<td>${monthRate}</td>
				<td>${topPart}</td>
				<td>${bottomPart}</td>
				<td>${ann}</td>
			</tr > `
}


// Дифференциальный

function getDiff() {
	let diff = 0;
	let percents = 0;
	let remainSumma = summa.value;
	let mainDebt = +(summa.value / period.value).toFixed(2);

	for (let i = 0; i < period; i++) {
		percents = +(remainSumma * monthRate).toFixed(2);
		remainSumma -= +(mainDebt).toFixed(2);
		(remainSumma) = +(remainSumma).toFixed(2);
		diff = +(percents + mainDebt).toFixed(2);

	}
	tbody.innerHTML += `<tr>
				<td>${remainSumma}</td>
				<td>${percents}</td>
				<td>${mainDebt} </td>
				<td>${diff}</td>
			</tr > `
}

btn.addEventListener('click', () => {
	const select = document.querySelector('select');
	select.value = getAnuitet();
	select.value = getDiff();

});













