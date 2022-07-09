/**
 * function birthdayCakeCandles has the following parameter(s):
int candles[n]: the candle heights
Returns:
int: the number of candles that are tallest
 */

    function birthdayCakeCandles(candles) {
        // your code here
        let max = 0;
        let count = 0;
        for (let i = 0; i < candles.length; i++) {
            if (candles[i] > max) {
                max = candles[i];
                count = 1;
            } else if (candles[i] === max) {
                count++;
            }
        }
        return count;
    }

    console.log(birthdayCakeCandles([3, 2, 1, 3]));
    console.log(birthdayCakeCandles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]));