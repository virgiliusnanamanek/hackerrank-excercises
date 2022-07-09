/**
 * dayOfProgrammer has the following parameter(s):
year: an integer
Input Format
A single integer denoting year y.
 */

    function dayOfProgrammer(year) {
        // your code here
        let result = "";
        if(year < 1918) {
            if(year % 4 === 0) {
                result = "12.09." + year;
            } else {
                result = "13.09." + year;
            }
        } else if(year === 1918) {
            result = "26.09." + year;
        } else {
            if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
                result = "12.09." + year;
            } else {
                result = "13.09." + year;
            }
        }
        return result;
    }