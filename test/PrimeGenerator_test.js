import assert from 'power-assert';
import PrimeGenerator from '../src/PrimeGenerator/PrimeGenerator';

describe('PrimeGenerator', () => {
    describe('.generatePrimes', () => {
       it('return null array', () => {
           let nullArray = PrimeGenerator.generatePrimes(0);
           assert(nullArray.length === 0);
       });
        it('return minimum array', () => {
            let minArray = PrimeGenerator.generatePrimes(2);
            assert(minArray.length === 1);
        });
        it('contain 2 when return minimum array', () => {
            let minArray = PrimeGenerator.generatePrimes(2);
            assert(minArray[0] === 2);
        });
        it('return three array', () => {
            let threeArray = PrimeGenerator.generatePrimes(3);
            assert(threeArray.length === 2);
        });
        it('contain 2,3 when return three array', () => {
            let threeArray = PrimeGenerator.generatePrimes(3);
            assert(threeArray[0] === 2);
            assert(threeArray[1] === 3);
        });
        it('return four array', () => {
            let centArray = PrimeGenerator.generatePrimes(10);
            assert(centArray.length === 4);
        });
        it('contain 2,3,5,7 when return ten array', () => {
            let tenArray = PrimeGenerator.generatePrimes(10);
            assert(tenArray[0] === 2);
            assert(tenArray[1] === 3);
            assert(tenArray[2] === 5);
            assert(tenArray[3] === 7);
        });
        it('return cent array', () => {
            let centArray = PrimeGenerator.generatePrimes(100);
            assert(centArray.length === 25);
        });
        it('contain 24 when return cent array', () => {
            let threeArray = PrimeGenerator.generatePrimes(100);
            assert(threeArray[24] === 97);
        });
        context('test exhaustive', () => {
            it('verify prime list', () => {
                for(let i = 2; i < 100; i++) {
                    let list = PrimeGenerator.generatePrimes(i);
                    for(let i=0; i<list.length; i++) {
                        for(let factor=2; factor<list[i]; factor++) {
                            assert(list[i]%factor !== 0);
                        }
                    }
                }
            });
        });
    });
});
