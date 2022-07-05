/*
 * Complete the 'sortRoman' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY names as parameter.
 */


/*
 * Complete the 'sortRoman' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY names as parameter.
 */

function sortRoman(names) {
    return names.sort((a, b) => {
        const aRoman = romanToInt(a);
        const bRoman = romanToInt(b);

        return bRoman - aRoman;
    }
    );

    function romanToInt(roman) {
        const romanMap = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        };

        let sum = 0;
        let prev = 0;

        for (let i = roman.length - 1; i >= 0; i--) {
            const current = romanMap[roman[i]];
            sum += current;

            if (current < prev) {
                sum -= 2 * prev;
            }

            prev = current;
        }

        return sum;
    }


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const namesCount = parseInt(readLine().trim(), 10);

    let names = [];

    for (let i = 0; i < namesCount; i++) {
        const namesItem = readLine();
        names.push(namesItem);
    }

    const result = sortRoman(names);

    ws.write(result.join('\n') + '\n');

    ws.end();
}