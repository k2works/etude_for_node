class GeneratePrimes {
    static generatePrimes(maxValue) {
        let result;
        let arraySize = maxValue + 1;
        let isCrossed = Array.apply(null,new Array(arraySize)).map(function () { return true});
        if (maxValue < 2) {
            return new Array(0);
        } else {
            this.initializeArrayOfInteger(isCrossed);
            this.crossOutMultiples(isCrossed);
            result = this.putUncrossedIntegersIntoResult(isCrossed);
            return result;
        }
    }

    static initializeArrayOfInteger(isCrossed) {
        for(let i = 2; i < isCrossed.length; i++)
            isCrossed[i] = false;
    }

    static crossOutMultiples(isCrossed) {
        let maxPrimeFactor = Math.sqrt(isCrossed.length) + 1;
        for(let i = 2; i <= maxPrimeFactor; i++) {
            if(!isCrossed[i]) {
                for(let multiple = 2*i;
                    multiple < isCrossed.length;
                    multiple += i) {
                    isCrossed[multiple] = true;
                }
            }
        }
    }

    static putUncrossedIntegersIntoResult(isCrossed) {
        // 見つけた素数の個数をカウント
        let count = 0;
        for (let i = 0; i < isCrossed.length; i++) {
            if (!isCrossed[i]) {
                count++; // カウントアップ
            }
        }

        let primes = new Array(count);

        // 素数の抜き出し
        for (let i = 0, j = 0; i < isCrossed.length; i++) {
            if (!isCrossed[i]) { // 素数であれば
                primes[j++] = i;
            }
        }
        return primes;
    }
}
export default GeneratePrimes;
