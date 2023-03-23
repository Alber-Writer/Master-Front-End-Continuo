console.log("************** DELIVERABLE 03 *********************");
console.log("clone");
{
  const objA = { name: "Maria", surname: "Ibañez", country: "SPA" };
  const deepObj = { name: "Maria", surname: "Ibañez", country: "SPA", branch: { a: "a", b: "b", c: { c1: "yay" } } };

  /* Shallow Copy */
  // function clonar(source) {
  //   return { ...source }
  // }
  // const ShallowCopy = clonar(objA)
  // console.log('objA:', objA);
  // console.log('ShallowCopy:', ShallowCopy);
  // console.log('objA === ShallowCopy:', objA === ShallowCopy);

  function clonar<O extends object>(source: O): O {
    return Object.keys(source).reduce((acc, current) => {
      if (typeof acc[current] === "object") acc[current] = { ...clonar(acc[current]) }
      return acc;
    }, { ...source })
  }

  const deepCopy = clonar(objA);
  console.log('objA:', objA);
  console.log('deepCopy:', deepCopy);
  console.log('objA === deepCopy:', objA === deepCopy);


  console.log("Merge");
  // Types
  interface ObjA {
    name: string, surname: string, country: string
  }
  interface ObjB {
    name: string, age: number, married: boolean
  }

  // Data & functions
  const a: ObjA = { name: "Maria", surname: "Ibañez", country: "SPA" };
  const b: ObjB = { name: "Luisa", age: 31, married: true };
  function merge<O1 extends object, O2 extends object>(source: O1, target: O2): O1 & O2 {
    return { ...clonar(target), ...clonar(source) }
  }
  console.log("merge:", merge(a, b));
}