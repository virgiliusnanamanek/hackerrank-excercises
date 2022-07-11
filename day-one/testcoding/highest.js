// count how many numbers are highest in the array


function highest(arr) {
    let highest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }
    return highest;
}

console.log(highest([1,2,3,4,5])); // 5