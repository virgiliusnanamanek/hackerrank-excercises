/**
 * function marcsCakewalk has the following parameter(s):
int calorie[n]: the calorie counts for each cupcake
Returns:
long: the minimum miles necessary
 */

/**
 * 
 * The first line contains an integer n , the number of cupcakes in calorie.
The second line contains n space-separated integers, calori[i].
 */


function marcsCakewalk(calorie) {
    // your code here
    let miles = 0;
  
  calorie.sort(function(a,b){
    return b - a;
  });
  
  for(let i = 0; i < calorie.length; i++){
    miles = miles + ((2**i)*calorie[i]);
  }
  
  return miles;
}