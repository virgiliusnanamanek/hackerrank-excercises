/**
 * function timeConversion has the following parameter(s):
string s: a time in 12 hour format
Returns:
string: the time in 24 hour format
 */

    function timeConversion(s) {
        // your code here
        let lastTwo = s.substring(8)
    let fullTime = s.substring(0, 8);
    let times = fullTime.split(':');

    if (lastTwo === 'AM') {
        if (times[0] === '12') {
            times[0] = '00';
        }
    } else {
        if (times[0] !== '12') {
            times[0] = parseInt(times[0]) + 12;
        }
    }

    return times.join(':');
    }