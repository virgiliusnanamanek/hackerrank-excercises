/**
 * getTotalX has the following parameter(s):
int a[n]: an array of integers
int b[m]: an array of integers
Returns:
int: the number of integers that are between the sets
 */

    function getTotalX(a, b) {
        // your code here
        let result = 0;
        let index = 1;
        let cloneA = a.splice(1, a.length);

        while(a[0]*index <= b[0]) {
           if(cloneA.every(item => (a[0] * index) % item === 0)
           &&
           b.every(item => item % (a[0] * index) === 0)){
                result++;
           }
              index++;
        }

        return result;
    }

    console.log(getTotalX([2, 4], [16, 32, 96]));
    console.log(getTotalX([3, 4], [12, 32, 96]));