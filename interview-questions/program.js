// 1. Reverse a String 
// 2. Check if a String is a Palindrome 
// 3. Remove Duplicates from a String 
// 4. Find the First Non-Repeating Character 
// 5. Count the Occurrences of Each Character 
// 6. Reverse Words in a Sentence 
// 7. Check if Two Strings are Anagrams 
// 8. Find the Longest Substring Without Repeating Characters 
// 9. Convert a String to an Integer (atoi Implementation) 
// 10. Compress a String (Run-Length Encoding) 
// 11. Find the Most Frequent Character 
// 12. Find All Substrings of a Given String 
// 13. Check if a String is a Rotation of Another String 
// 14. Remove All White Spaces from a String 
// 15. Check if a String is a Valid Shuffle of Two Strings 
// 16. Convert a String to Title Case 
// 17. Find the Longest Common Prefix 
// 18. Convert a String to a Character Array 
// 19. Replace Spaces with %20 (URL Encoding) 
// 20. Convert a Sentence into an Acronym 
// 21. Check if a String Contains Only Digits 
// 22. Find the Number of Words in a String 
// 23. Remove a Given Character from a String 
// 24. Find the Shortest Word in a String 
// 25. Find the Longest Palindromic Substring


function isValidShuffle(str1,str2,result){
    let i = 0;
    let j = 0;
    let k = 0;
    
    while(k < result.length){
       if(i < str1.length && result[k] === str1[i]){
          i++;
       }else if(j< str2.length && result[k] === str2[j] ){
          j++;
       }
        else{
            return false;
       }
        k++;
    }
    
    return i === str1.length && j === str2.length;
}

console.log(isValidShuffle("abc", "def", "adbcef")); // ✅ true


// macquire group programing task
function sameple(arr){
    let firstHigh = -Infinity;
    let secondHigh = -Infinity;
    
    for(let data of arr){
        if(data > firstHigh ){
            secondHigh = firstHigh;
            firstHigh = data;
            
        }else if(data > secondHigh && data !== firstHigh){
            secondHigh = data;
        }
    }
    console.log(secondHigh)
}

sameple([1,2,4,5,6,7,8,9]);

// robery house problem 

function roberyHouse(arr){
    let n = arr.length;
    if (n===0) return 0;
    if (n === 1) return arr[0];

    let rob = arr[n-1] + roberyHouse(arr.slice(0,n-2));

    let skip = roberyHouse(arr.slice(0,n-1));

    return Math.max(rob,skip)
}

roberyHouse([2, 7, 9, 3, 1]);


// binary search problem 
function binarySeacrh(arr,target){
   let left = 0;
   let right = arr.length -1;
 
  while(left <= right){
      let mid = Math.floor((left + right) /2);
      if(arr[mid] === target ){
          return mid;
      }else if(arr[mid] < target){
          left = mid + 1;
      }else {
           right = mid - 1;
      }
      
  }
  return -1
   
}

console.log(binarySeacrh([2,3,4,5,6,7,8,9],9));


function bubbleSort(arr){
    let n = arr.length;
    let isSwapped;
    
    for(let i=0;i<n-1; i++){
          isSwapped  = false;
          
         for(let j=0; j< n-i-1 ;j++){
             if(arr[j] > arr[j+1]){
                 [arr[j],arr[j+1]] = [ arr[j+1],arr[j] ]
                 isSwapped = true
             }
         }
        
    
    }
    
    return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));




Function.prototype.myCall = function(context,...args){
    context = context || globalThis;
    let fn = Symbol();
    context[fn] = this;
    let result = context[fn](...args);
    return result;
}

Function.prototype.myApply = function (context,...args){
    context = context || globalThis;
    let fn = Symbol();
    context[fn] = this;
    let result = context[fn](...args)
    return result;
}

function sayHello(age) {
  console.log(`Hello ${this.name}, age ${age}`);
}

const person = { name: "Siva" };
sayHello.myApply(person, [28,29]); // Hello Siva, age 28

// remove element in array 

function removeElement(arr,target){
    let x =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== target){
            arr[x] = arr[i];
            x = x+1;
        }
    }
     
  arr.length = x;
  return arr;
}

console.log(removeElement([1,2,2,3,4,5,6],2));




// max consective ones in array 
function macConsigutiveOnes(arr){
    let currentCount = 0;
    let maxCount = 0
    
    for(let count of arr){
        if(count === 1){
            currentCount++;
        }else{
            maxCount = Math.max(currentCount,maxCount);
            currentCount = 0;
        }
    }
   
   return maxCount
}

console.log(macConsigutiveOnes([1,1,0,1,1,1,0,0,1,1,0,1,1]));

// output 3

function findMissingNumberInArray(arr){
    let n = arr.length;
    let val = (n * (n+1)/2);
    let total = arr.reduce((a,b)=> a+b,0);
    return val - total;
}


console.log(findMissingNumberInArray([3,0,1,4]));

// ouput 2


function mergeTwoSortedArrays(nums1, m, nums2, n) {
  // Copy only the first m elements
  let nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }

  console.log(nums1);
}

mergeTwoSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 4, 5], 3);


// run sequential tasks 
// implementt a function run sequentailly  tasks  that excutes an array of functions in sequence returning final result
async function runSequentially(tasks){
    let result = null;
    for(let task of tasks){
        result = await task(result);
    }  
    return result;
}

const tasks = [
    async () => 1,
    async (n) => n + 2,
    async (n) => n * 3
    ]

runSequentially(tasks).then((res)=>{
    console.log(res,'res')
})


// deep clone object recursive

function deepClone(obj){
    if(obj === null || typeof obj !== 'object'){
        return obj;
    }

    let clone =Array.isArray(obj) ? [] :  {};
    
    for(let key in obj){
       if(obj.hasOwnProperty(key)){
            clone[key] = deepClone(obj[key]);
       }
    }
  
   return clone;
}

const obj ={a:1, b:{ c:2 } }

let clone = deepClone(obj);
console.log(clone)


// async retries method call
function fetchWithRetry(fn,retries,delay){
    return new Promise((resolve,reject)=>{
        fn().then(resolve)
        .catch((err)=>{
            if(retries === 0) {
                return err;
            }
            else {
            setTimeout(()=>{
                fetchWithRetry(fn,retries-1,delay)
            },delay)
            
            }
        })
        
    })
}

function getDataFromServer(){
   return fetch('https://dummyjson.com/test')
    .then((res) => res.json());
}


fetchWithRetry(getDataFromServer,3,1000).then((res)=>{
    console.log(res)
})

// crate a custom currying function in javascript 

function sum(...args) {
    const res = args.reduce((a, b) => a + b, 0);
    const myFunc = (num) => {
        return sum(num, ...args);   // recursive call
    }
    myFunc.value = res;  // store result
    return myFunc;
}

console.log(sum(4, 6, 8, 10).value);  // 28
console.log(sum(4)(6)(8)(10).value);  // 28


function maxAreaBrute(height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      if (area > max) max = area;
    }
  }
  return max;
}

console.log(maxAreaBrute([1,8,6,2,5,4,8,3,7]))
// water tapping problem 

// Implment a * polygons 

//   *
//   * *
//  * * *
//   * * 
//    * 

// LRU cache 


class LRUCache {
    constructor(capacity){
        this.capacity = capacity;
        this.cache = new Map();
    }
    
    get(key){
        if(!this.cache.has(key)){
            return -1;
        }
        
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key,value);
        return value;
        
    }
    
    put(key,value){
        if(this.cache.has(key)){
            this.cache.delete(key);
        }else if(this.cache.size === this.capacity){
            let lrukey = this.cache.keys().next().value;
            this.cache.delete(lrukey);
        }
         this.cache.set(key,value);
        
    }

}


const cache = new LRUCache(2);

console.log(cache.get(2));  // 2
cache.put(3, 3);
console.log(cache.get(2));  // -1


