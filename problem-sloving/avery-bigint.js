/**
 * function aVeryBigSum has the following parameter(s):
int ar[n]: an array of integers .
Return:
long: the sum of all array elements
 */

    function aVeryBigSum(ar) {
        // your code here
        let sum = 0;
        for (let i = 0; i < ar.length; i++) {
            sum += ar[i];
        }
        return sum;
    }