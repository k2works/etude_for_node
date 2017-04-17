class GeneratePrimes {
    static generatePrimes(maxValue) {
        let isCrossed = Array.apply(null,new Array(maxValue + 1)).map(function () { return true });
        if (maxValue < 2) {
            return new Array(0);
        } else {
            this.initializeArrayOfInteger(isCrossed);
            this.crossOutMultiples(isCrossed);
            return this.putUncrossedIntegersIntoResult(isCrossed);
        }
    }

    static initializeArrayOfInteger(isCrossed) {
        for(let i = 2; i < isCrossed.length; i++)
            isCrossed[i] = false;
    }

    static crossOutMultiples(isCrossed) {
        let maxPrimeFactor = this.calcMaxPrimeFactor(isCrossed);
        for(let i = 2; i <= maxPrimeFactor; i++) {
            if(this.notCrossed(isCrossed, i)) {
                this.crossOutMultiplesOf(i, isCrossed);
            }
        }
    }

    static putUncrossedIntegersIntoResult(isCrossed) {
        let result = new Array(this.numberOfUncrossedIntegers(isCrossed));
        for (let i = 0, j = 0; i < isCrossed.length; i++) {
            if (this.notCrossed(isCrossed, i)) {
                result[j++] = i;
            }
        }
        return result;
    }

    static calcMaxPrimeFactor(isCrossed) {
        return Math.sqrt(isCrossed.length) + 1;
    }

    static notCrossed(isCrossed, i) {
        return isCrossed[i] === false;
    }

    static crossOutMultiplesOf(i, isCrossed) {
        for (let multiple = 2 * i;
             multiple < isCrossed.length;
             multiple += i) {
            isCrossed[multiple] = true;
        }
    }

    static numberOfUncrossedIntegers(isCrossed) {
        let count = 0;
        for (let i = 0; i < isCrossed.length; i++) {
            if (!isCrossed[i]) {
                count++;
            }
        }
    }
}
export default GeneratePrimes;
