/**
 * angryProfessor has the following parameter(s):
int k: the threshold number of students
int a[n]: the arrival times of the  students
Returns
string: YES if class is cancelled, or NO otherwise
 */

    function angryProfessor(k, a) {
        // your code here
        let count = 0;
        for(let i = 0; i < a.length; i++) {
            if(a[i] <= 0) {
                count++;
            }
        }
        return count >= k ? 'NO' : 'YES';
    }