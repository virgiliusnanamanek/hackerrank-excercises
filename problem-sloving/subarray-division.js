/**
 * birthday has the following parameter(s):
int s[n]: the numbers on each of the squares of chocolate
int d: Ron's birth day
int m: Ron's birth month
Returns:
int: the number of ways the bar can be divided
 */

    function birthday(s, d, m) {
        // your code here
        let result = 0;
        for(let i = 0; i < s.length; i++) {
            let sum = 0;
            for(let j = 0; j < m; j++) {
                sum += s[i + j];
            }
            if(sum === d) {
                result++;
            }
        }
        return result;
    }