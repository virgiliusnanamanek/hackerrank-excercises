/**
 * function diagonalDifference takes the following parameter:
int arr[n][m]: an array of integers
Return:
int: the absolute diagonal difference
 */

    function diagonalDifference(arr) {
        // your code here
        let n = arr.length;
        let sum1 = 0;
        let sum2 = 0;
        for (let i = 0; i < n; i++) {
            sum1 += arr[i][i];
            sum2 += arr[i][n-i-1];
        }
        return Math.abs(sum1 - sum2);
    }