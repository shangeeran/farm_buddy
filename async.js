// setTimeout(() => {
//     console.log("time out!!")
// },3000)

// let timeout = () =>{
//     setTimeout(() => {
//         console.log("time out!!");
//     },3000)
    
// }

const fetchData = () => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("done!!")
        },1500)
        
    });
    return promise;
    
};

setTimeout(() => {
    console.log("timer is done!");
    fetchData().then(text => {
        console.log(text);
        return fetchData().then(text2 =>{
            console.log(text2);
        })
    });
},2000)

// timeout();

console.log("hi");
console.log("hi");
console.log("hi");
