/**
 * jumpingOnClouds has the following parameter(s):
int c[n]: the cloud types along the path
int k: the length of one jump
Returns
int: the energy level remaining.
 */

    function jumpingOnClouds(c, k) {
        // your code here
        let jump = 0;
        let i =0; 

        do {
          jump += k;
          i = c[i+2] == 0 ? i+2 : i+1;
        } while (i < c.length - 1);
        return jump;
    }