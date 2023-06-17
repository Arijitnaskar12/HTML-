// let ancho=document.getElementById("a");
// ancho.addEventListener("click",function (e){
//     e.preventDefault();
// })
// let form=document.getElementById("myform");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
// // })
let divE=document.getElementsByTagName("input")[0];
divE.addEventListener("cut",(e)=>{
    alert("Happend");
    e.preventDefault();
})