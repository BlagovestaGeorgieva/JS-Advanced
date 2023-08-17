const sumOfTwoNumbers = require('.');
const { assert } = require('chai');

it('Check the sum', () => {
    assert(sumOfTwoNumbers(2, 3), 5);
});