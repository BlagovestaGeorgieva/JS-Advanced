const mathEnforcer = require('./p4_MathEnforcer');
const { assert } = require('chai');

describe('mathEnforcer function tests', ()=> {

    describe('addFive function tests', ()=> {

        it ('should return undefined if the parameter is not a number', () => {
            assert(mathEnforcer.addFive('5') === undefined);
        });

        it ('should return undefined if the parameter is not a number', () => {
            assert(mathEnforcer.addFive(null) === undefined);
        });

        it ('should return undefined if the parameter is not a number', () => {
            assert(mathEnforcer.addFive(undefined) === undefined);
        });

        it ('should return a result if the parameter is a number', () => {
            assert(mathEnforcer.addFive(5) === 10);
        });

        it ('should return a result if the parameter is a negative number', () => {
            assert(mathEnforcer.addFive(-5) === 0);
        });

        it ('should return a result if the parameter is a decimal number', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5);
        });
    })

    describe('subtractTen function tests', ()=> {

        it ('should return undefined if the parameter is not a number', () => {
            assert(mathEnforcer.subtractTen('5') === undefined);
        });

        it ('should return undefined if the parameter is not a number', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined);
        });

        it ('should return undefined if the parameter is not a number', () => {
            assert(mathEnforcer.subtractTen(null) === undefined);
        });

        it ('should return a result if the parameter is a negative number', () => {
            assert(mathEnforcer.subtractTen(-10) === -20);
        });

        it ('should return a result if the parameter is a positive number', () => {
            assert(mathEnforcer.subtractTen(20) === 10);
        });

        it ('should return a result if the parameter is a decimal number', () => {
            assert(mathEnforcer.subtractTen(10.5) === 0.5);
        });
    })

    describe('sum function tests', ()=> {

        it ('should return undefined if the first parameter is not a number', () => {
            assert(mathEnforcer.sum('test', 5) === undefined);
        });

        it ('should return undefined if the second parameter is not a number', () => {
            assert(mathEnforcer.sum(2, 'solve') === undefined);
        });

        it ('should return a result if both parameters are numbers', () => {
            assert(mathEnforcer.sum(5, 10) === 15)
        });

        it ('should return undefined if both second parameters are not a number', () => {
            assert(mathEnforcer.sum('solve1', 'solve') === undefined);
        });

        it ('should return a result if the parameter is a negative number', () => {
            assert(mathEnforcer.sum(-10, -5) === -15);
        });

        it ('should return a result if the parameter is decimal number', () => {
            assert(mathEnforcer.sum(10.5, 2.5) === 13);
        });
    })
})
   