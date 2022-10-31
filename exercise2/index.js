const form = document.querySelector('.form');
const brand = document.querySelector('.brand');
const model = document.querySelector('.model');
const fuels = document.querySelectorAll('.inputFuels');
const years = document.querySelectorAll('.inputYears');
const drives = document.querySelectorAll('.inputDrives');
const result = document.querySelector('.result');

form.onsubmit = (evt) => {
	evt.preventDefault();
	let total;
	const brands = brand.value;
    const models = model.value;
	total = +brands;
    total = +models;
	console.log(total);

	for (let i = 0; i < fuels.length; i++) {
		if (fuels[i].checked) {
			total = total + Number(fuels[i].value);
		}
	}
    for (let i = 0; i < years.length; i++) {
		if (years[i].checked) {
			total = total + Number(years[i].value);
		}
	}
	for (let i = 0; i < drives.length; i++) {
		if (drives[i].checked) {
			total = total + Number(drives[i].value);
		}
	}
	result.innerHTML = `Стоимость автомобиля ${total}`;
};