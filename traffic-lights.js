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
//replacements = (text, char) => text.split("").fill(char).join("");
//replacements = (text, char) => char.repeat(text.length);
replacements = (text, char) => text.replace(/./g, char);
console.log(replacements("billel", "h"));
