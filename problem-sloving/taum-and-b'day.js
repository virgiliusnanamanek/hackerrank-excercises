/**
 * taumBday has the following parameter(s):
int b: the number of black gifts
int w: the number of white gifts
int bc: the cost of a black gift
int wc: the cost of a white gift
int z: the cost to convert one color gift to the other color
Returns:
int: the minimum cost to purchase the gifts
 */

    function taumBday(b, w, bc, wc, z) {
        // your code here
        var testCases = input.split('\n');
        testCases.shift();
        while (testCases.length) {
            var presents = testCases.shift().split(' ').map(function(n) { return new BigNum(n); });
            var prices = testCases.shift().split(' ').map(function(n) { return parseInt(n, 10); });
            var blackPresentCost = new BigNum(Math.min(prices[0], prices[1] + prices[2]) + "").multiplyBy(presents[0]);
            var whitePresentCost = new BigNum(Math.min(prices[1], prices[0] + prices[2]) + "").multiplyBy(presents[1]);
            console.log(blackPresentCost.add(whitePresentCost).toString());
        }
    }