/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(string) {
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
    string[0] = string[0].toUpperCase();
    if (string[i] === " ") {
      string[i + 1] = string[i + 1].toUpperCase();
    }
  }
  return string.join("");
}
console.log(capitalizeWords("hello world from javascript"));
