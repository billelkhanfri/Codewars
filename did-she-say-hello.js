function validateHello(greetings) {
  let reg = /hello|ciao|salut|ahoj|czesc|hallo|hola/i;
  return greetings.match(reg);
}
console.log(validateHello("hola"));
