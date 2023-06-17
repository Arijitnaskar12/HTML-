let table=document.getElementById("tab");
let response=fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`);
response.then((info)=>{
    let prom=info.json();
    prom.then((data)=>{
        // console.log(data)
        // dataExtracter(data);
        for(let i=0;i<data.length;i++)
        {
           appendUser(data,i);
    
        }
    })
});

function appendUser(arr,i)
{
    let tabR=document.getElementById(`${i}`);
    let tabD=document.createElement("TD");
    let divE=document.createElement("div");
    divE.id="element";
    let divI=document.createElement("div");
    let image=document.createElement("img");
    image.id="imgI"
    image.src=arr[i].image;
    divI.append(image);
    let divN=document.createElement("div");
    divN.innerText=arr[i].name;
    let divS=document.createElement("div");
    divS.innerText=arr[i].symbol.toUpperCase();
    let divC=document.createElement("div");
    divC.innerText="$"+arr[i].current_price;
    let divF=document.createElement("div");
    divF.innerText=arr[i].total_volume;
    let divA=document.createElement("div");
    divA.innerText=arr[i].atl_change_percentage+"%";
    let divM=document.createElement("div");
    divM.innerText="Mkt Cap:"+arr[i].market_cap;
    divE.append(divI);
    divE.append(divN);
    divE.append(divS);
    divE.append(divC);
    divE.append(divF);
    divE.append(divA);
    divE.append(divM);
    tabD.append(divE);
    tabR.append(tabD);

    table.append(tabR);
}

function search(){
    let inputValue=document.getElementById("inpt").value;
//   response.then((info)=>{
//         let prom1=info.json();
//     })
//    let arr= prom1.then(data);
//    let temp=arr.filter((data)=>data.name===inputValue);
//    console.log(temp);


}
function filterCoin(inputValue){

}