
    function isValid(s){
        
        let stack = [];
        let map = {
            ')':'(',
            '}':'{',
            ']':'['
        }
        
        for(let char of s){
            if(map[char]){
                let data = stack.pop();
                if(data !== map[char]){
                    return false;
                }
            }else{
                stack.push(char)
            }
            
        }
        
       return stack.length === 0;
    }
    
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));      // true