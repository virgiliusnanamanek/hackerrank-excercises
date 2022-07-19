/**
 * matchingStrings has the following parameters:
string strings[n] - an array of strings to search
string queries[q] - an array of query strings
Returns
int[q]: an array of results for each query
 */

    function matchingStrings(strings, queries) {
        let result = [];
        for (let i = 0; i < queries.length; i++) {
            let count = 0;
            for (let j = 0; j < strings.length; j++) {
                if (queries[i] === strings[j]) {
                    count++;
                }
            }
            result.push(count);
        }
        return result;
    }