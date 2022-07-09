/**
 * funtion plusMinus has the following parameter(s):
int arr[n]: an array of integers
Print:
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.
 */

    function plusMinus(arr) {
        // your code here
        let n = arr.length;
        let pos = 0;
        let neg = 0;
        let zero = 0;
        for (let i = 0; i < n; i++) {
            if (arr[i] > 0) {
                pos++;
            } else if (arr[i] < 0) {
                neg++;
            } else {
                zero++;
            }
        }
        console.log(pos/n);
        console.log(neg/n);
        console.log(zero/n);
    }

    console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
    