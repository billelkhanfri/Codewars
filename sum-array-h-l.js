function sumArr(arr) {
  if (arr === null) return 0;

  //   let minValue = Math.min(...arr);
  //   let maxValue = Math.max(...arr);
  //   let fillered = arr.filter((x) => x !== minValue && x !== maxValue);

  //   let result = fillered.reduce((acc, curr) => acc + curr, 0);
  //use other built in function
  let result = arr
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, curr) => acc + curr, 0);

  return result;
}

console.log(sumArr([9, 5, 7, 8]));

//Ecrire une fonction qui prend deux nombres en entrée et qui retourne leur somme.
function sum_n(n1, n2) {
  let somme = n1 + n2;
  return somme;
}
console.log(sum_n(8, 9));

//Ecrire une fonction qui prend une chaîne de caractères en entrée et qui retourne la longueur de la chaîne.
function string_lenght(string) {
  let leng = string.length;
  return leng;
}
console.log(string_lenght("billelkhanfri"));

//Ecrire une fonction qui prend un tableau en entrée et qui retourne le plus grand élément du tableau
function maxVal(arr) {
  let maxValue = Math.max(...arr);
  return maxValue;
}
console.log(maxVal([8, 11]));
// Ecrire une fonction qui prend une chaîne de caractères en entrée et qui retourne la même chaîne, mais avec les lettres en majuscules.
function caps(string) {
  let capital = string.toUpperCase();
  return capital;
}
console.log(caps("billlel"));

//Ecrire une fonction qui prend un tableau de nombres en entrée et qui retourne la moyenne des nombres du tableau.

function moyenne_val(array) {
  let somme = array.reduce((acc, curr) => acc + curr, 0);
  let meduiùmValue = somme / array.length;
  return meduiùmValue;
}
console.log(moyenne_val([4, 8, 8, 6, 10]));

//Ecrire une fonction qui prend un tableau de nombres en entrée et qui retourne le tableau trié par ordre croissant.
function croissant(array) {
  let assendArray = array.sort((a, b) => a - b);
  return assendArray;
}
console.log(croissant([15, 12, 55, 78, 659, 25]));

function sheepArray(arr) {
  if (arr === false || arr === undefined || arr === null) {
    return;
  } else {
    return arr.filter(Boolean).length;
  }
}
console.log(
  sheepArray([
    [
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
    ],
  ])
);
