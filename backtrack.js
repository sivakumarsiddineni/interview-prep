
// Array sub sets
let arr = [1, 2, 3]

function subset() {
    let result = [];
    const backtrack = (path, start) => {
        result.push([...path]);
        for (let i = start; i < arr.length; i++) {
            path.push(arr[i]);
            backtrack(path, i + 1)
            path.pop();
        }
    }
    backtrack([], 0)
    return result;
}


console.log(subset());

// Permutations of array


function permutations(nums) {
  const result = []
  
  const backTracking = (path)=>{
      if(nums.length === path.length){
          result.push([...path])
      }
      
      for(let i = 0; i < nums.length; i++){
          if(!path.includes(nums[i])){
              path.push(nums[i])
              backTracking(path);
              path.pop();
          }
      }
  }
  
  backTracking([]);
  return result
}

console.log(permutations([1, 2, 3]))





