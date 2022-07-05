'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    //Input (stdin): 07:05:45PM
    //Output (stdout): 19:05:45

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

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
