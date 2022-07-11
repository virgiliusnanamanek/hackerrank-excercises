/**
 * findDigits has the following parameter(s):
int n: the value to analyze
Returns:
int: the number of digits in n that are divisors of n
 */

    function findDigits(n) { 
        // your code here
        let count = 0;
        let num = n.toString();
        for(let i = 0; i < num.length; i++) {
            if(n % num[i] === 0) {
                count++;
            }
        }
        return count;
    }