/**
 * hurdleRace has the following parameter(s):
int k: the height the character can jump naturally
int height[n]: the heights of each hurdle
Returns
int: the minimum number of doses required, always  or more
 */

    function hurdleRace(k, height) {
        // your code here
        let max = Math.max(...height);
        return max - k > 0 ? max - k : 0;
    }