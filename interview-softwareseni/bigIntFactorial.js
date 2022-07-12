//count bigInteger factorial

    function bigIntFactorial(n) {
        // your code here
        let factorial = 1; // initialize factorial
        for (let i = 1; i <= n; i++) { // loop through the array
            factorial *= i; // multiply the factorial by the current number
        }
        return factorial.toString(); // return the factorial
    }

    console.log(bigIntFactorial(5));
    console.log(bigIntFactorial(10));
    console.log(bigIntFactorial(20));