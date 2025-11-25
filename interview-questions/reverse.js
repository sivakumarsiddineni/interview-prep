const str = "Hello World";

function reverseString(str){
   let words = str.split(' ');
   let val = words.map(word=> word.split('').reverse().join('')).join(' ');
   return val;
}

console.log(reverseString(str));