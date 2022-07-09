/**
 * circularArrayRotation has the following parameter(s):
int a[n]: the array to rotate
int k: the rotation count
int queries[1]: the indices to report
Returns
int[q]: the values in the rotated a as requested in m
 */

    function circularArrayRotation(a, k, queries) {
        // your code here
        Array.from({length:k}).forEach(() => {
            a.unshift(a.pop());
        }
        );
        return queries.map(i => a[i]);
    }