/**
 * jumpingOnClouds has the following parameter(s):
int c[n]: an array of binary integers
Returns:
int: the minimum number of jumps required
 */

  function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;
    while (i < c.length - 1) {
      if (i + 2 < c.length && c[i + 2] === 0) {
        i += 2;
      } else {
        i++;
      }
      jumps++;
    }
    return jumps;
  }