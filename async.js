// setTimeout(() => {
//     console.log("time out!!")
// },3000)

// let timeout = () =>{
//     setTimeout(() => {
//         console.log("time out!!");
//     },3000)
    
// }

const fetchData = (callback) =>{
    setTimeout(() =>{
        callback("done!!")
    },1500)
}

setTimeout(() => {
    console.log("timer is done!");
    fetchData((text) =>{
        console.log(text);
    })
},2000)

// timeout();

console.log("hi");
console.log("hi");
console.log("hi");
