/**
 * utopianTree has the following parameter(s):
int n: the number of growth cycles to simulate
Returns
int: the height of the tree after the given number of cycles
 */

    function utopianTree(n) {
        // your code here
        let result = 1;
        for(let i = 0; i < n; i++) {
            if(i % 2 === 0) {
                result *= 2;
            } else {
                result += 1;
            }
        }
        return result;
    }