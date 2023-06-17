// // let pincode=700030;
// // let prom=fetch(`https://api.postalpincode.in/pincode/${pincode}`);
// // let x=prom.then(()=>{
// //   console.log("Loaded data");
// // });
// // let y=prom.catch(()=>{
// //   console.log("Unloaded data");
// // });
// // x.then(()=>{
// //   console.log("Success x")
// // });
// // x.catch(()=>{
// //   console.log("failure x");
// // })
// // y.then(()=>{
// //   console.log("Success y");
// // });
// // y.catch(()=>{
// //   console.log("failure y");
// // })
// let first=()=>{
//     console.log("first");
// }
// let second=()=>{
//     console.log("second");
// }
// let third=()=>{
//     console.log("third");
// }
// let prom=new Promise((resolve,reject)=>
// {
//     resolve("resolve");
// });
// prom.then(first).then(second).then(third);
// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("aravind")
//     }, 2000)
// })
// // prom => after 2s => REJECTED
// let x = prom.then(() => {
//     console.log("A");
// }).then(()=>{
//     console.log("B");
// });
// // x status will be => rejected
// x.catch(() => {
//     console.log("Inside catch of x", prom)
//     // prom => REJECTED, "aravind"
// })
let pincode=700030;
let response=fetch(`https://api.postalpincode.in/pincode/${pincode}`);
response.then((info)=>{
    let prom=info.json();
    prom.then((data)=>{
        console.log(data);
        appendUsers(data[0].PostOffice);
    })
});
let container=document.getElementById("output");
function appendUsers(arr){
    for(let i=0;i<arr.length;i++)
    {
        let divE=document.createElement("div");
        divE.innerText=arr[i].Name;
        container.append(divE);
    }
}