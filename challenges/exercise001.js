function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0) + '.' + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let vatPrice = (originalPrice + (originalPrice * vatRate) / 100);
  if (Number.isInteger(vatPrice)) return vatPrice;
  else return parseFloat(vatPrice.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let salePrice = 0
  salePrice = originalPrice - (originalPrice * reduction) / 100;
  if (Number.isInteger(salePrice)) return salePrice;
  else return parseFloat(salePrice.toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  //If odd return middle character
  if (str.length % 2) return str.substr(str.length / 2, 1);
  else return str.substr(str.length / 2 - 1, 2);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let splitword = [], reverseArr = [], joinRevArr = [];
  splitword = word.split('');
  reverseArr = splitword.reverse();
  joinRevArr = reverseArr.join('');
  return joinRevArr;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let revArr = [];
  //Replaced for loop with foreach
  words.forEach(word => revArr.push(reverseWord(word)));
  return revArr;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  let i = 0;
  for (i = 0; i < users.length; i++) {
    if (users[i].type == 'Linux') count++;
  }
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = 0, i = 0, avg = 0;
  for (i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  avg = sum / (scores.length);
  if (Number.isInteger(avg)) return avg;
  else return parseFloat(avg.toFixed(2));

}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if ((n % 3 == 0) && (n % 5 == 0)) return "fizzbuzz";
  else if (n % 5 == 0) return "buzz";
  else if (n % 3 == 0) return "fizz";
  return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
