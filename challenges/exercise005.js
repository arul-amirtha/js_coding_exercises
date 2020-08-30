const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  return ((!nums.includes(n)) || (nums.indexOf(n) == nums.length - 1)) ? null : nums[nums.indexOf(n) + 1]
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const count = { 1: 0, 0: 0 };
  for (let c in str) {
    if (str[c] == '0') count[0]++
    else if (str[c] == '1') count[1]++
  }
  return count
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let revnum = n % 10
  let num = Math.floor(n / 10)
  while (num !== 0) {
    revnum = (revnum * 10) + (num % 10)
    num = Math.round(num / 10)
  }
  return revnum
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sumarr = 0
  for (let i = 0; i < arrs.length; i++) {
    arrs[i].forEach(n => sumarr += n)
  }
  return sumarr
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) return arr
  let swapArr = []
  const lastitem = arr.shift()
  swapArr.push(arr.pop())
  arr.forEach(n => swapArr.push(n))
  swapArr.push(lastitem)
  return swapArr
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (let prop in haystack) {
    if (typeof haystack[prop] === 'string' && haystack[prop].toUpperCase().includes(searchTerm.toUpperCase())) {
      return true
    }
  }
  return false
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const strdict = {};
  let newstr = str.replace(/[^\w\s]|_/g, "").split(" ")
  newstr.forEach(word => strdict[word.toLowerCase()] === undefined ? strdict[word.toLowerCase()] = 1 : strdict[word.toLowerCase()] += 1)
  return strdict
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
