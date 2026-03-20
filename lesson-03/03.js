// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num_1, num_2, num_3) {
  if (num_1 > num_2 && num_1 > num_3) {
    return num_1;
  } else if (num_2 > num_1 && num_2 > num_3) {
    return num_2;
  } else {
    return num_3;
  }
}
console.log(findLargest(5, 7, 9));
