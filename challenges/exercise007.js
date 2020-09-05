/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (typeof (n) !== 'number') throw new Error("Parameter should be a number");
  if (!Number.isInteger(n)) throw new Error("Parameter should be an Integer");
  let num = n;
  let sum = 0;
  let i = 0;
  for (i = 1; num > 0; i++) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined) {
    step = 1;
  }
  let rangearr = [];
  let i = 0;
  for (i = start; i <= end; i += step) {
    rangearr.push(i);
  }
  return rangearr;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  let screentimeAlert = [];
  let sumscreentime = 0;

  users.forEach(i => {
    i.screenTime.forEach(d => {
      sumscreentime = 0;
      if (d.date === date) {
        for (let app in d.usage) {
          sumscreentime += d.usage[app];
        }

      }
      if (sumscreentime > 100) {
        screentimeAlert.push(i.username);
      }
    })

  })
  return screentimeAlert;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  const hexpatt = /^#[0-9|A-G|a-g]{6}$/;
  let isValidhex = hexpatt.test(hexStr);
  if (!isValidhex) throw new Error("Not a valid hexadecimal string");
  const rgbstr = 'rgb(' + parseInt('0x' + hexStr.slice(1, 3)) + ',' + parseInt('0x' + hexStr.slice(3, 5)) + ',' + parseInt('0x' + hexStr.slice(5, 7)) + ')'
  return rgbstr;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  //Check for winner based on first array element
  let flag = true;
  let i = 0;
  let ch = '';
  let j = 0;
  //Find winner along each horizontal line
  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[i].length; j++) {
      if (j === 0 && board[i][j] === null) {
        flag = false;
        break;
      }
      if (j === 0) { ch = board[i][j] }
      else if (ch !== board[i][j]) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      return ch;
    }
    else flag = true;

  }
  //Find winner on each vertical line
  flag = true//Reset flag
  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[i].length; j++) {
      if (j === 0 && board[j][i] === null) {
        flag = false;
        break;
      }
      if (j == 0) { ch = board[j][i] }
      else if (ch !== board[j][i]) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      return ch;
    }
    else flag = true;

  }

  //Find winner along diagonal line 1
  //Reset character and flag
  if (board[0][0] !== null) {
    ch = board[0][0]
    flag = true
    for (i = 1; i < board.length; i++) {
      if (ch !== board[i][i]) {
        flag = false;
        break;
      }
      if (i + 1 === board.length && flag === true) {
        return ch;
      }
    }
  }

  //Find winner along other diagonal line 
  //Reset character and flag
  if (board[0][board.length - 1] !== null) {
    ch = board[0][board.length - 1];
    flag = true;
    for (i = 1; i < board.length; i++) {
      if (ch !== board[i][board.length - 1 - i]) {
        flag = false;
        break;
      }
      if (i === board.length - 1 && flag === true) {
        return ch;
      }
    }
  }
  return null;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
