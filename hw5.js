function number (a, b) {
   if (a < b) {
    return a;
   } else {
    return b;
   }
    
   }
   console.log (number(8, 4)); 
   console.log (number(6, 6)); 

   function isEven (number) {
    if (number % 2 === 0) {
        return "Число четное"
    } else {
       return "Число нечетное"
    } 
 }
 console. log(isEven(7));
 console. log(isEven(2));

 function printSquare(number) {
    console.log(number * number);
}

function getSquare(number) {
    return number * number;
}

function greetUserByAge() {
    const age = parseInt(prompt("Сколько вам лет?"));
  
    if (isNaN(age) || age < 0) {
      alert("Вы ввели неправильное значение");
    } else if (age >= 0 && age <= 12) {
      alert("Привет, друг!");
    } else {
      alert("Добро пожаловать!");
    }
  }
  function multiplyNumbers(num1, num2) {
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
      return 'Одно или оба значения не являются числом';
    } else {
      return num1 * num2;
    }
  }
  function cubeNumber() {
    const input = prompt("Введите число:");
    const number = parseFloat(input);
  
    if (isNaN(number)) {
      return "Переданный параметр не является числом";
    } else {
      const cube = number ** 3;
      return `Число ${number} в кубе равняется ${cube}`;
    }
  }
  const circle1 = {
    radius: 0,
    getArea: function() {
      return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  const circle2 = {
    radius: 0,
    getArea: function() {
      return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  