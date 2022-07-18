/**
 * minimumBribes has the following parameter(s):
int q[n]: the positions of the people after all bribes
Returns:
No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than 2 people.
 */

function minimumBribes(q) {
  let bribes = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i + 1) > 2) {
      console.log('Too chaotic');
      return;
    }
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) {
        bribes++;
      }
    }
  }
  console.log(bribes);
}