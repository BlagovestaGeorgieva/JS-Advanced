const isOddOrEven = require('./p2_IsOddOrEven');
const { assert } = require('chai');

describe ('isOddOrEven function tests', () => {

    it ('should return undefined if parameter is number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });

    it ('should return undefined if parameter is object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });

    it ('should return undefined if parameter is array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });

    it ('should return even', () => {
        assert.equal(isOddOrEven('hi'), 'even');
    });

    it ('should return odd', () => {
        assert.equal(isOddOrEven('yes'), 'odd');
    });
});