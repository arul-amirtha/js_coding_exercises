/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("arr must be an array");
  let sum = 0;
  arr.forEach(n => {
    if (n % 3 == 0 || n % 5 == 0) {
      sum += n;
    }
  });
  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof (str) !== 'string') return false;
  const isValid = !/[^GCTA]/.test(str);
  return isValid
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (!isValidDNA(str)) throw new Error("Not a valid DNA string");
  const compstring = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' }
  const dnapatt = /[ATCG]/g;
  let compseq = str.replace(dnapatt, function (dna) {
    return compstring[dna];
  })
  return compseq;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (typeof (n) !== 'number') throw new Error("Parameter should be a number");
  if (!Number.isInteger(n)) throw new Error("Parameter should be a number not a float");
  let isflag = true;
  if (n == 1) return false;
  for (let i = 2; i <= n - 1; i++) {
    if (n % i === 0) {
      isflag = false;
      break;
    }
  }
  return isflag;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  let newmatrix = [];
  let newarr = [];
  let i = 0
  for (i = 0; i < n; i++) {
    newarr.push(fill);
  }
  for (i = 0; i < n; i++) {
    newmatrix.push(newarr);
  }
  return newmatrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  if (staff.length === 0) {
    return false;
  }
  let i = 0;
  let countstaff = 0;
  let rotadays = [];
  for (i = 0; i < staff.length; i++) {
    rotadays = staff[i].rota.filter(r => r.toLowerCase().includes(day.toLowerCase()));
    countstaff += rotadays.length;
  }
  return countstaff >= 3 ? true : false;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
