// let executor=(resolve,reject)=>{
// console.log("0");
// setTimeout(()=>{
//     resolve();
//     console.log("something");
// },0);//callBack queue
// console.log("1");
// }
// let prom=new Promise(executor);
// console.log(prom);
// console.log("2");
// let prom = new Promise((resolve,reject)=>{
//     queueMicrotask(() =>{
//         console.log(prom);
//         resolve("Hello_World");
//         console.log(prom);
//     })
// });
// console.log(prom);
// console.log("0");
// setTimeout(()=>{
//     console.log("1");
// });
// prom.then((x)=>{
//     console.log(x);
//     console.log("success");
// });
let pincode=700030;
let prom=fetch(`https://api.postalpincode.in/pincode/{pincode}`);
console.log(prom);
prom.then(()=>{
    console.log("Success");
});
prom.catch(()=>{
    console.log("failure");
})