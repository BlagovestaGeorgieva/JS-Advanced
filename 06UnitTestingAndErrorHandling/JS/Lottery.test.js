const lottery = require('./Lottery');
const { assert, expect } = require('chai');

describe('lottery function tests', ()=> {
    
    describe('buyLotteryTicket tests', () => {

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => lottery.buyLotteryTicket(10, '1')).to.throw('Invalid input!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => lottery.buyLotteryTicket(10, '1', true)).to.throw('Invalid input!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => lottery.buyLotteryTicket(undefined, '30', 5)).to.throw('Invalid input!');
        });

        it('Should throw an error if the value of the boolean is false', () => {
            expect(() => lottery.buyLotteryTicket(20, 2, false)).to.throw('Unable to buy lottery ticket!');
        });

        it('Should return a result if the parameters are valid', () => {
            expect(lottery.buyLotteryTicket(5, 1, true)).to.equal(`You bought 1 tickets for 5$.`);
        })

        it('Should return a result if the parameters are valid', () => {
            expect(lottery.buyLotteryTicket(5.5, 2, true)).to.equal(`You bought 2 tickets for 11$.`);
        })
    });

    describe('checkTicket tests', () => {

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => lottery.checkTicket(10, [])).to.throw('Invalid input!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => lottery.checkTicket([], 'test')).to.throw('Invalid input!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => lottery.checkTicket('test', -20)).to.throw('Invalid input!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => lottery.checkTicket([1, 2, 3], [])).to.throw('Invalid input!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => lottery.checkTicket([1, 2, 3], [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
        });

        it('Should throw a result if the parameters are valid', () => {
            expect(lottery.checkTicket([1, 2, 3, 12, 15, 0], [1, 2, 3, 4, 5, 6])).to.equal("Congratulations you win, check your reward!");
        });

        it('Should throw a result if the parameters are valid', () => {
            expect(lottery.checkTicket([1, 2, 3, 12, 15, 0], [1, 2, 3, 4, 5, 6])).to.equal("Congratulations you win, check your reward!");
        });

        it('Should throw a result if the parameters are valid', () => {
            expect(lottery.checkTicket([1, 2, 3, 12, 6, 0], [1, 2, 3, 4, 5, 6])).to.equal("Congratulations you win, check your reward!");
        });

        it('Should throw a result if the parameters are valid', () => {
            expect(lottery.checkTicket([1, 2, 3, 12, 6, 4], [1, 2, 3, 4, 5, 6])).to.equal("Congratulations you win, check your reward!");
        });

        it('Should throw a result if the parameters are valid', () => {
            expect(lottery.checkTicket([1, 2, 3, 5, 6, 0], [1, 2, 3, 0, 5, 6])).to.equal("You win the JACKPOT!!!");
        });


    });

    describe('secondChance tests', () => {

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => lottery.secondChance(10, '1')).to.throw('Invalid input!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => lottery.secondChance('test', 15)).to.throw('Invalid input!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => lottery.secondChance('test', [2, 3])).to.throw('Invalid input!');
        });

        it('Should throw an error if the parameters are invalid', () => {
            expect(() => lottery.secondChance(10)).to.throw('Invalid input!');
        });

        it('Should return a result if the parameters are valid', () => {
            expect(lottery.secondChance(1, [1, 2])).to.equal("You win our second chance prize!");
        });

        it('Should return a result if the parameters are valid', () => {
            expect(lottery.secondChance(10, [1, 2])).to.equal("Sorry, your ticket didn't win!");
        });
    });
});