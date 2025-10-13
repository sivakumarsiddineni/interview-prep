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
