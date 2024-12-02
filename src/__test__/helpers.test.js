
import {getAge, } from '../helpers';


const age = require('../helpers');

test('check for correct age when given the birthdate of 1/1/2020' , () => {
    expect(getAge('1/1/2020')).toBe(4);
});

test('check to see if a random animal appears', () => {
    expect(age.getRandomSpiritAnimal()).toBeTruthy();
})