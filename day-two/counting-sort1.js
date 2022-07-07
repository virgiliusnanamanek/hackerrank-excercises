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
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Challenge
// Given a list of integers, count and return the number of times each value appears as an array of integers.

// Function Description

// Complete the countingSort function in the editor below.

// countingSort has the following parameter(s):

// arr[n]: an array of integers
// Returns
// int[100]: a frequency array

function countingSort(arr) {
  
    if(arr.length < 2) {
        return arr;
    }

    let maxValue = arr[0];
    
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    const countingArr = new Array(maxValue + 1);

    for(let val of arr) {
        if(!countingArr[val]) {
            countingArr[val] = 0;
        }
        countingArr[val]++;
    }

    const resultArr = [];

    for(let i = 0; i < countingArr.length; i++) {
        while(countingArr[i] > 0) {
            resultArr.push(i);
            countingArr[i]--;
        }
    }

    return resultArr;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
