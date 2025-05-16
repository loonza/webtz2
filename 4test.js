const assert = require('assert');
const { findPairsFirst, findPairsSecond } = require('./4');

function assertEquals(a, b) {
    return a.length === b.length && a.every(x => b.includes(x));
}


function runTests(){
    const Asserts = [
        {
            array:[3, 5, -4, 8, 11, 1, -1, 6],
            targetSum : 10,
            expected: [-1,11]
        },
        {
            array:[1,5,8,10],
            targetSum: 11,
            expected: [1,10]
        },
        {
            array: [111,222,333],
            targetSum: 1,
            expected: []
        }
    ];
    for (const { array, targetSum, expected } of Asserts) {
        const result1 = findPairsFirst(array, targetSum);
        const result2 = findPairsSecond(array, targetSum);

        assert(
            assertEquals(result1, expected) || (expected.length === 0 && result1.length === 0),
            `findPairsFirst(${JSON.stringify(array)}, ${targetSum}) → ${result1} | ожидалось: ${expected}`
        );

        assert(
            assertEquals(result2, expected) || (expected.length === 0 && result2.length === 0),
            `findPairsSecond(${JSON.stringify(array)}, ${targetSum}) → ${result2} | ожидалось: ${expected}`
        );
    }
    console.log(' Все тесты прошли ');
}


runTests();