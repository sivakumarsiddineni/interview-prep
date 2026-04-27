
function maxDepth(root) {
    if (!root) {
        return 0;
    }

    let maxDepth = 0;

    let transversal = (cur, depth) => {
        maxDepth = Math.max(maxDepth, depth);
        cur.left && transversal(cur.left, depth + 1);
        cur.right && transversal(cur.right, depth + 1);
    }

    transversal(root, 1);

    return maxDepth
};

let root = [3, 9, 20, null, null, 15, 7];
console.log(maxDepth(root))

// Another way 
var maxDepth = function(root) {
    if(!root){
       return 0;
    }

    let maxLeft = maxDepth(root.left);
    let maxRight = maxDepth(root.right);

    return 1 + Math.max(maxLeft,maxRight);
};

// isIsomorphic in javascript 

function isIsomorphic(s, t) {
    if(t.length !== s.length){
       return false; 
    }
    
    let map1 = new Map();
    let map2 = new Map();
    
    for(let i=0; i < s.length; i++){
        if(
            (map1.has(s[i]) && map1.get(s[i]) !== t[i]) || 
            (map2.has(t[i]) && map2.get(t[i]) !== s[i])
          ){
            return false;
        }
        map1.set(s[i],t[i]);
        map2.set(t[i],s[i]);
    }
    
    return true;
}

console.log(isIsomorphic("dds", "add")); // false



function numJewelsInStones(jewels,stones){
    let set = new Set(jewels);
    let count = 0;

    for(let stone of stones){
        if(set.has(stone)){
           count++;
        }
    }
    return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb")); // 3


var hasPathSum = function(root, target){
     if(!root) return false;
     let ans = false;
     
     let traverse = (curr,curSum)=>{
        let newSum = curSum + curr.value;
        if(!curr.left && !curr.right){
           if(newSum === target){
             ans = false || newSum;
           }
        }
         curr.left && traverse(curr.left,newSum);
         curr.right && traverse(curr.right,newSum);
     }

     traverse(root,0);
     return ans
}