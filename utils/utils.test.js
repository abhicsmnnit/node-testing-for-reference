const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    const res = utils.add(9, 15);

    expect(res).toBe(24).toBeA('number');
});

it('should square a number', () => {
    const res = utils.square(5);

    expect(res).toBe(25).toBeA('number');
});

it('should set firstname and lastname with proper values', () => {
    const userWithName = utils.setName({}, 'Hare Krishna');

    expect(userWithName).toInclude({
        firstname: 'Hare',
        lastname: 'Krishna'
    });
});