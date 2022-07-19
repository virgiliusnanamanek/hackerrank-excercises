function twoSums(array, target) {
    const hashtable = {}; // initialize hashtable to an empty object because we will use it to store the values of the array.
     for ( let i = 0; i < array.length; i++) {
        let complement = target - array[i]; // get the complement of the current element by subtracting the current element from the target.
       
        if ( hashtable.hasOwnProperty(complement)){ // if the complement is in the hashtable, return the indices of the two elements.
          return [hashtable[complement], i] // return the indices of the two elements.
        }
 
        hashtable[array[i]] = i;  // if the complement is not in the hashtable, add the current element to the hashtable.  
     };
     
     return null; // return null if the complement is not in the hashtable.
}

console.log(twoSums([2, 7, 11, 15], 9));
console.log(twoSums([3, 2, 4], 6));