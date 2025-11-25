function isAnagram(a, b) {
 if(a.length !== b.length){
     return false
 }
 
 let map = {};
 
 for(let data of a){
      map[data] = (data[a] || 0) +1;
 }
 
 for(let val of b){
     if(!map[val]){
         return false;
     }
 }

  return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("aab", "abc"));       // false