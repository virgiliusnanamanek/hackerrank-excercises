/**
 * countingValleys has the following parameter(s):
int steps: the number of steps on the hike
string path: a string describing the path
Returns:
int: the number of valleys traversed
 */

    function countingValleys(steps, path) {
        // your code here
        let strArr = path.split('')
        let count = 0
        let result = 0
        for(let step=0; step<steps; step++){
            if(count == 0 && strArr[step].toLowerCase() == 'd'){
                count -= 1
                result += 1
            } else if(strArr[step].toLowerCase() == 'd'){
                count -= 1
            } else {
                count += 1
            }
        }
        return result
    }