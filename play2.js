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