var name = 'max';
var age  = 24;
var hasHobbies = true;

const userDetails = (userName, userAge, userHobbies) => {

    return ('name is ' + userName + ' age is ' + userAge + ' have hobbies ' + userHobbies);
}

const sum = (a,b) =>{
    return a+b;
}

const sum1 = (a,b) => a+b;
const sumOne = a => a+5;
const addR = () => 8+6;

console.log(addR());
console.log(sumOne(15));
console.log(sum1(5,6));
console.log(sum(1,2));

console.log(userDetails(name,age,hasHobbies));