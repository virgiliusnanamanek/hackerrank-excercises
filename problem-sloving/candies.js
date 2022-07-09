/**
 * function candies has the following parameter(s):
int n: the number of children in the class
int arr[n]: the ratings of each student
Returns:
int: the minimum number of candies Alice must buy
 */

    function candies(n, arr) {
      
        let candies = new Array(n).fill(1);

        for(let i = 1; i <= n; i++) {
            if(arr[i] > arr[i - 1]) {
                candies[i] = candies[i - 1] + 1;
            }
        }

        for(let i = n - 2; i >= 0; i--) {
            if(arr[i] > arr[i + 1]) {
                candies[i] = Math.max(candies[i], candies[i + 1] + 1);
            }
        }

        return candies.reduce((a, b) => a + b, 0);
    } 