var name = 'max';
var age  = 24;
var hasHobbies = true;

const userDetails = (userName, userAge, userHobbies) => {

    return ('name is ' + userName + ' age is ' + userAge + ' have hobbies ' + userHobbies);
}

console.log(userDetails(name,age,hasHobbies));