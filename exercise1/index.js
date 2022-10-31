const input = document.querySelector('.array');
const error = document.querySelector('.errorMessage');
const result = document.querySelector('.result');
const sort = document.querySelector('.sort');
const total = document.querySelector('.total');
let array = [];
input.addEventListener('change', ()=>{
  error.innerHTML = '';
 if(input.value != '' && !/[^0-9\.]/g.test(input.value)){
  array.push(Number(input.value));
  input.value = '';
 } else {
  error.innerHTML=`Введите цифры!`;
 }
});

result.addEventListener('click', () => {
  array.sort();
  sort.innerHTML = `Числа по возрасанию ${array.sort()}`;
  let sum = 0; 
  for (let input of array) {
    sum = sum + input;
  }
  total.innerHTML = `Итого получилось ${sum}`;
});

function resultsArray() {
  newArray = [];
  sort.innerHTML = "";
  total.innerHTML = "";
}