function eliminateUnsetBits(number) {
  //   let bin = number
  //     .split("")
  //     .filter((x) => x === "1")
  //     .join("");
  //   return parseInt(bin, 2);
  return parseInt(number.replace(/0/g, ""), 2);
}

console.log(eliminateUnsetBits("110011"));
