/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
  let arr = [];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i] + str[i]);
  }
  arr = `${arr}`;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ",") {
      newStr += arr[i];
    }
  }
  return newStr;
}

console.log(doubleEachCharacter("hello"));
