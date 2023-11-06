const name = 'Max'; // why const? because we don't want to change the value of name later
let age = 29; // why let? because we want to change the value of age later
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}

const add = (a, b) => a + b; // this is a shorter way of writing a function
const addOne = a => a + 1; // this is a shorter way of writing a function
const addRandom = () => 1 + 2; // this is a shorter way of writing a function

console.log(summarizeUser(name, age, hasHobbies));