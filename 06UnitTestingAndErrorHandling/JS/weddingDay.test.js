const weddingDay = require('./weddingDay.js');
const { assert, expect } = require('chai');

describe ('weddingDay function tests', () => {

    describe ('pickVenue function tests', () => {

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.pickVenue(10, '1', 10)).to.throw('Invalid Information!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.pickVenue(true, 100, 10)).to.throw('Invalid Information!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.pickVenue(10, 200, false)).to.throw('Invalid Information!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.pickVenue(100, 1000, '')).to.throw('Invalid Information!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.pickVenue(10, 150, 'Sofia')).to.throw('The location of this venue is not in the correct area!');
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.pickVenue(170, 100, 'Varna')).to.equal(`This venue meets the requirements, with capacity of 170 guests and 100$ cover.`);
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.pickVenue(170, 130, 'Varna')).to.equal(`This venue does not meet your requirements!`);
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.pickVenue(100, 120, 'Varna')).to.equal(`This venue does not meet your requirements!`);
        });

    });

    describe ('otherSpendings function test', () => {

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.otherSpendings([], 1000, 'test')).to.throw('Invalid Information!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.otherSpendings(10, 10, 10)).to.throw('Invalid Information!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.otherSpendings(100, 1000, true)).to.throw('Invalid Information!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.otherSpendings(100, [1, 2], '')).to.throw('Invalid Information!');
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal(`You spend 1200$ for wedding decoration and photography!`);
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['pictures'], false)).to.equal(`You spend 1100$ for wedding decoration and photography!`);
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['video'], false)).to.equal(`You spend 1800$ for wedding decoration and photography!`);
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], false)).to.equal(`You spend 1700$ for wedding decoration and photography!`);
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['pictures'], true)).to.equal(`You spend 935$ for wedding decoration and photography with 15% discount!`);
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], true)).to.equal(`You spend 1020$ for wedding decoration and photography with 15% discount!`);
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], true)).to.equal(`You spend 1445$ for wedding decoration and photography with 15% discount!`);
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['video'], true)).to.equal(`You spend 1530$ for wedding decoration and photography with 15% discount!`);
        });
    });

    describe ('tableDistribution function tests', () => {

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.tableDistribution(10, '1')).to.throw('Invalid Information!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.tableDistribution(true, '1')).to.throw('Invalid Information!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.tableDistribution('test', 20)).to.throw('Invalid Information!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.tableDistribution(10, -3)).to.throw('Invalid Information!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.tableDistribution(-10, '1')).to.throw('Invalid Information!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.tableDistribution(-10, -50)).to.throw('Invalid Information!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.tableDistribution({}, '1')).to.throw('Invalid Information!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => weddingDay.tableDistribution([], -45)).to.throw('Invalid Information!');
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.tableDistribution(5, 10)).to.equal(`There is only 1 people on every table, you can join some tables.`);
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.tableDistribution(6, 2)).to.equal(`There is only 3 people on every table, you can join some tables.`);
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.tableDistribution(100, 20)).to.equal(`There is only 5 people on every table, you can join some tables.`);
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.tableDistribution(100, 10)).to.equal(`You have 10 tables with 10 guests on table.`);
        });

        it('Should return a result if the parameters are valid', () => {
            expect(weddingDay.tableDistribution(240, 9)).to.equal(`You have 9 tables with 27 guests on table.`);
        });
    });
});