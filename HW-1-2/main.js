// У нас есть коробка для яблок. В которой изначально пусто.

// Написать несколько операций по изменению количества яблок в коробке (2-3)

// После каждой операции вывести в консоль красивое сообщение с помощью, например,
// "В ящике 10 яблок" (не заморачиваться с падежом слова "яблоко")

// После каждой операции вывести «состояние» коробки: «Пустая», «Полная», 
//«Кредитная коробка» (используем если)

// Вынести процесс логирования в консоль в отдельную функцию


let balance = 0;

console.log("Ваш баланс: " + balance + "тг.");

if (balance > 0) {
@@ -36,6 +35,8 @@ if (balance > 0) {
}

let a = "c";
a = "b";
a + 1;

if (true) {
  a = "a";
  console.log(a);
}
if (true) {
  let a = "b";
  console.log(a);
}
console.log(a);



let fruit = "апельсин"; // "апельсин", "груша"

switch (fruit) {
  case "яблоко":
    console.log("Яблоко зеленое");
    break;

  case "апельсин":
    console.log("Апельсин оранжевый");
    break;

  case "груша":
    console.log("Груша желтая");
    break;

  default: 
    console.log("Неизвестный фрукт");
    break;
}


let number = -110;
let isPositive = 
  number > 0 
  ? "Положительное" 
  : "Не положительное";

console.log(
  number === 0 
  ? "Ноль"
  : (number > 0 
    ? "Положительное" 
    : "Отрицательное"
  )
);


let negativeNumber = number * (
  number > 0 
  ? -1 
  : 1
);
// number * (??)
// -110 * 1 = -110
// 110 * -1 = -110


console.log(negativeNumber);

// let var = условие ? выражение если условие верное : выражение если условие не верно

// if (условие) {
//  инструкции если условие верное 
// } else {
//  инструкции  если условие не верно
// }



// true false

// 0 = false
// остальные числа true

// "" = false
// остальные true


let divisor = 10;
let divider = 40;

console.log(divider && divisor / divider);

let fullname = "Антон";
let age = "28";

console.log("Имя: " + fullname + (age && " Возраст: " + age));

// 