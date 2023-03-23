/* Memoization */
console.log("------------Memoization------------");
type AcceptedPrim = (string | number | boolean);
type Args = AcceptedPrim[];
// type Args = (string | number | boolean)[];
type Memoize = <T>(fn:T)=>(...args:Args)=>any;
const expensiveFunction = ():number => {
  console.log("Una única llamada");
  return 3.1415;
}

/* Varias líneas */
// const memoize = <T>(fn:T)=> {
//   let firstCall = true;
//   let cachedResult;

//   const firstCallExec = ()=>{
//     firstCall = false;
//     cachedResult = fn();
//     return cachedResult;
//   }
//   return ()=> firstCall ? firstCallExec() : cachedResult
// };

/* Una línea */
const memoize:Memoize = <FnSign>(fn:FnSign) => { let isCached:AcceptedPrim; return () => isCached ? isCached : isCached = (fn as ()=>any)() }

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

console.log("----------------------------------")

/* Con ARGS */
console.log("--------------Memoization 2: con ARGS--------------------")
let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string => 
(count++, `${text} `.repeat(repetitions).trim())



/* Ver error TS fn con Joaquin >>>>*/
console.log("Ver error TS fn con Joaquin");

const memoizeCacheMap:Memoize = <FnSign>(fn:FnSign) => {
  const cache = new Map();
  return (...args) => {
    const argsToString = args.join(",");//Visto buscando que tb lo hacen con JSON.stringify
    cache.has(argsToString)
      ? cache.get(argsToString)
      : cache.set(argsToString, (fn as <X>(...args:Args)=>X)(...args));/* >>>> Da error si no hago esa historia */
    return cache.get(argsToString)
  }
};

const memoizedGreet = memoizeCacheMap(repeatText);

console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(count);                     // 2

console.log("----------------------------------")