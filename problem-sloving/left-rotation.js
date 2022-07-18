/**
 * rotLeft has the following parameter(s):
int a[n]: the array to rotate
int d: the number of rotations
Returns:
int a'[n]: the rotated array
 */

// console.log(rotLeft([33, 47, 70, 37, 8, 53, 13, 93, 71, 72,51, 100, 60, 87, 97], 13));
//result: [87, 97, 33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60]


function rotLeft(a, d) {
  while(d){
    a.push(a.shift()); // shift() removes the first element of an array and returns that element
    d--; // decrement d
  }
  return a;
}