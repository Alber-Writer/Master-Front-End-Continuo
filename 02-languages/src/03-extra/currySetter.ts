/* currySetter */
console.log("------------currySetter------------");

/* Types */
interface PersonData {
  name: string,
  surname: string,
  age: number
}

type SetSignature<Obj> = (obj: Obj, property: keyof Obj, value: string | number) => Obj;

/* Data & Functions */
const set: SetSignature<PersonData> = (obj, property, value) => ({ ...obj, ...{ [property]: value } });
// Lo mismo, más entendible (hacemos REST con obj, y machacamos la propiedad en cuestión haciendo REST de un objeto {[key]:value)}:   
// const newObj = {[property] : value};
// return {...obj, ...newObj}

// De primeras lo resolví así
/* const set: SetType<PersonData> = (obj, property, value) => {
  const newObj: PersonData = { ...obj };
  newObj[property] = value;
  return newObj
} */

const julia: PersonData = { name: "Julia", surname: "Álvarez", age: 19 };
const updatedJulia = set(julia, "age", 25);

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false

console.log("----------------------------------");

console.log("------------currySetter: currificado------------");
type CurrySetterSignature<Obj> = (property: keyof Obj) => (obj: Obj, value: string | number) => Obj;

const currySetter:CurrySetterSignature<PersonData> = 
(property) => 
   (obj, value) => 
     ({ ...obj, ...{ [property]: value } });
  
const setName = currySetter("name");
const setSurName = currySetter("surname");
const setAge = currySetter("age");

console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurName(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }

console.log('-------------------------:');