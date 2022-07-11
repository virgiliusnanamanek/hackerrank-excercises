/**
 * appendAndDelete has the following parameter(s):
string s: the initial string
string t: the desired string
int k: the exact number of operations that must be performed
Returns:
string: either Yes or No
 */

    function appendAndDelete(s, t, k) {
        // your code here
        let a = s,
        moves = 0,
        empty = false;

    for (let i = 0; i < Math.max(s.length, t.length); i++) {
        if (a[i] == t[i]) continue;
        else if (!a[i] && !!t[i]) {
            a += t[i];
            moves++;
        } else {
            if (i == 0) empty = true;
            a = s.substr(0, i);
            moves += s.length - i--;
        }
    }
    if (s.length + t.length <= k || moves <= k && ((k - moves) % 2 == 0 || empty == true)) return "Yes";
    else return "No";
    }