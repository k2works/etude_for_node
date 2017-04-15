class FizzBuzz {
    constructor(number) {
        this.itsNumber = number;
    }
    execute() {
        let ret;
        if (this.itsNumber % 3 === 0) {
            ret = 'Fizz';
        }
        if (this.itsNumber % 5 === 0) {
            ret = 'Buzz';
        }
        return ret;
    }
}
export default FizzBuzz;