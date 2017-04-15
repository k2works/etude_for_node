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
            let fb = new FizzBuzz(15);
            assert(fb.execute() === 'FizzBuzz');
        });
        it('should return Nothing when it does not satisfy the specification', () => {
            let fb = new FizzBuzz(1);
            assert(fb.execute() === 'Nothing');
        });
        it('should return Fizz,Buzz,FizzBuzz,Nothing while 100 times', () => {
            for(let i = 1; i <= 100; i++) {
                let fb = new FizzBuzz(i);
                console.log(i + ':' + fb.execute());
            }

        })
    });
});