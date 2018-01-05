const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    describe('#add #square', () => {
        it('should add two numbers', () => {
            const res = utils.add(9, 15);

            expect(res).toBe(24).toBeA('number');
            // toBe() also checks if 24 is a number as it uses === to check for equality
            // using toBeA('number') just to showcase how to chain these methods
        });

        it('should square a number', () => {
            const res = utils.square(5);

            expect(res).toBe(25).toBeA('number');
        });
    });

    it('should set firstname and lastname with proper values', () => {
        const userWithName = utils.setName({}, 'Hare Krishna');

        expect(userWithName).toInclude({
            firstname: 'Hare',
            lastname: 'Krishna'
        });
    });

    // Async Test Cases
    // Don't forget to use the 'done' parameter and then call it when async call returns
    describe('Async versions of #add #square', () => {
        it('should async-add 2 numbers', (done) => {
            utils.asyncAdd(10, 20, (sum) => {
                expect(sum).toBe(30).toBeA('number');
                done();
            });
        });

        it('should async-square a number', (done) => {
            utils.asyncSquare(10, (square) => {
                expect(square).toBe(100);
                done();
            });
        });
    });
});