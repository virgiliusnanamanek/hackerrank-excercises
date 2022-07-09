/**
 * bonAppetit has the following parameter(s):
bill: an array of integers representing the cost of each item ordered
k: an integer representing the zero-based index of the item Anna doesn't eat
b: the amount of money that Anna contributed to the bill
 */


function bonAppetit(bill, k, b) {
    // your code here
    let sum = 0;
    for(let i = 0; i < bill.length; i++) {
        if(i !== k) {
            sum += bill[i];
        }
    }

    if(sum / 2 === b) {
        console.log('Bon Appetit');
    } else {
        console.log(b - sum / 2);
    }
}