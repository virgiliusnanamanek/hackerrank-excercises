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
    let n = matrix.length/2;
    let max = 0;
    let sum = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            max = Number.MIN_VALUE;
            max = Math.max(max, matrix[i][j]);
            max = Math.max(max, matrix[i][2*n-j-1]);
            max = Math.max(max, matrix[2*n-i-1][j]);
            max = Math.max(max, matrix[2*n-i-1][2*n-j-1]);
            sum += max;
        }
    }
    return sum;
}