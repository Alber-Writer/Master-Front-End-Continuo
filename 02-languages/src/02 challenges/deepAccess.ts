/* deepAccess */
console.log("------------deepAccess------------");

// Helpers
type Head<U> = U extends [infer R, ...any[]]
  ? R
  : never;

type Tail<U> = U extends [any, ...(infer R)]
  ? R
  : never;

// Declaración final
type DeepGet<O, Path extends any[]> = Head<Path> extends keyof O
  ? (Tail<Path> extends (never | [])
    ? O[Head<Path>]
    : DeepGet<O[Head<Path>], Tail<Path>>)
  : never;

type Get = <O extends object, Path extends (keyof any)[]>(obj: O, ...keys: Path) => DeepGet<O, Path>;

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      }
    }
  }
};


const deepGet: Get = (obj, ...keys) => {
  if (keys.length <= 0) return obj;
  return keys.reduce((accObj, current) =>
    accObj[current], obj)
}

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));  // {a: 1, b: {...}}

console.log("----------------------------------")


console.log("------------deepAccess: deepSet------------");

const myObjectToSet = {};

type DeepSet = <O extends object, T extends (keyof any)[]>(data: unknown, obj: O, ...keys: T) => void;

const deepSet: DeepSet = (data, obj, ...keys) => keys.reduce((accObj, current, i, arr) => {
    if (i === (arr.length - 1)) return accObj[current] = data;
    if (typeof accObj[current] !== "object") accObj[current] = {};
    return accObj[current]
  }, obj);

deepSet(1, myObjectToSet, "a", "b");
console.log(JSON.stringify(myObjectToSet));  // {a: { b: 1}}
deepSet(2, myObjectToSet, "a", "c");
console.log(JSON.stringify(myObjectToSet));  // {a: { b: 1, c: 2}}
deepSet(3, myObjectToSet, "a");
console.log(JSON.stringify(myObjectToSet));  // {a: 3}
deepSet(4, myObjectToSet);
console.log(JSON.stringify(myObjectToSet));  // Do nothing // {a: 3}
