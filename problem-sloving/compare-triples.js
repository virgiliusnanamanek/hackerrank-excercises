/**
 * function compareTriplets has the following parameter(s):
int a[3]: Alice's challenge rating
int b[3]: Bob's challenge rating
Return:
int[2]: Alice's score is in the first position, and Bob's score is in the second.
 */

    function compareTriplets(a, b) {
        let alice = 0;
        let bob = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] > b[i]) {
                alice++;
            } else if (a[i] < b[i]) {
                bob++;
            }
        }
        return [alice, bob];
    }