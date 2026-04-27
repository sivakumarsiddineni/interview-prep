
function dailyTemperatures(arr){
    let n = arr.length;
    let length = new Array(n).fill(0);
    let stack = [];

    for(let i = 0; i < arr.length; i++){
        while(stack.length > 0 && arr[i] >  arr[stack[stack.length-1]]){
            let previousIndex  = stack.pop();
            length[previousIndex] = i - previousIndex;
        }
        stack.push(i)
    }
    return length;
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));

// [1, 1, 4, 2,1, 1, 0, 0]

// problem findKthLargest in array 

function findKthLargest(nums, k) {
  let heap = [];
  
  for(let data of nums){
      heap.push(data);
      heap.sort((a,b)=> a - b);
      
      if(heap.length > k){
          heap.shift();
      }
  }
   return heap[0];
}

let nums = [3, 2, 1, 5, 6, 4]
let k = 2
console.log(findKthLargest(nums,k))




function topKFrequent(nums, k) {
  let freqMap = new Map();
  
  for(let num of nums){
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  
  let heap = [];
  
  for(let [num,freq] of freqMap){
      heap.push([num,freq]);
  }
  
 // console.log(heap);
  
  heap.sort((a,b)=> b[1] -a[1] );
  
 return heap.slice(0, k).map(x => x[0])
}

console.log(topKFrequent([1,1,1,2,2,3], 2));