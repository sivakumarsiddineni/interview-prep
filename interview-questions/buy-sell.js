
function maxProfit(arr) {
    let min = arr[0];
    let maxProfit = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] - min > maxProfit) {
            maxProfit = arr[i]
        }
        
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return maxProfit
}


console.log(maxProfit([7, 1, 5, 3, 6, 4]), 'output');


function mergeIntervals(intervals) {
    intervals.sort((a,b)=> a[0] - b[0]);
    let ans = [intervals[0]];
    
    for(let i= 1; i < intervals.length; i++){
        if(intervals[i][0] <= ans[ans.length-1][1]){
            ans[ans.length-1][1] = Math.max(ans[ans.length-1][1],intervals[i][1])
        }else{
            ans.push(intervals[i])
        }
    }

  return ans
  
}

console.log(mergeIntervals([[1,3], [2,6], [8,10], [15,18]]))
// merge intervals 


// avarage of the array elements 

function responseTime(nums){
   let sum = nums[0];
   let count = 0;
   
   for(let i = 0;i < nums.length; i++){
       let avg = sum / i;
       
       if(nums[i] > avg){
           count++;
       }
       
       sum += nums[i];
       
   }
   return count;
}
let responseTimes = [100, 200, 150,300];
console.log(responseTime(responseTimes));

// eComms ETL - Minimum Bit Flips to Convert Number


/**

* Modify the fn1, fn2, and fn3 implementations

* to achieve desired output without changing

* the execution order.

*

* Expected output:

*    Yay, message #1

*    Yay, message #2

*    Yay, message #3

*/

const stack = [];
 
//let fn1, fn2, fn3;

//fn2 = fn2 = fn1 = console.log;

//stack.push(async (n) =>n, async (n)=>n+1, async (n)=> n+2);


 function fn1(arg){
    console.log(arg);
}

setTimeout(()=>{
    fn2('Yay, message #2');
    fn3('Yay, message #3');
},0)

 function fn2(arg2){
     console.log(arg2);
}
 function fn3(arg3){
    console.log(arg3)
}

stack.push(fn1,fn2,fn3);

async function dataCall(arr){
  for(let data of arr){
      await data()
  }
};

dataCall(stack).then((res)=>{
    console.log(res,'res')
})
//console.log(stack)



// Do not change bellow this line


fn3("Yay, message #3");

fn2("Yay, message #2");

fn1("Yay, message #1");
 

// Top 50 Angular Interview Questions (3–5 YOE)
//  1. What is Angular and how is it different from AngularJS?
//  2. Explain the Angular architecture.
//  3. What is a module in Angular?
//  4. What is a component?
//  5. Component lifecycle hooks.
//  6. What is data binding?
//  7. One-way vs Two-way data binding.
//  8. What is dependency injection in Angular?
//  9. What are services?
//  10. What is RxJS?
//  11. Observable vs Promise.
//  12. What is Subject and BehaviorSubject?
//  13. What is HttpClient?
//  14. What is Interceptor?
//  15. What is Routing and Lazy Loading?
//  16. What is Guard in Angular?
//  17. What is Resolver?
//  18. What is Pipe?
//  19. Pure vs Impure Pipes.
//  20. What is Change Detection?
//  21. Default vs OnPush strategy.
//  22. What is Zone.js?
//  23. What is ViewChild?
//  24. What is ContentChild?
//  25. What is Template-driven form?
//  26. What is Reactive Form?
//  27. Form Validation techniques.
//  28. Custom Validator.
//  29. What is Async Validator?
//  30. What is State Management?
//  31. What is NgRx?
//  32. What is Store, Action, Reducer, Effect?
//  33. What is SSR (Angular Universal)?
//  34. What is AOT compilation?
//  35. AOT vs JIT.
//  36. What is Ivy renderer?
//  37. What is Tree Shaking?
//  38. What is Webpack?
//  39. How to optimize Angular performance?
//  40. How to handle large lists (virtual scroll)?
//  41. What is TrackBy?
//  42. What is Dynamic Component Loading?
//  43. What is Custom Directive?
//  44. Structural vs Attribute Directive.
//  45. What is ngTemplate and ngContainer?
//  46. What is ViewEncapsulation?
//  47. What is Shadow DOM?
//  48. What is PWA in Angular?
//  49. How to secure Angular app?
//  50. How to deploy Angular application?


const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" }
];

const data = items.reduce((acc,item)=>{
     acc[item.category] = acc[item.category] || [];
     acc[item.category].push(item);
     return acc;
},{});

console.log(data)

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
 
const fn1 = outer();
const fn2 = outer();
 
fn1();
fn1();
fn2();