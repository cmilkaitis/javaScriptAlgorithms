//takes an array of arrays, will return an array with the largest number from each

function largestOfFour(arr) {
    let largeArr = [];
    for (let i = 0; i < arr.length; i++) {
        let test = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] > test) {
                test = arr[i][j];
            }
        }
        largeArr.push(test);
    }
    return largeArr;
}

//refactored
function largestNums(arrs) {
    return arrs.map(arr => Math.max(...arr));
}



largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestNums([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);