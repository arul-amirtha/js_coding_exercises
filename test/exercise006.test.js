const {
    sumMultiples,
    areWeCovered,
    createMatrix,
    isValidDNA,
    getComplementaryDNA,
    isItPrime
} = require("../challenges/exercise006")

describe(sumMultiples, () => {
    test("throws an error if no array is passed", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");
        expect(() => {
            sumMultiples("arr");
        }).toThrow("arr must be an array");
    })
    test("it returns the sum of numbers that are multiples of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });
    test("it works with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 24, 33, 55, 2.0, 5.0]);
        const expected = 125;
        expect(result).toBe(expected);
    });
    test("returns 0 if there are no numbers which are multiples of 3 or 5", () => {
        expect(sumMultiples([1, 4, 2])).toBe(0);
    });
});
describe(isValidDNA, () => {
    test("if string type parameter not passed return false", () => {
        expect(isValidDNA(2525)).toBe(false);
        expect(isValidDNA(['sas', 'sasa'])).toBe(false)
    })

    test('if matching DNA string only return true', () => {
        expect(isValidDNA('CGGATTTTTCCCTTT')).toBe(true);
        expect(isValidDNA('TGACTAACTTT')).toBe(true);
        expect(isValidDNA('TGTT')).toBe(true);
    })
    test('if anything other than matching DNA string return false', () => {
        expect(isValidDNA('CGGATT  hyEMRRRTTTC CCTTT')).toBe(false);
        expect(isValidDNA('TGA C;;;;444TAACTTT')).toBe(false);
        expect(isValidDNA('TGT31387dddT')).toBe(false);
    })
});
describe(getComplementaryDNA, () => {
    test('return not valid DNA string error if not valid DNA string', () => {
        expect(() => {
            getComplementaryDNA('CGGATT  hyEMRRRTTTC CCTTT');
        }).toThrow("Not a valid DNA string");
    })
    test('if valid DNA string return complementary string', () => {
        expect(getComplementaryDNA('ACTG')).toBe('TGAC');
        expect(getComplementaryDNA('TGAC')).toBe('ACTG');
        expect(getComplementaryDNA('TGACTGACACTG')).toBe('ACTGACTGTGAC');
    })
})
describe(createMatrix, () => {
    it('returns a matrix of 1*1 when 1 is passed', () => {
        const result = createMatrix(1, 'foo')
        const expected = [['foo']]
        expect(result).toEqual(expected)
    })
    it('returns a matrix of 3*3 when 3 is passed', () => {
        const result = createMatrix(3, 'foo')
        const expected = [['foo', 'foo', 'foo'], ['foo', 'foo', 'foo'], ['foo', 'foo', 'foo']]
        expect(result).toEqual(expected)
    })
    it('returns a matrix of 4*4 when 4 is passed', () => {
        const result = createMatrix(4, 321)
        const expected = [[321, 321, 321, 321], [321, 321, 321, 321], [321, 321, 321, 321], [321, 321, 321, 321]]
        expect(result).toEqual(expected)
    })
})
describe(isItPrime, () => {
    test('throw error if it is not a number', () => {
        expect(() => {
            isItPrime([2, 3, 4])
        }).toThrow('Parameter should be a number');
        expect(() => {
            isItPrime('all')
        }).toThrow('Parameter should be a number');
    })
    test('return true if it is a prime number', () => {
        expect(isItPrime(5)).toBe(true)
        expect(isItPrime(7)).toBe(true)
        expect(isItPrime(29)).toBe(true)
        expect(isItPrime(2)).toBe(true)
    })
    test('throw error if it is a float value', () => {
        expect(() => {
            isItPrime(4.9)
        }).toThrow('Parameter should be a number not a float');

    })
})
describe("areWeCovered", () => {
    test("it returns false if there are no staff at all", () => {
        expect(areWeCovered([], 'Sunday')).toBe(false);
        expect(areWeCovered([], 'Monday')).toBe(false);
        expect(areWeCovered([], 'Tuesday')).toBe(false);
        expect(areWeCovered([], 'Thursday')).toBe(false);
        expect(areWeCovered([], 'Wednesday')).toBe(false);
        expect(areWeCovered([], 'Friday')).toBe(false);
        expect(areWeCovered([], 'Saturday')).toBe(false);
    });
    test("return false if there are staff <3 scheduled on a day ", () => {
        const staff = [
            { name: 'Gary', rota: ['Monday', 'Tuesday'] },
            { name: 'Paul', rota: ['Monday', 'Tuesday'] },
            { name: 'Adam', rota: ['Monday', 'Tuesday'] },
            { name: 'Leo', rota: ['Monday', 'Tuesday'] },
            { name: 'Jane', rota: ['Monday', 'Tuesday'] }
        ]
        expect(areWeCovered(staff, 'Wednesday')).toBe(false)
        expect(areWeCovered(staff, 'Friday')).toBe(false)
    });
    test("return true if there are staff >=3 scheduled on a day ", () => {
        const staff = [
            { name: 'Gary', rota: ['Monday', 'Tuesday'] },
            { name: 'Paul', rota: ['Monday', 'Tuesday'] },
            { name: 'Adam', rota: ['Monday', 'Tuesday'] },
            { name: 'Leo', rota: ['Wednesday', 'Tuesday'] },
            { name: 'Jane', rota: ['Friday', 'Tuesday'] }
        ]
        expect(areWeCovered(staff, 'Monday')).toBe(true)
        expect(areWeCovered(staff, 'Tuesday')).toBe(true)
    })
    test("ignore case of day and return true if there are staff >=3 scheduled on a day ", () => {
        const staff = [
            { name: 'Gary', rota: ['Monday', 'TUESDAY'] },
            { name: 'Paul', rota: ['Monday', 'Tuesday'] },
            { name: 'Adam', rota: ['Monday', 'TUESDAY'] },
            { name: 'Leo', rota: ['Wednesday', 'TUESDAY'] },
            { name: 'Jane', rota: ['Friday', 'Tuesday'] }
        ]
        expect(areWeCovered(staff, 'MOnday')).toBe(true)
        expect(areWeCovered(staff, 'Tuesday')).toBe(true)
    })
});