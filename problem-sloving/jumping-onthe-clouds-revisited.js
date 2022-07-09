/**
 * jumpingOnClouds has the following parameter(s):
int c[n]: the cloud types along the path
int k: the length of one jump
Returns
int: the energy level remaining.
 */

    function jumpingOnClouds(c, k) {
        // your code here
        var current;
  var next;
  var jumps = 0;
  let potentialNext;

  let i = 0;

  while(i < c.length){                          
    current = c[i];
    if(i+2 < c.length && c[i+2] == 0){          
      i+=2;                                     
      jumps += 1;                               
    } else if(i+1 < c.length && c[i+1] == 0){    
      i+=1;                                     
      jumps += 1;                               
    } else i+= 1;                               
  }


  return jumps;
    }