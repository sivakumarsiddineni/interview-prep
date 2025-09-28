
function dailyTemperatures(arr){
    let n = arr.length;
    let length = new Array(n).fill(0);
    let stack = [];

    for(let i=0; i<arr.length; i++){
        while(stack.length > 0 && arr[i] >  arr[stack[stack.length-1]]){
            let previousIndex  = stack.pop();
            length[previousIndex] = i - previousIndex;
        }
        stack.push(i)
    }
    return length;
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))

// [1, 1, 4, 2,1, 1, 0, 0]