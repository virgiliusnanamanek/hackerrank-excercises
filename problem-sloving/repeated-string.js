/**
 * repeatedString has the following parameter(s):
s: a string to repeat
n: the number of characters to consider
Returns
int: the frequency of a in the substring
 */

    function repeatedString(s, n) {
        // your code here
        const as = s.split("").filter(c => c === "a").length;
        const times = parseInt(n / s.length);
        const rest = n % s.length;

        const totalAs = times * as
            + s.slice(0, rest).split("").filter(c => c === "a").length

        return totalAs; 
    }