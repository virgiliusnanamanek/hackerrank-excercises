/**
 * function miniMaxSum has the following parameter(s):
arr: an array of  integers
Print:
Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.
 */

    function miniMaxSum(arr) {
        // your code here
        let sum=arr.reduce((a,b)=>{
            return a+b;
        });
        const min=sum-Math.max(...arr);
        const max=sum-Math.min(...arr);
    
        console.log(min+" "+max);
    }

    miniMaxSum([1,2,3,4,5]);
    miniMaxSum([1,2,3,4,5,6,7,8,9,10]);
    miniMaxSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);