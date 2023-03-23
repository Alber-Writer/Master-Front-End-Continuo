console.log("************** DELIVERABLE 01 *********************");
console.log("Array operations");

{
  type CommonSign = <T>([]: T[]) => T;
  
  const arr: number[] = [1, 2, 3, 4]

  const head: CommonSign = ([first, ...rest]) => first;
  console.log("head:", head(arr));

  const tail = <T>([first, ...rest]: T[]): T[] => rest;
  console.log("tail: ", tail(arr));

  const init = <T>([...values]: T[]): T[] => {
    values.pop();
    return values
  };
  console.log("init: ", init(arr));

  const last: CommonSign = ([...values]) => values.at(-1);
  console.log("last: ", last(arr));
}
