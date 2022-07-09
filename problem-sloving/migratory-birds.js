/**
 * migratoryBirds has the following parameter(s):
int arr[n]: the types of birds sighted
Returns:
int: the lowest type id of the most frequently sighted birds
 */

    function migratoryBirds(arr) {
        // your code here
        let objectArr=arr.reduce((obj, b)=> {
            obj[b] = ++obj[b] || 1;
            return obj;
          }, {});
    //      console.log(objectArr)
         const maxVal=Math.max(...Object.values(objectArr))
         const num=Object.keys(objectArr).find(key => objectArr[key] === maxVal)
       
    
    return num
    }