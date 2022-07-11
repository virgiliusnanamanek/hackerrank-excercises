/**
 * possibleChanges has the following parameter(s):
 * string usernames[n]: an array of strings denoting the usernames of employees
 * Returns
    * string[]: an array of strings containing either "YES" or "NO" based on whether the ith username can be changed with one swap to a new one that is smaller in alphabetical order
 */

    function possibleChanges(usernames) {
        // your code here
        let result = [];
        let i = 0;
        let j = 0;
        let temp = "";
        let count = 0;
        let flag = false;
        while (i < usernames.length) {
            j = i + 1;
            while (j < usernames.length) {
                if (usernames[i] > usernames[j]) {
                    temp = usernames[i];
                    usernames[i] = usernames[j];
                    usernames[j] = temp;
                    flag = true;
                }
                j++;
            }
            if (flag) {
                count++;
                flag = false;
            }
            i++;
        }
        for (let i = 0; i < usernames.length; i++) {
            if (usernames[i] === usernames[i + 1]) {
                result.push("NO");
            } else {
                result.push("YES");
            }
        }
        return result;
    }