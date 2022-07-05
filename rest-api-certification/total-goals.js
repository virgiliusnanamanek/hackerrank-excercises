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
 * Complete the 'getTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING team
 *  2. INTEGER year
 */

async function getTotalGoals(team, year) {
    // API endpoint: https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team1=<team>&page=<page>
    // API endpoint:https://jsonmock.hackerrank.com/api/football_matches?year=<year>&team2=<team>&page=<page>

    let counter = 0;

    const res1 = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}`);
    const result1 = res1.data;
    const pages = result1.total_pages;

    for(const count of Array.from({length : pages}, (_, i) => i + 1)) {
        const res = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}&page=${count}`);
        const result = res.data;
        const {data} = result;
        for(const item of data) {
            counter = counter + Number(item.team1goals);
        }
    }

    const res2 = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}`);
    const result2 = res2.data;
    const {total_pages} = result2;

    for(const count of Array.from({length : total_pages}, (_, i) => i + 1)) {
        const res = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=${count}`);
        const result = res.data;
        const {data} = result;
        for(const item of data) {
            counter = counter + Number(item.team2goals);
        }
    }

    return counter;

}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const team = readLine();

    const year = parseInt(readLine().trim(), 10);

    const result = await getTotalGoals(team, year);

    ws.write(result + '\n');

    ws.end();
}
