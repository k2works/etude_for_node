class GeneratePrimes {
    static generatePrimes(maxValue) {
        let result;
        let arraySize = maxValue + 1;
        if (maxValue < 2) {
            return new Array(0);
        } else {
            let f = this.initializeArrayOfInteger(arraySize);
            this.crossOutMultiples(arraySize, f);
            result = this.putUncrossedIntegersIntoResult(arraySize, f);
            return result;
        }
    }

    static initializeArrayOfInteger(arraySize) {
        let f = Array.apply(null, Array(arraySize)).map(function () {
            return true
        });
        f[0] = f[1] = false; // 素数でも倍数でもない
        return f;
    }

    static crossOutMultiples(arraySize, f) {
        // ふるい落とす
        let i;
        let j;
        for (i = 2; i < Math.sqrt(arraySize) + 1; i++) {
            if (f[i]) { // iが除かれていなければ、その倍数を除く
                for (j = 2 * i; j < arraySize; j += i) {
                    f[j] = false; // 倍数は素数ではない
                }
            }
        }
        return j;
    }

    static putUncrossedIntegersIntoResult(arraySize, f) {
        let i;
        let j;
        // 見つけた素数の個数をカウント
        let count = 0;
        for (i = 0; i < arraySize; i++) {
            if (f[i]) {
                count++; // カウントアップ
            }
        }

        let primes = new Array(count);

        // 素数の抜き出し
        for (i = 0, j = 0; i < arraySize; i++) {
            if (f[i]) { // 素数であれば
                primes[j++] = i;
            }
        }
        return primes;
    }
}
export default GeneratePrimes;
