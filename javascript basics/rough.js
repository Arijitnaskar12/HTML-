let arr = [
    "amruth",
    "Dikesh",
    "Love gupta",
    "Vyshnavi",
    "Bhibuthi",
    "Vivek"
];
// let index=0;
// let user=document.getElementById("user");
// let button=document.getElementsByTagName("button")[0];
{/* <div id="user-item">Amrith</div>
<div id="user-item">Amrith</div> */}
let userContainer=document.getElementById("user");
let button=document.getElementsByTagName("button")[0];
let index=0;
function changeName(){
let div=document.createElement("div");
if(index<arr.length-1)
{
  div.innerText=arr[index];
  index++;
}else{
  button.disabled=true;
}
setTimeout(()=>{userContainer.appendChild(div)},1000);

}