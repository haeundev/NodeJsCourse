// learn about object literal syntax
// object literal syntax is a shorthand for creating objects
const person = {
    name: 'Lee',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();

const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby);
}

const mapped = hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
});

hobbies.push('Programming');

console.log(hobbies);
console.log(mapped);

// learn about spread and rest operators
// spread operator is used to split up array elements or object properties
// rest operator is used to merge a list of function arguments into an array
const copiedArrayWrong = [hobbies]; // this is not a way to copy an array
const copiedArray = [...hobbies]; // this is a way to copy an array
const copiedPerson = {...person}; // this is a way to copy an object
console.log(copiedArrayWrong);
console.log(copiedArray);
console.log(copiedPerson);

// learn about rest operator
const toArray = (...args) => {
    return args;
}
// this would allow us to pass in as many arguments as we want