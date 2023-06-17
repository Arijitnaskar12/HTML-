const users = [
    { id: 1, name: "Avinash", age: 24, profession: "developer" }, 
    { id: 2, name: "Arijit", age: 24, profession: "developer" }, 
    { id: 3, name: "Awadhesh", age: 25, profession: "admin" },
];
let selectElement=document.getElementsByTagName("select")[0];
// console.log(selectElement);
let containerElement=document.getElementById("container");
function filterUser(){
    let selectedElement=selectElement.value;
    let filteredUser=filterData(selectedElement);

    containerElement.innerText='';
    appendUsers(filteredUser);
}
function filterData(profession){
if(profession==="") return users;

let userList=users.filter((user)=> {return user.profession===profession});
return userList;
}
// <!-- <div class="user">
//             <div>1</div>
//             <div>Name: John</div>
//             <div>Profession: Developer</div>
//             <div>Age: 22</div>
//         </div> -->
function appendUsers(userList){
    for(let i=0;i<userList.length;i++)
    {
        let divElement=document.createElement("div");
        divElement.className="user";
        let idElement=document.createElement("div");
        idElement.innerText=userList[i].id;
        let NameElement=document.createElement("div");
        NameElement.innerText=`Name:${userList[i].name}`;
        let professionElement=document.createElement("div");
        professionElement.innerText=`Profession:${userList[i].profession}`;
        let ageElement=document.createElement("div");
        ageElement.innerText=`Age:${userList[i].age}`;
        divElement.append(idElement);
        divElement.append(NameElement);
        divElement.append(professionElement);
        divElement.append(ageElement);
        containerElement.append(divElement);       

    }

}
function addUser(){
    let name = document.getElementById("name").value.trim();
console.log(name);
    let profession = document.getElementById("profession").value.trim();
    let age = document.getElementById("age").value.trim();
    if(name !== "" && age !== "" && profession !== ""){
        let newUser = {
            id: users[users.length - 1].id + 1,
            name:name,
            age:age,
            profession: profession
        };
        users.push(newUser)
        filterUser();
}
else{
    alert("All fields are required");
}
}