// promise polyfills 
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    let results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(err => reject(err));
    });

    if (promises.length === 0) {
      resolve([]);
    }
  });
};


const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.myAll([p1,p2,p3]).then(console.log); 
// [10, 20, 30]

// promise race polyfill
Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((res, index) => {
      Promise.resolve(res).then(resolve).catch(reject)
     });
  })
};

Promise.myRace([p1,p2,p3]).then(console.log); 
// [10, 20, 30]

// Resolves when first promise resolves, rejects only if all promises fail. (promises any)
Promise.myAny = function (promises){
    return new Promise((resolve,reject)=>{
    let rejectError = [];
    let rejectCount = 0;

    if(promises.length === 0){
       return  new Error('reject promise becaue of all fail')
    }

    promises.forEach((item,index)=>{ 
        Promise.resolve(item)
         .then(resolve)
         .catch((err)=>{
             rejectError[index] =   err
             rejectCount++;
             if(promises.length === rejectCount){
                reject(err,'"All promises were rejected"')
             }
         })

    })

    })
}


