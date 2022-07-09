// palindrome checker

function isPalindrome(str) {
  var reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)