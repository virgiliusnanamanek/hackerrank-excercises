/**
 * pageCount has the following parameter(s):
int n: the number of pages in the book
int p: the page number to turn to
Returns:
int: the minimum number of pages to turn
 */

    function pageCount(n, p) {
        // your code here
        var frontFlip = Math.floor(p/2);
        var backFlip = Math.floor((n/2)-frontFlip);
        
        var result = Math.min(frontFlip, backFlip);
        return result;
    }