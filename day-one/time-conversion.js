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
    //Input (stdin) : 07:05:45PM
    //Expected Output : 19:05:45
    
    const time = s.split(':');
    const hour = time[0];
    const minute = time[1];
    const second = time[2].split(' ')[0];
    const ampm = time[2].split(' ')[1];

    if (ampm === 'PM') {
        if (hour === '12') {
            return `${hour}:${minute}:${second}`;
        } else {
            return `${parseInt(hour) + 12}:${minute}:${second}`; 
        }
    } else {
        if (hour === '12') {
            return `00:${minute}:${second}`;
        } else {
            return `${hour}:${minute}:${second}`;
        }
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
