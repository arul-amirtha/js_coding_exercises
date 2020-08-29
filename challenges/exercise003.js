const { capitalize } = require("./exercise001");

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(x => x * x)
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelword = ''
  if (words.length == 1) {
    camelword = words[0].toLowerCase()
  }
  else {
    camelword = words[0]
    let i = 1
    for (i = 1; i < words.length; i++) {
      camelword = camelword + capitalize(words[i])
    }

  }

  return camelword
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let i=0
  let subjects=0
  for(i=0;i<people.length;i++){
   subjects+=people[i].subjects.length
  }
  return subjects
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let i=0
  let ingrdPresent=false
  for(i=0;i<menu.length;i++){
   if (menu[i].ingredients.includes(ingredient)){
     ingrdPresent = true
     break;
   }
  }
  return ingrdPresent
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let duplicateitems=[]
  duplicateitems=arr1.filter(value => arr2.includes(value))
  return duplicateitems.sort().filter(function(item, pos, ary) {
    return !pos || item != ary[pos - 1];
  });
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
