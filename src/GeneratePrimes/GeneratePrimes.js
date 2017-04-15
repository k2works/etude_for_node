class GeneratePrimes {
    static generatePrimes(maxValue) {
        let primes;
        let s = maxValue + 1; // 配列のサイズ
        if (maxValue < 2) {
            return new Array(0);
        } else {
            let f = this.initializeArray(s);
            this.sieve(s, f);
            primes = this.loadPrimes(s, f);
            return primes; // 素数を返す
        }
    }

    static initializeArray(s) {
        let f = Array.apply(null, Array(s)).map(function () {
            return true
        });
        f[0] = f[1] = false; // 素数でも倍数でもない
        return f;
    }

    static sieve(s, f) {
        // ふるい落とす
        let i;
        let j;
        for (i = 2; i < Math.sqrt(s) + 1; i++) {
            if (f[i]) { // iが除かれていなければ、その倍数を除く
                for (j = 2 * i; j < s; j += i) {
                    f[j] = false; // 倍数は素数ではない
                }
            }
        }
        return j;
    }

    static loadPrimes(s, f) {
        let i;
        let j;
        // 見つけた素数の個数をカウント
        let count = 0;
        for (i = 0; i < s; i++) {
            if (f[i]) {
                count++; // カウントアップ
            }
        }

        let primes = new Array(count);

        // 素数の抜き出し
        for (i = 0, j = 0; i < s; i++) {
            if (f[i]) { // 素数であれば
                primes[j++] = i;
            }
        }
        return primes;
    }
}
export default GeneratePrimes;
