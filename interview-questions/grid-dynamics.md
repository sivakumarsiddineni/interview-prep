const users=[
  {firstName:"john",lastName:"Biden",age:26},
  {firstName:"jimmy",lastName:"cob",age:75},
  {firstName:"sam",lastName:"lewis",age:50},
  {firstName:"Ronald",lastName:"Mathew",age:26},  
];


let data = users.map((res)=>{
    let obj ={ name:'' }
    obj.name = res.firstName + " " + res.lastName;
   return obj;
})

console.log(data)


function data(){
    for(var i=1;i<5;i++){
        setTimeout(()=>{
               console.log(i)
        },i)
    }
}

data()

<div>{undefined}</div>








