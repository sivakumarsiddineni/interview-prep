
function roateArray(arr,k){
    for(let i = 0; i < k; i++){
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    return arr;
}

nums = [1,2,3,4,5,6,7], k = 3;
console.log(roateArray(nums,k))