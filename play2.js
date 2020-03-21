const person = {
    name: "SPIDY",
    age: 24,
    greet1: function() {
        console.log("hi iam " +this.name)
    },
    greet(){
        console.log("iam " +this.age+ " years old.");
    }
    
}

const hobbies = ["swimming", "eating"];
// for(let hobby of hobbies){
//     console.log(hobby);
// }

console.log(hobbies.map(hobby => 
     'hobby : ' +hobby
));
console.log(hobbies);

hobbies.forEach(function(item,index,array) {
    console.log(item,index,array);
    
});

let newHobbies = hobbies.push("singing");
console.log(hobbies);

let lastR = hobbies.pop();
console.log(hobbies);

// let firstR = hobbies.shift();
// console.log(hobbies);

let newL = hobbies.unshift("dancing");
console.log(hobbies);

console.log(hobbies.indexOf("eating"));
console.log(hobbies.splice(1));

console.log(hobbies.slice());


const copiedA = [hobbies];
console.log(copiedA);

const copiedB = [...hobbies];
console.log(copiedB);
 
const copiedP = {person}
console.log(copiedP);

const copiedPB = {...person}
console.log(copiedPB);

const toArray = (arg1,arg2,arg3) => {
    return [arg1,arg2,arg3];
}
console.log(toArray(1,2,3,4));

const toArray1 = (...args) => {
    return args;
}
console.log(toArray1(1,2,3,5,6,7));