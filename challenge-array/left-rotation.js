/**
 * rotLeft has the following parameter(s):
int a[n]: the array to rotate
int d: the number of rotations
Returns
int a'[n]: the rotated array
 */

    function rotLeft(a, d) {
        // your code here
        let output = [];
        for (let i = 0; i < d; i++) {
            output.push(a.shift());
            a.push(output[i]);
        }
        return output;
    }

    console.log(rotLeft([1,2,3,4,5], 3));