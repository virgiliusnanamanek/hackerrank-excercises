/**
 * gradingStudents has the following parameter(s):
int grades[n]: the grades before rounding
Returns:
int[n]: the grades after rounding as appropriate
 */

    function gradingStudents(grades) {
        // your code here
        let cur = [];
        for(let i = 0; i < grades.length; i++) {
            if(grades[i] < 38) {
                cur.push(grades[i]);
            } else {
                let temp = grades[i] + (5 - (grades[i] % 5));
                if(temp - grades[i] < 3) {
                    cur.push(temp);
                } else {
                    cur.push(grades[i]);
                }
            }
        }
        return cur;
    }