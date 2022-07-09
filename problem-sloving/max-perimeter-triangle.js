/**
 * function maximumPerimeterTriangle has the following parameter(s):
int sticks[n]: the lengths of sticks available
Returns:
int[3] or int[1]: the side lengths of the chosen triangle in non-decreasing order or -1
 */

    function maximumPerimeterTriangle(a) {
        a.sort((a1, b1) => b1 - a1); 
        let sum = 0, elements = [];
        for(let i = 2; i < a.length; i++) {
            if(a[i - 2] < (a[i - 1] + a[i])) {
                let tempSum = a[i] + a[i - 1] + a[i - 2];
                if(tempSum > sum) {
                    sum = tempSum;
                    elements = [a[i], a[i - 1], a[i - 2]];
                }
            } 
        }
        return elements.length ? elements : [-1];
    
    }