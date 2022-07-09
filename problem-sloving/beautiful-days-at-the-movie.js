/**
 * beautifulDays has the following parameter(s):
int i: the starting day number
int j: the ending day number
int k: the divisor
Returns
int: the number of beautiful days in the range
 */


function beautifulDays(i, j, k) {
    // your code here
    let result = 0;
    for(let x = i; x <= j; x++) {
        let reverse = parseInt(x.toString().split('').reverse().join(''));
        if((x - reverse) % k === 0) {
            result++;
        }
    }
    return result;
}