const reverseSeq = (n) => {
  //   let arr = [];
  //   for (i = 1; i <= n; i++) {
  //     arr.push(i);
  //   }
  //   return arr;
  return Array(n)
    .fill(0)
    .map((e, i) => {
      return n - i;
    });
};
console.log(reverseSeq(5));
