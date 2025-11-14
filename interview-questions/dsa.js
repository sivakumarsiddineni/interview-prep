
// service now interview 
function removeAt(arr,index){
    for(let i=index; i< arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr.length--;
}


const array1 = [1, 2, 2, 4, 5];
removeAt(array1, 2)
console.log(array1)

// promise race vs promise any
//promise any :  i have three promises in this three promises first is rejected ignores and then next promise is success then it will retunr
//promise race : i have three promises if forst promise is failed then it will return (success or fail return)
