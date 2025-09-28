function isRobberyHouse(arr){
    let isEvenCal= 0;
    let isOddCal = 0;
    
    for(let i=0;i<arr.length;i++){
        if(i % 2 === 0){
            isEvenCal += arr[i];
        }else{
            isOddCal += arr[i];
        }
    }
    return Math.max(isEvenCal,isOddCal);
}

console.log(isRobberyHouse([2,7,9,3,1]));
