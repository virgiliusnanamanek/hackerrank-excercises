/**
 * Function flippingMatrix has the following parameter:
 * int[2n][2n]: a 2-dimensional array of integers
 */

/**
 * Returns
 * int: the maximum sum possible
*/

function flippingMatrix(matrix) {
    // your code here
    let n = matrix.length/2; // n is the length of the matrix
    let max = 0; 
    let sum = 0;
    
    for (let i = 0; i < n; i++) { // loop through the matrix
        for (let j = 0; j < n; j++) { // loop through the matrix
            max = Number.MIN_VALUE; // reset max
            max = Math.max(max, matrix[i][j]); // get the max of the current row
            max = Math.max(max, matrix[i][2*n-j-1]); // get the max of the current column
            max = Math.max(max, matrix[2*n-i-1][j]); // get the max of the current diagonal
            max = Math.max(max, matrix[2*n-i-1][2*n-j-1]); // get the max of the current
            sum += max; // add the max to the sum
        }
    }
    return sum;
}