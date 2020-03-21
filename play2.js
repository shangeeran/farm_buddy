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