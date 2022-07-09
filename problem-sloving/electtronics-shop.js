/**
 * getMoneySpent has the following parameter(s):
int keyboards[n]: the keyboard prices
int drives[m]: the drive prices
int b: the budget
Returns
int: the maximum that can be spent, or  if it is not possible to buy both items
 */

    function getMoneySpent(keyboards, drives, b) {
        // your code here
        let result = -1;
        for(let i = 0; i < keyboards.length; i++) {
            for(let j = 0; j < drives.length; j++) {
                if(keyboards[i] + drives[j] <= b) {
                    result = Math.max(result, keyboards[i] + drives[j]);
                }
            }
        }
        return result;
    }