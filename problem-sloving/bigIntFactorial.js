//count bigInteger factorial

    function bigIntFactorial(n) {
        // your code here
        let factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }