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

person.greet1();
person.greet();
