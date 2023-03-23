console.log("************** DELIVERABLE 02 *********************");
console.log("Concat");

{
  type SimpleArray = (string | number | boolean)[];

  const arr: SimpleArray = [1, 2, 3, 4];
  const arr2: SimpleArray = ["a", "b", "c", "d"];
  const arr3: SimpleArray = ["AA", "BB", "CC", "DD"];

  const concat = (a: SimpleArray, b: SimpleArray): SimpleArray => [...a, ...b];
  console.log("concat", concat(arr, arr2));

  const concatMultiple = (...arrs: SimpleArray[]): SimpleArray => arrs.reduce((acc, current) => {
    return acc = [...acc, ...current]
  }, []);
  console.log("concatMultiple", concatMultiple(arr, arr2, arr3));
}