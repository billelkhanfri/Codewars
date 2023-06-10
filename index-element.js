function find(array, element) {
  const index = array.findIndex((e) => e === element);
  return index !== -1 ? index : "Not found";
}
console.log(find([2, 3, 5, 7, 11], 181));
