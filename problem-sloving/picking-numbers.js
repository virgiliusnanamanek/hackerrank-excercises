/**
 * pickingNumbers has the following parameter(s):
int a[n]: an array of integers
Returns:
int: the length of the longest subarray that meets the criterion
 */

    function pickingNumbers(a) {
        // your code here
        let sortedArray = a.sort(function(a,b){
            return(a - b);
        })
        
        let currentArray = [];
        let longestArray = 0;
        let startNumber = 0;
        for(let i = 0; i < sortedArray.length; i++){
            let result = Math.abs(sortedArray[startNumber] - sortedArray[i]); // get the difference between the two numbers
            if (result <= 1){
                currentArray.push(sortedArray[i]); // add the number to the current array
                if(currentArray.length > longestArray){
                        longestArray = currentArray.length
                    };
            }else {
        
                startNumber = i;
                if(currentArray.length > longestArray){
                    longestArray = currentArray.length
                }
                currentArray = [];
                currentArray.push(sortedArray[i]);
            }
        
        }
        return longestArray;
    }