class GeneratePrimes {
    static generatePrimes(maxValue) {
        if (maxValue >= 2) {  // 有効なケース？
            let {s, f} = GeneratePrimes.initializedSieve(maxValue);
            let j = GeneratePrimes.sieve(s, f);
            let primes = GeneratePrimes.loadPrimes(s, f, j);
            return primes; // 素数を返す
        }
        else {
            return new Array(0); // 入力が不適切な場合nullを戻す
        }// maxValue < 2
    }

    static loadPrimes(s, f, j) {
        let i;
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

    static initializedSieve(maxValue) {
        // 宣言
        let s = maxValue + 1; // 配列のサイズ
        let f;
        let i;

        // 配列を真(true)に初期化
        f = Array.apply(null, Array(s)).map(function () {
            return true
        });
        // 周知の非素数を取り除く
        f[0] = f[1] = false;
        return {s, f};
    }
}
export default GeneratePrimes;
