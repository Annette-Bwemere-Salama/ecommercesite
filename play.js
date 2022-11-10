const person = {
    name: "Annette",
    age: 29,
    greet() {
        console.log("Hi, I am " + this.name);
    }
};

const printName = ({ name }) => {
    console.log(name);
}

printName(person)

const { name, age } = person;
console.log(name, age);
// const copiedPerson = { ...person };
// console.log(copiedPerson) ;
// const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby' + hobby
// ));
// console.log(hobbies);

// const copieArray = [...hobbies];
// console.log(copieArray);

// const toArray = (...arg) =>{
//  return arg;
// }

// console.log(toArray(1,2,3,4));