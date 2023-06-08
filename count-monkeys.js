function monkeyCount(n) {
  // let arr = [];
  // for (i = 1; i <= n; i++) {
  //   arr.push(i);
  // }
  // return arr;
  return Array.from({ length: n }, (e, i) => i + 1);
}
console.log(monkeyCount(78));
