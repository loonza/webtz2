const { isSquareFirst, isSquareSecond } = require('./3.js');

function runTests() {
    const Asserts = [
        { input: -1421, expected: false },
        { input: -1, expected: false },
        { input: 0, expected: true },
        { input: 1, expected: true },
        { input: 3, expected: false },
        { input: 4, expected: true },
        { input: 8, expected: false },
        { input: 9, expected: true },
        { input: 10, expected: false },
        { input: 18, expected: false },
        { input: 25, expected: true },
        { input: 26, expected: false },
        { input: 100, expected: true },
        { input: 101, expected: false },
        { input: 10000, expected: true },
        { input: 11111, expected: false },
    ];

    for (const { input, expected } of Asserts) {
        const r1 = isSquareFirst(input);
        const r2 = isSquareSecond(input);
        console.assert(r1 === expected, ` isSquareFirst(${input}) → ${r1}, ожидалось: ${expected}`);
        console.assert(r2 === expected, ` isSquareSecond(${input}) → ${r2}, ожидалось: ${expected}`);
    }

    console.log('Все тесты прошли успешно');
}

runTests();
