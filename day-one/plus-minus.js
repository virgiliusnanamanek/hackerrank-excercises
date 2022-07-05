'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    const positive = arr.filter(x => x > 0).length / arr.length;
    const negative = arr.filter(x => x < 0).length / arr.length;
    const zero = arr.filter(x => x === 0).length / arr.length;

    console.log(positive.toFixed(6));
    console.log(negative.toFixed(6));
    console.log(zero.toFixed(6));

    return;


}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
