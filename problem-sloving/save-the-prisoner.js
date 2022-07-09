/**
 * saveThePrisoner has the following parameter(s):
int n: the number of prisoners
int m: the number of sweets
int s: the chair number to begin passing out sweets from
Returns
int: the chair number of the prisoner to warn
 */

    function saveThePrisoner(n, m, s) {
        // your code here
        return (((m%n) + s - 1) % n) || n;
    }