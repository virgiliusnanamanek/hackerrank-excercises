/**
 * designerPdfViewer has the following parameter(s):
int h[26]: the heights of each letter
string word: a string
Returns
int: the size of the highlighted area
 */

    function designerPdfViewer(h, word) {
        // your code here
        let max = 0;
        for(let i=0; i<word.length; i++){
            let letter = word.charCodeAt(i) - 97;
            if(h[letter] > max) {
                max = h[letter];
            }
        }
        return max * word.length;
    }