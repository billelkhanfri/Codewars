function even_odd(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(even_odd(8));

function odd_even(value) {
  let num = value % 2;
  return num === 0 ? "even" : "odd";
}
console.log(odd_even(12));
