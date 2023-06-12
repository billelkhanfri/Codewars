function contamination(text, char) {
  if (text === "" || char === "") {
    return "";
  } else {
    let firstText = text.split("");
    return firstText.map((x) => x.replace(x, char)).join("");
  }
}
//replacements = (text, char) => text.split("").fill(char).join("");
//replacements = (text, char) => char.repeat(text.length);
replacements = (text, char) => text.replace(/./g, char);
console.log(replacements("billel", "h"));
