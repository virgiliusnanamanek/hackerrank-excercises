/**
 * reverseArray has the following parameter(s):
int A[n]: the array to reverse
Returns:
int[n]: the reversed array
 */

function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));