function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0;
    let maxLen = 0;

    for(let i=0;i<s.length;i++){
        if(set.has(s[i])){
          set.delete(s[left]);
          left++
        }
        set.add(s[i]);
        maxLen = Math.max(left,i-left+1);
    }
    return maxLen;
}

lengthOfLongestSubstring('abcabcdef')
// output : 6 
// Valid Parentheses

let array = [3, 4, -1, 2, 5, -3, 6];

function minValueFind(array,target){
    let maxWindow = 0
    let sumWindow = 0;

    for(let i=0; i<target; i++){
          sumWindow += array[i]
          if(sumWindow<0){
             sumWindow =0
          }
          console.log(sumWindow);

        sumWindow = Math.min(sumWindow);
    }


    maxWindow = sumWindow;

    for(let i=target; i<array.length;i++){
        maxWindow += array[i] - array[i-target];
         if(maxWindow<0){
             maxWindow =0
          }
        sumWindow = Math.min(sumWindow,maxWindow)
    }


   return sumWindow;

}

minValueFind(array,3);


