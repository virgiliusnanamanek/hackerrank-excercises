/**
 * kangaroo has the following parameter(s):
int x1, int v1: starting position and jump distance for kangaroo 1
int x2, int v2: starting position and jump distance for kangaroo 2
Returns:
string: either YES or NO
 */

    function kangaroo(x1, v1, x2, v2) {
        // your code here
        if(v1 < v2) {
            return 'NO';
        }
        let distance = (x2 - x1) / (v1 - v2);
        if(distance % 1 === 0) {
            return 'YES';
        } else {
            return 'NO';
        }

        
    }