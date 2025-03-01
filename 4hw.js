for (let i = 0; i < 2; i++) {
  console.log('Привет');
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  
for (let i = 7; i <= 22; i++) {
  console.log(i);
}

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
  };
  
  for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
  }

  let n = 1000;
let num = 0; 

while (n >= 50) {
  n = n / 2;
  num++;
}

console.log("Результат: ", n);
console.log("Количество итераций: ", num);


let firstFriday = 5; 


for (let i = 1; i <= 4; i++) {
  
  if (i === firstFriday) {
   
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчёт.`);
  }
}

console.log(`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчёт.`);

const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);


while (startDate.getDay() !== 5) { 
  startDate.setDate(startDate.getDate() + 1); 
}


for (let date = startDate.getDate(); date <= 31; date += 7) {
  console.log(`Сегодня пятница, ${date}-е число. Необходимо подготовить отчёт.`);
}