/**
 * mostActive has the following parameter:
 * string customers[n] : an array of customer names
 * Returns:
 * string[]: an alphabetically ascending array of 3 customer names
 */

    function mostActive(customers) {
        // your code here
        let sorted = customers.sort();
        let result = [];
        let count = 0;
        let max = 0;
        let maxIndex = 0;
        for(let i = 0; i < sorted.length; i++) {
            if(sorted[i] === sorted[i + 1]) {
                count++;
            } else {
                if(count > max) {
                    max = count;
                    maxIndex = i;
                }
                count = 0;
            }
        }
        for(let i = maxIndex; i >= 0; i--) {
            if(sorted[i] !== sorted[i - 1]) {
                result.push(sorted[i]);
            }
        }
        for(let i = maxIndex + 1; i < sorted.length; i++) {
            if(sorted[i] !== sorted[i + 1]) {
                result.push(sorted[i]);
            }
        }
        return result.sort();
    }

    console.log(mostActive(["A", "A", "A", "B", "B", "B"]));
    console.log(mostActive(["A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "B"]));
