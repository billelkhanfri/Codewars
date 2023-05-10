function positiveSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

console.log(positiveSum([-1, -2, -3, 5, 8 ]));

// or
function sumPositiv(arr) {
  let some = 0;

  let arr1 = arr.filter((x) => x > 0);
  let somme = arr1.reduce((acc, current0) => acc + current0, some);

  return somme;
}
console.log(sumPositiv([2, 5, -6, -8]));
