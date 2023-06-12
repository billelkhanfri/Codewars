function contamination(text, char) {
  if (text === "" || char === "") {
    return "";
  } else {
    let firstText = text.split("");
    return firstText.map((x) => x.replace(x, char)).join("");
  }
}

console.log(contamination("billel", "R"));
