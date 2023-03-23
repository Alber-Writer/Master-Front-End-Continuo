/* understandingJS */
console.log("------------understandingJS------------");


console.log("Cuestión 1:");
let x = NaN;
console.log(x === x); // false

console.log("Cuestión 2:");
const isNaNValue = v => Number.isNaN(v);
console.log(isNaNValue(NaN)); // true

console.log("Cuestión 3: NO CONSEGUIDO!");
const isNaNValue2 = v => Number.isNaN(v);
const w = null;
console.log(!isNaNValue2(w) && w !== w); // false
// [{},null, undefined, NaN, Number.NaN, 0 / 0, "", NaN ** 0, parseInt('bad', 10), Math.sqrt(-1), 1 / 0]
// .forEach((element, i) => {
  // console.log(i, element, !isNaNValue2(element));
  // console.log(i, element, element !== element); // false
// });


console.log("Cuestión 4");
const y = Infinity;
console.log(y + 1 === y - 1); // true


console.log("Cuestión 5: NOUPE");
const z = 1/0;
console.log(z > z); // ?true

console.log("----------------------------------")