/**
 * extraLongFactorials has the following parameter(s):
n: an integer
 */

//using bigint

    function extraLongFactorials(n) {
        // your code here
        let factorial = BigInt(1);
        for(let i = 1; i <= n; i++) {
            factorial *= BigInt(i);
        }
        console.log(factorial);
    }
