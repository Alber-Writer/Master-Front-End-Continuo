/* flattenArray */
console.log("------------flattenArray------------");

type TreeNodeR<T> = T | Array<TreeNodeR<T>>;
type Flattener = <T>(inputArray: TreeNodeR<T>) => Array<T>

const sample: TreeNodeR<number> = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
      console.warn('Ver con Joaquin este tipado:\nhttps://stackoverflow.com/questions/61420027/proper-typing-for-array-flatinfinity');
      // Ver con Joaquin este tipado: infinity o 20
const flattener:Flattener = (inputArray:any[]) => inputArray.flat(20);

console.log('flattener(sample):', flattener(sample));

console.log("----------------------------------")
