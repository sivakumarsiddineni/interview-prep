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
