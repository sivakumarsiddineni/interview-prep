
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