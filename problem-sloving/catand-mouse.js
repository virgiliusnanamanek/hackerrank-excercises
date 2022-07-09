/**
 * catAndMouse has the following parameter(s):
int x: Cat 's position
int y: Cat 's position
int z: Mouse 's position
Returns
string: Either 'Cat A', 'Cat B', or 'Mouse C'
 */

    function catAndMouse(x, y, z) {
        // your code here
        let catA = Math.abs(x - z);
        let catB = Math.abs(y - z);
        if(catA < catB) {
            return 'Cat A';
        } else if(catA > catB) {
            return 'Cat B';
        } else {
            return 'Mouse C';
        }
    }