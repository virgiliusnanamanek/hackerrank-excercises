// duplicates the array

function duplicateArray(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(duplicateArray([1,2,3,4,5]));
