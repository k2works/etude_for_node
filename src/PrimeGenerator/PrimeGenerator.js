let _crossedOut;

class PrimeGenerator {
    static get crossedOut() { return _crossedOut; }
    static set crossedOut(value) { _crossedOut = value; }

    static generatePrimes(maxValue) {
        this.crossedOut = Array.apply(null,new Array(maxValue + 1)).map(function () { return true });
        if (maxValue < 2) {
            return new Array(0);
        } else {
            this.uncrossIntegersUpTo();
            this.crossOutMultiples();
            return this.putUncrossedIntegersIntoResult();
        }
    }

    static uncrossIntegersUpTo() {
        for(let i = 2; i < this.crossedOut.length; i++)
            this.crossedOut[i] = false;
    }

    static crossOutMultiples() {
        let maxPrimeFactor = this.determineIterationLimit(this.crossedOut);
        for(let i = 2; i <= maxPrimeFactor; i++) {
            if(this.notCrossed(i)) {
                this.crossOutMultiplesOf(i, this.crossedOut);
            }
        }
    }

    static putUncrossedIntegersIntoResult() {
        let result = new Array(this.numberOfUncrossedIntegers(this.crossedOut));
        for (let i = 0, j = 0; i < this.crossedOut.length; i++) {
            if (this.notCrossed(i)) {
                result[j++] = i;
            }
        }
        return result;
    }

    static determineIterationLimit() {
        return Math.sqrt(this.crossedOut.length) + 1;
    }

    static notCrossed(i) {
        return this.crossedOut[i] === false;
    }

    static crossOutMultiplesOf(i) {
        for (let multiple = 2 * i;
             multiple < this.crossedOut.length;
             multiple += i) {
            this.crossedOut[multiple] = true;
        }
    }

    static numberOfUncrossedIntegers() {
        let count = 0;
        for (let i = 0; i < this.crossedOut.length; i++) {
            if (this.notCrossed(i)) {
                count++;
            }
        }
    }
}
export default PrimeGenerator;
