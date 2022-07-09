/**
 * countApplesAndOranges has the following parameter(s):
s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // your code here
    let count = 0;
    let count2 = 0;
    for(let i = 0; i < apples.length; i++) {
        let apple = a + apples[i];
        if(apple >= s && apple <= t) {
            count++;
        }
    }

    for(let i = 0; i < oranges.length; i++) {
        let orange = b + oranges[i];
        if(orange >= s && orange <= t) {
            count2++;
        }
    }

    console.log(count);
    console.log(count2);
}