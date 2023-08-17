const lookupChar = require('./p3_CharLookUp');
const { expect } = require('chai');

describe ('lookupChar function test', () => {

    it ('should return undefined with wrong parameters', () => {
        expect(lookupChar(2, 1.5)).to.equal(undefined);
    });

    it ('should return undefined if first parameter is not a string', () => {
        expect(lookupChar(2, 2)).to.equal(undefined);
    });

    it ('should return undefined if second parameter is not a number', () => {
        expect(lookupChar('b', 'b')).to.equal(undefined);
    });

    it ('should return undefined if second parameter is a decimal number', () => {
        expect(lookupChar('Game', 1.5)).to.equal(undefined);
    });

    it ('should return incorrect index', () => {
        expect(lookupChar('Game', -2)).to.equal('Incorrect index');

    });

    it ('should return incorrect index', () => {
        expect(lookupChar('Game', 15)).to.equal('Incorrect index');
    })

    it ('should return charAt index', () => {
        expect(lookupChar('G', 0)).to.equal('G');
    })

    it ('should return charAt index', () => {
        expect(lookupChar('Game', 1)).to.equal('a');
    })
})