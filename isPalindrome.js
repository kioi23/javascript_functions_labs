function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

console.log(isPalindrome("radar"));
console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Racecar"));