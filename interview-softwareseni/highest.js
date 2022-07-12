// count how many numbers are the highest in the array
//console.log(highest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) must return 1;
//console.log(highest([1,2,3,4,4,4])) must return 3;
//console.log(highest([1,2,3,4,5,6,7,8,9,10])) must return 1;

function highest(arr) {
    let highest = 0; // initialize highest to 0
    let count = 0; // initialize count to 0
    for (let i = 0; i < arr.length; i++) { // loop through the array
        if (arr[i] > highest) { // check if the current number is higher than the highest
            highest = arr[i]; // if so, set the highest to the current number
            count = 1;
        } else if (arr[i] === highest) { // if the current number is the same as the highest
            count++; // increase the count
        }
    }
    return count;
}

console.log(highest([1, 2, 3, 4, 11, 6, 7, 10, 10, 10]));