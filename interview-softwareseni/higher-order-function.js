// create higher order function

/**
 * Higher-order function atau fungsi orde tinggi adalah fungsi yang 1 menerima fungsi lain sebagai parameternya, dan/atau 2) mengembalikan fungsi lain sebagai keluarannya.
 */

function filter(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filter([1, 2, 3, 4, 5], function(num) { return num % 2 === 0; }));