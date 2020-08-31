const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner

} = require('../challenges/exercise007')
describe(sumDigits, () => {
    test('returns not a number if parameter is not a number', () => {
        expect(() => {
            sumDigits([])
        }).toThrow("Parameter should be a number");
        expect(() => {
            sumDigits('dsds')
        }).toThrow("Parameter should be a number");
    }
    )
    test('returns not an Integer if parameter is a float', () => {
        expect(() => {
            sumDigits(2.712)
        }).toThrow("Parameter should be an Integer");
    }
    )
    test('returns sum of digits for a number', () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(6292)).toBe(19);
        expect(sumDigits(109243)).toBe(19);
        expect(sumDigits(2345)).toBe(14);

    })
    test('returns 0 as sum of digits for 0', () => {
        expect(sumDigits(0)).toBe(0);
    })
})
describe(createRange, () => {
    it('returns a range of arrays with inclusive start and end', () => {
        const result = createRange(1, 3, 1)
        const expected = [1, 2, 3]
        expect(result).toEqual(expected)
    })
    it('returns a range of arrays with inclusive start and end and correct step', () => {
        const result = createRange(3, 11, 2)
        const expected = [3, 5, 7, 9, 11]
        expect(result).toEqual(expected)
    })
    it('returns a range of arrays with inclusive start and end and step optional', () => {
        const result = createRange(1, 10)
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        expect(result).toEqual(expected)
    })
})
describe(getScreentimeAlertList, () => {
    it('returns users with screen time >100minutes', () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ]
        const date = "2019-05-04"
        expect(getScreentimeAlertList(users, date)).toEqual(["beth_1234"])
    })
    it('returns [] with no users whose screen time >100minutes', () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 16, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ]
        const date = "2019-05-04"
        expect(getScreentimeAlertList(users, date)).toEqual([])
    })

})
describe(hexToRGB, () => {
    test('Returns hexadecimal string required if parameter string is not valid ', () => {
        expect(() => {
            hexToRGB('hsd7337')
        }).toThrow('Not a valid hexadecimal string')
    })
    test('Returns RGB format for valid hexadecimal string', () => {
        expect(hexToRGB('#FF1133')).toBe('rgb(255,17,51)');
        expect(hexToRGB('#800080')).toBe('rgb(128,0,128)')
    })
})
describe(findWinner, () => {
    test('Returns correct winner for given array board on any line horizontal', () => {
        expect(findWinner([
            ["X", "X", "X"],
            ["0", null, "0"],
            ["0", null, "0"]
        ])).toBe('X')
        expect(findWinner([
            ["X", null, "0"],
            ["0", "0", "0"],
            ["X", null, "X"]
        ])).toBe('0')
        expect(findWinner([
            ["X", null, "0"],
            ["0", null, "0"],
            ["X", 'X', "X"]
        ])).toBe('X')
        expect(findWinner([
            [null, null, null],
            ["0", null, "0"],
            ["X", 'X', "X"]
        ])).toBe('X')
    });
    test('Returns correct winner for given array board on any line vertical', () => {
        expect(findWinner([
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ])).toBe('X')
        expect(findWinner([
            ["X", '0', "0"],
            [null, "0", null],
            ["X", '0', "X"]
        ])).toBe('0')
        expect(findWinner([
            ["0", null, "X"],
            ["X", null, "X"],
            ["0", '0', "X"]
        ])).toBe('X')
        expect(findWinner([
            [null, '0', "X"],
            [null, 'X', "X"],
            [null, '0', "X"]
        ])).toBe('X')
    });
    test('Returns correct winner for given array board on any diagonal line', () => {
        const board = [["X", "0", null], [null, "X", "0"], ["X", null, "X"]]
        expect(findWinner(board)).toBe("X");
        const board1 = [["0", "X", null], [null, "0", "X"], ["X", null, "0"]]
        expect(findWinner(board1)).toBe("0");


    });
    test('Returns correct winner for given array board on other diagonal line', () => {
        const board = [[null, "0", "X"], [null, "X", "0"], ["X", null, "0"]]
        expect(findWinner(board)).toBe("X");
        const board1 = [[null, "X", "0"], [null, "0", "X"], ["0", null, "X"]]
        expect(findWinner(board1)).toBe("0");


    });
    test('Returns null if there is no winner', () => {
        const board = [[null, "0", "X"], [null, null, "0"], ["X", '0', null]]
        expect(findWinner(board)).toBe(null);
        const board1 = [['0', "X", null], [null, null, "X"], [null, '0', "X"]]
        expect(findWinner(board1)).toBe(null);


    });

})