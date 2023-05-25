// // let arr = [
// //     "amruth",
// //     "Dikesh",
// //     "Love gupta",
// //     "Vyshnavi",
// //     "Bhibuthi",
// //     "Vivek"
// // ];
// // // let index=0;
// // // let user=document.getElementById("user");
// // // let button=document.getElementsByTagName("button")[0];
// // {/* <div id="user-item">Amrith</div>
// // <div id="user-item">Amrith</div> */}
// // let userContainer=document.getElementById("user");
// // let button=document.getElementsByTagName("button")[0];
// // let index=0;
// // function changeName(){
// // let div=document.createElement("div");
// // if(index<arr.length-1)
// // {
// //   div.innerText=arr[index];
// //   index++;
// // }else{
// //   button.disabled=true;
// // }
// // setTimeout(()=>{userContainer.appendChild(div)},1000);

// // }
// <div id="user">
// <div>Arijit</div>
// <div>24</div>
// <div>Male</div>
// </div>
let arr = [
    {
        name: "Aravind",
        age: 32,
        gender: "male"
    },
    {
        name : "Sachin",
        age: 25,
        gender: "male"
    },
    {
        name: "Vyshnavi",
        age: 34,
        gender: "female"
    }
];
let userContainer=document.getElementById("user-container");
 let button=document.getElementsByTagName("button")[0];
 let i=0;
 function addUser(){
    let userDiv=document.createElement("div");
    userDiv.className="user";
    let nameDiv=document.createElement("div");
    nameDiv.innerText=arr[i].name;
    let ageDiv=document.createElement("div");
    ageDiv.innerText=arr[i].age;
    let genderDiv=document.createElement("div");
    genderDiv.innerText=arr[i].gender;
    userDiv.append(nameDiv);
    userDiv.append(ageDiv);
    userDiv.append(genderDiv);

    userContainer.append(userDiv);
    if(i<arr.length-1)
    {
        i++;
    }else{
        button.disabled=true;
    }

 }