class PrimeGenerator {
    static generatePrimes(maxValue) {
        let crossedOut = Array.apply(null,new Array(maxValue + 1)).map(function () { return true });
        if (maxValue < 2) {
            return new Array(0);
        } else {
            this.uncrossIntegersUpTo(crossedOut);
            this.crossOutMultiples(crossedOut);
            return this.putUncrossedIntegersIntoResult(crossedOut);
        }
    }

    static uncrossIntegersUpTo(crossedOut) {
        for(let i = 2; i < crossedOut.length; i++)
            crossedOut[i] = false;
    }

    static crossOutMultiples(crossedOut) {
        let maxPrimeFactor = this.determineIterationLimit(crossedOut);
        for(let i = 2; i <= maxPrimeFactor; i++) {
            if(this.notCrossed(crossedOut, i)) {
                this.crossOutMultiplesOf(i, crossedOut);
            }
        }
    }

    static putUncrossedIntegersIntoResult(crossedOut) {
        let result = new Array(this.numberOfUncrossedIntegers(crossedOut));
        for (let i = 0, j = 0; i < crossedOut.length; i++) {
            if (this.notCrossed(crossedOut, i)) {
                result[j++] = i;
            }
        }
        return result;
    }

    static determineIterationLimit(crossedOut) {
        return Math.sqrt(crossedOut.length) + 1;
    }

    static notCrossed(crossedOut, i) {
        return crossedOut[i] === false;
    }

    static crossOutMultiplesOf(i, crossedOut) {
        for (let multiple = 2 * i;
             multiple < crossedOut.length;
             multiple += i) {
            crossedOut[multiple] = true;
        }
    }

    static numberOfUncrossedIntegers(crossedOut) {
        let count = 0;
        for (let i = 0; i < crossedOut.length; i++) {
            if (!crossedOut[i]) {
                count++;
            }
        }
    }
}
export default PrimeGenerator;
