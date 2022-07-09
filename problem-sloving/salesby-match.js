/**
 * sockMerchant has the following parameter(s):
int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns:
int: the number of pairs
 */

    function sockMerchant(n, ar) {
        // your code here
        let result = 0;
        let map = {};
        for(let i = 0; i < n; i++) {
            if(map[ar[i]]) {
                map[ar[i]]++;
            } else {
                map[ar[i]] = 1;
            }
        }
        for(let key in map) {
            result += Math.floor(map[key] / 2);
        }
        return result;
    }