/**
 * function beautifulPairs has the following parameters:
A: an array of integers
B: an array of integers
 */

    function beautifulPairs(A, B) {
        // your code here
        let count = 0;
        let map = {};
        for(let i = 0; i < A.length; i++) {
            if(map[A[i]]) {
                map[A[i]]++;
            } else {
                map[A[i]] = 1;
            }
        }

        for(let i = 0; i < B.length; i++) {
            if(map[B[i]]) {
                count += map[B[i]];
                map[B[i]] = 0;
            }
        }

        return count;
    }