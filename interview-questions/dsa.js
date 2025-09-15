
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
