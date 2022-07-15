// sumPositiveNumbers with parameter(s):   numbers[n]: an array of integers
// Returns: int: the sum of all positive integers in the array with filter()


function sumPositiveNumbers(numbers) {
    // your code here
    return numbers.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
}

console.log(sumPositiveNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55

//function sumOddNumbers such that it returns the sum of all the odd numbers from the numbers parameter it receives
//The function should also work for negative numbers.

function sumOddNumbers(numbers) {
    // your code here
    return numbers.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num, 0);
}