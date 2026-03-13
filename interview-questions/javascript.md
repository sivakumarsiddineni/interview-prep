

function removeAt(arr,index){
    for(let i=index; i< arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr.length--;
}


const array1 = [1, 2, 2, 4, 5];
removeAt(array1, 2)
console.log(array1)

1. What are Preload, Reconnect, Prefetch, and Prerender?



TypeScript
class vs interface
any vs unknown
extends vs implements (Inheritance)
Access Modifiers (public, private, protected)
🔹 JavaScript Core
console.log(A) → const a (Temporal Dead Zone)
console.log(b) → let b (Temporal Dead Zone)
console.log(c) → var c (Hoisting)
Call by Value vs Call by Reference
call, apply, and bind
Closures, Hoisting, Prototype & Prototype Chain
🔹 Promises & Async
Promise.race() vs Promise.any()
Promise.all() vs Promise.allSettled()
Purpose of Promise.finally()
Synchronous vs Asynchronous Error Handling
Can you use .catch() without try?
throw new Error()
Microtasks vs Macrotasks
process.nextTick()
What does an async function return?
Event Loop Phases (Node.js)
🔹 Node.js & NPM
npm i vs npm ci
package.json vs package-lock.json


1. Two Sum
2. Valid Parentheses
3. Merge Two Sorted Arrays
4. Move Zeroes to End
5. Find Missing Number in Array
6. Count Unique Values
7. Reverse a Linked List
8. Palindrome Checker
9. Max/Min in Array
10. Climbing Stairs (DP)
11. Intersection of Two Arrays
12. FizzBuzz
13. Merge Strings Alternately
14. Maximum Subarray (Kadane’s Algo)
15. Remove Duplicates from Sorted Array
🧠 Practice sites: LeetCode, NeetCode 150, FrontendExpert

⚙️ Medium (Pattern + Precision)
1. Longest Substring Without Repeating Characters
2. Group Anagrams
3. Sliding Window Maximum
4. Flatten Nested Arrays
5. Rotate Array
6. Top K Frequent Elements
7. Merge Intervals
8. LRU Cache
9. Deep Clone Object
10. Search in Rotated Sorted Array
11. Decode String
12. Longest Palindromic…


function intersection(arr1,arr2){
    let set = new Set(arr1);
    let result = new Set();
    
    for(let data of arr2){
        if(set.has(data)){
            result.add(data)
        }
    }
    
    return Array.from(result)
};

console.log(intersection([1,2,2,1], [2,2])); // [2]