//function to count minimum absolute difference between two elements in an array;
//optimized to use only one loop

    function minimumAbsoluteDifference(arr) {
        // your code here
        var diff = [];
        arr.sort((a, b) => a - b);
        for (var i = 0; i < arr.length - 1; i++) {
            if (i < arr.length - 1) {
                diff.push(Math.abs(arr[i] - arr[i + 1]));
            }
        }
        var minAbsoluteDifference = Math.min(...diff);
        return minAbsoluteDifference;
    }

    console.log(minimumAbsoluteDifference([1, 2, 3, 4, 5]));