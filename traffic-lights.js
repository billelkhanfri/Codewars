function updateLight(current) {
  //   let arr = ["green", "yellow", "red"];
  //   let index = arr.findIndex((e) => e === current);
  //   return current === arr[arr.length - 1] ? arr[0] : arr[index + 1];
  return {
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current];
}
console.log(updateLight("green"));

