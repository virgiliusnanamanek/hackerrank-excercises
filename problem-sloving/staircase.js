/**
 * function staircase has the following parameter(s):
int n: an integer
 */

    function staircase(n) {
        // your code here
        let str = '';
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (j < n - i - 1) {
                    str += ' ';
                } else {
                    str += '#';
                }
            }
            str += '\n';
        }
        return str;
    }

    console.log(staircase(6));