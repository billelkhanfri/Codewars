function findAverage(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array.reduce((acc, curr) => acc + curr, 0) / array.length;
  }
}
console.log(findAverage([1, 10, 1]));
