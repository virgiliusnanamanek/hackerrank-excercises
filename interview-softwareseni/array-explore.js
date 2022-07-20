const arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// arrange the array to be [1, 2, 3, 4, 5, 6, 7, 8, 9]

function flatten(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArr.push(arr[i][j]); // push the current element to the new array
        }
    }
    return newArr;
}

console.log(flatten(arr1));