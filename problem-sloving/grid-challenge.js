/**
 * function gridChallenge has the following parameter(s):
string grid[n]: an array of strings
Returns:
string: either YES or NO
 */

    function gridChallenge(grid) {
        // your code here
        let cur = [];

        for(let i = 0; i < grid.length; i++) {
            let text = grid[i].split('').sort();
            cur.push(text);
        }

        let col = cur[0].length;

        for(let i = 0; i < cur.length - 1; i++) {
            for(let j = 0; j < col; j++) {
                if(cur[i][j] > cur[i + 1][j]) {
                    return 'NO';
                }
            }
        }

        return 'YES';

        
    }