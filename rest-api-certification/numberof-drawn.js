'use strict';

const axios = require('axios').default;

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
 * Complete the 'getNumDraws' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER year as parameter.
 */

async function getNumDraws(year) {

    // API endpoint: https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team1=<team>&page=<page>
    // API endpoint:https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team2=<team>&page=<page>

    let counter = 0;

    try{
       

    const res1 = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&`);

    const result1 = res1.data;
    const {total_pages} = result1;

    for(const count of Array.from({length : total_pages}, (_, i) => i + 1)) {
        const res = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&page=${count}`);
        const result = res.data;
        console.log(JSON.stringify(result.data));
        for(const item of result.data) {
            if(item.team1goals === item.team2goals) {
                counter++;
            }
        }
    }
    } catch(err) {
        console.log(err);
    }

    return counter;


}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = await getNumDraws(year);

    ws.write(result + '\n');

    ws.end();
}
