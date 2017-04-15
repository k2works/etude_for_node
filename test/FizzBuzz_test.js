import assert from 'power-assert';
import FizzBuzz from '../src/FizzBuzz/FizzBuzz';

describe('FizzBuzz', () => {
    describe('#execute', () => {
        it('should return Fizz when it can be divided three', () => {
            let fb = new FizzBuzz(3);
            assert(fb.execute() === 'Fizz');
        });
        it('should return Buzz when it can be divided five', () => {
            let fb = new FizzBuzz(5);
            assert(fb.execute() === 'Buzz');
        });
        it('should return FizzBuzz when it can be divided three and five', () => {
            let fb = new FizzBuzz();
            assert(fb.execute() === 'FizzBuzz');
        });
    });
});