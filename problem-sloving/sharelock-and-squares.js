/**
 * squares has the following parameter(s):
int a: the lower range boundary
int b: the upper range boundary
Returns:
int: the number of square integers in the range
 */

    function squares(a, b) {
        // your code here
        let square = 0, i = 1, count = 0;
        while (square <= b) {
        square = i * i;
        if (square >= a && square <= b) {
            count += 1;
        }
        i += 1;
    }
    return count;
    }