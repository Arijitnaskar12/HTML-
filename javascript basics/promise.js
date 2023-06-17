let executor=(resolve,reject) =>{
    setTimeout(()=>{
    console.log(prom);//pending
      resolve("data");
      console.log(prom);//fulfilled
    },4000);
  }
  let prom=new Promise(executor);
  console.log( prom);//pending
  setTimeout(()=>{
    console.log(prom);//pending
  },3000);
  function successCallBack(data){
    console.log(data);
    console.log("Success");
  }
  function ErrorCallBack(){
    console.log("Failure");
  }
  function finallyCallBack(){
    console.log("finally");
  }
  prom.then(successCallBack);
  prom.catch(ErrorCallBack);
  prom.finally(finallyCallBack)