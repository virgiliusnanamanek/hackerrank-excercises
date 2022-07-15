// function to capitalize first letter of each word

function capitalizeFirstLetter(string) {
  return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // split the string into array of words and map each word to capitalize first letter
}

console.log(capitalizeFirstLetter('hello world'));
console.log(capitalizeFirstLetter('hello world'));
console.log(capitalizeFirstLetter('hello world hello world'));