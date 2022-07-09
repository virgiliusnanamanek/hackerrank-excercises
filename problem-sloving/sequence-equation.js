/**
 * permutationEquation has the following parameter(s):

int p[n]: an array of integers
Returns

int[n]: the values of y  for all z in the arithmetic sequence 1 to n
 */

    function permutationEquation(p) {
        // your code here
        let result = [];
        for(let i = 1; i <= p.length; i++) {
            let index = p.indexOf(i) + 1;
            result.push(p.indexOf(index) + 1);
        }
        return result;
    }