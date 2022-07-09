/**
 * function luckBalance has the following parameter(s):
int k: the number of important contests Lena can lose
int contests[n][2]: a 2D array of integers where each contests[i]  contains two integers that represent the luck balance and importance of the i^th  contest
Returns:
int: the maximum luck balance achievable
 */

    function luckBalance(k, contests) {
        // your code here
        let cur = [];
        let sum = 0;
        let count = 0;
        for(let i = 0; i < contests.length; i++) {
            if(contests[i][1] === 0) {
                sum += contests[i][0];
            } else {
                cur.push(contests[i][0]);
            }
        }

        cur.sort((a, b) => {
            return b - a;
        }).forEach(item => {
            if(count < k) {
                sum += item;
                count++;
            } else {
                sum -= item;
            }
        }
        );

        return sum;
    }
        

