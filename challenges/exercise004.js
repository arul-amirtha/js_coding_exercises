function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallnumarr = [];
  smallnumarr = nums.filter(function (n) {
    return n < 1;
  })
  return smallnumarr;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let namesStartarr = [];
  namesStartarr = names.filter(function (name) {
    return name[0].toLowerCase() == char.toLowerCase();
  })
  return namesStartarr;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbsarr = [];
  verbsarr = words.filter(function (item) {
    return item.trim().substr(0, 3) == 'to ';
  })
  return verbsarr;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let numarr = [];
  numarr = nums.filter(function (item) {

    return Number.isInteger(item);
  })
  return numarr;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];
  users.forEach(function (item) {
    cities.push(item.data.city.displayName);
  });

  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let sqrtarr = [];
  sqrtarr = nums.map(n => {
    return Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : parseFloat(Math.sqrt(n).toFixed(2));
  })

  return sqrtarr;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let validSentences = [];
  validSentences = sentences.filter(s => {
    return s.toLowerCase().includes(str.toLowerCase());
  })
  return validSentences;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let lsides = [];

  triangles.forEach(function (item) {
    let sortarr = item.sort(function (a, b) { return b - a });
    lsides.push(sortarr[0]);
  });

  return lsides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
