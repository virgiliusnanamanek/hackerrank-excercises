/**
 * minimumSwaps has the following parameter(s):
int arr[n]: an unordered array of integers
Returns:
int: the minimum number of swaps to sort the array
 */

// console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7])); 
//must be 3
// console.log(minimumSwaps([2, 3, 4, 1, 5])); 
//must be 3
// console.log(minimumSwaps([4, 3, 1, 2])); 
//must be 2


function minimumSwaps(arr) {
    let swaps = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
        let index = arr[i] - 1;
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
        swaps++;
        }
    }
    return swaps;
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));
console.log(minimumSwaps([2, 3, 4, 1, 5]));