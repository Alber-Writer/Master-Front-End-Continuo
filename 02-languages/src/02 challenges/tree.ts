/* tree */
console.log("------------tree------------");

interface Tree<T> {
  leaf: T;
  branch?: Array<Tree<T>>;
}

const tree: Tree<string> = {
  leaf: "I'am a Leaf",
  branch: [
    {
      leaf: "I'am a level 2 Leaf",
      branch: [
        { leaf: "I'am a level 3 Leaf", }
      ]
    }]
}

console.log("Joaquin: Preguntar por objeto dentro de objeto en vez de array: [{},{}]");
// const tree2 = {
//   leaf: "I'am a Leaf",
//   branchLvl1: {
//     leafLvl2: "I'am a level 2 Leaf",
//     branchLvl2: {
//       leafLvl3: "I'am a level 3 Leaf",
//       leafLvl3bis: "I'am a level 3 Leaf duplicated"
//     }
//   }
// }
interface Tree2<T> {
  leaf?: T;
  branch?: Tree2<T>;
}
const tree2: Tree2<string> = {
  leaf: "I'am a Leaf",
  branch: {
    leaf: "I'am a level 2 Leaf",
    branch: {
      branch: { leaf: "I'am a level 3 Leaf", }
    }
  }
}


console.log("----------------------------------")