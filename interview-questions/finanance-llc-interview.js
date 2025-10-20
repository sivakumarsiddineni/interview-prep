console.log(a);
 
setTimeout(() => {
	console.log(0);
}, 1000)
 
console.log(2);
 
setTimeout(() => {
console.log(2);
console.log(b);
}, 0);
 
var a = 10;
 
console.log(3);
 
let b = 20;

//output

// undefined
// 2
// 3
//2
//20
//0

// if i change the console.log 2 to b then getting reference error
// find Inntersection of two Arrays 

function findInterSection(arr1,arr2){
    let result = [];
    for(let data of arr1){
        if(arr2.includes(data)){
             result.push(data)
        }
    }
    return result;
}

console.log(findInterSection([1,2,3,4,5,6],[2,3,4,5,6]))


// shiffle array rotating 
function shuffleArray(arr){
  return arr.sort(()=>Math.random() -0.5);
}

console.log(shuffleArray([1,2,3,4,5,6,7,8,9]))










