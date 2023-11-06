// learn about destructuring

// object destructuring
const person = {
    name: 'Lee',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const { name, age } = person;  // name has to match the property name in the object
console.log(name, age);


// array destructuring
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);