/**
 * nonDivisibleSubset has the following parameter(s):
int S[n]: an array of integers
int k: the divisor
Returns
int: the length of the longest subset of S meeting the criteria
 */

    function nonDivisibleSubset(S, k) {
        // your code here
        let count = 0;
        let i = 0;
        let j = 0;
        let sum = 0;
        while (i < S.length) {
            sum = 0;
            j = i;
            while (j < S.length) {
                sum += S[j];
                if (sum % k === 0) {
                    count++;
                }
                j++;
            }
            i++;
        }
        return count;
    }