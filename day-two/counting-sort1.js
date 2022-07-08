/**
 * Challenge
Given a list of integers, count and return the number of times each value appears as an array of integers.
 */

/**
 * function countingSort has the following parameter(s):
arr[n]: an array of integers
*/

/**
 * Returns
int[100]: a frequency array
 */

    function countingSort(arr) {
        // your code here
        let freq = new Array(100).fill(0); // create a frequency array
        for (let i = 0; i < arr.length; i++) {
            freq[arr[i]]++; // increment the frequency of the current element
        }
        return freq;
    }
