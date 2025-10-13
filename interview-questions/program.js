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
            return false 
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
    if(n===0) return 0;
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
      //console.log(arr[mid])
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


// array flat infinity without this method

function recursiveIteration(arr){
    for (let data of arr){
         if(Array.isArray(data)){
          recursiveIteration(data)
          }else{
              console.log(data)
          }
    }
}
recursiveIteration([1,2,3,[4,5,6,[7,8,[10,11]]],9]);







