var utils = require('./utils');

it('should add two numbers', () => {
    const res = utils.add(9, 15);

    if (res !== 24) {
        throw new Error(`Expected 24, but got ${res}.`);
    }
});

it('should square a number', () => {
    const res = utils.square(5);

    if (res !== 25) {
        throw new Error(`Expected 25, but got ${res}`);
    }
});