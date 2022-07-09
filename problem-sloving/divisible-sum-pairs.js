/**
 * divisibleSumPairs has the following parameter(s):
int n: the length of array 
int ar[n]: an array of integers
int k: the integer divisor
Returns:
- int: the number of pairs
 */

    function divisibleSumPairs(n, ar, k) {
        // your code here
        let result = 0;
        for(let i = 0; i < n; i++) {
            for(let j = i + 1; j < n; j++) {
                if((ar[i] + ar[j]) % k === 0) {
                    result++;
                }
            }
        }
        return result;
    }