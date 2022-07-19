/**
 * arrayManipulation has the following parameters:
int n - the number of elements in the array
int queries[q][3] - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.
Returns
int - the maximum value in the resultant array
 */

    function arrayManipulation(n, queries) {
        let arr = new Array(n + 1).fill(0);
        for (let i = 0; i < queries.length; i++) {
            let [a, b, k] = queries[i];
            arr[a - 1] += k;
            arr[b] -= k;
        }
        let max = 0;
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (sum > max) {
                max = sum;
            }
        }
        return max;
    }