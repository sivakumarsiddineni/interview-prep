(async function () {
  console.log("Start");

  const data = await new Promise(resolve => {
    setTimeout(() => resolve("Done"), 1000);
  });

  console.log(data);
  console.log("End");
})();

// Start
// After one second Done
//End


const delayPromise = new Promise(resolve => setTimeout(resolve, 0));

(async function() {
  console.log("Start");

  await delayPromise;
  console.log("After Timeout");

  await Promise.resolve();
  console.log("After Promise");
})();

console.log("Outside");

// Start
// Outside
// After Timeout
// After Promise

const f = null ?? 'abccc';
console.log(f);

// how to override const variable in javascript 
// splunk , dynotrace, newr Relistic 
// [1,2,3] & [2,3,4] → [2,3];

function findDuplicates(nums1,nums2){
    let result = []
     for(let data of nums1){
          if(nums2.includes(data)){
               result.push(data)
          }
     }
    return result;
}

let array1 = [1,2,3];
let array2 = [2,3,4];
console.log(findDuplicates(array1, array2));
 
const a = { x: 1 };
const b = a;
b.x = 5;
console.log(a.x)

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
