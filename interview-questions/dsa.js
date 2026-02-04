
// service now interview 
function removeAt(arr,index){
    for(let i=index; i< arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr.length--;
}


const array1 = [1, 2, 2, 4, 5];
removeAt(array1, 2)
console.log(array1)

// promise race vs promise any
//promise any :  i have three promises in this three promises first is rejected ignores and then next promise is success then it will return
//promise race : i have three promises if first promise is failed then it will return (success or fail return)


// setTimeout(() => console.log(1));

// (async () => {
//     console.log(2);
//     await Promise.resolve();
//     console.log(3);
// })()

// Promise.resolve().then(() => 

// Promise.resolve().then(() => console.log(4)))

// // // 2 
// // // 3
// // // 4
// // // 1


let obj = {
    a:10,
    b:20
}

//console.log({ ...obj, a:30 } == {a:30, ...obj });
//console.log({ ...obj, a:30 } === {a:30, ...obj });


// function area({ length = 10, width = 20 }) {
//         console.log(length * width);
// }

// area({});
//abc();
// bhd();

// var bhd = function () {
// console.log(3)
// }


// function myFun(x, y, ...manyMoreArgs) 
//     {console.log(manyMoreArgs);
// }

// myFun(1, 2, 3, 4, 5);
// myFun(1, 2);
 
 
 function* myGenFunc() {
     yield 1;
     yield 2;
     yield 3;
 }
 
 var myGenObj = new myGenFunc();
 
 console.log(myGenObj.next().value);

