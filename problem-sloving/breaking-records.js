/**
 * breakingRecords has the following parameter(s):
int scores[n]: points scored per game
Returns
int[2]: An array with the numbers of times she broke her records. Index  is for breaking most points records, and index 1 is for breaking least points records.
 */

    function breakingRecords(scores) {
        // your code here
        let max = scores[0];
        let min = scores[0];
        let maxCount = 0;
        let minCount = 0;
        for(let i = 1; i < scores.length; i++) {
            if(scores[i] > max) {
                max = scores[i];
                maxCount++;
            }
            if(scores[i] < min) {
                min = scores[i];
                minCount++;
            }
        }
        return [maxCount, minCount];
    }