class FizzBuzz {
    constructor(number) {
        this.itsNumber = number;
    }
    execute() {
        let ret;

        if (this.itsNumber % 3 === 0 && this.itsNumber % 5 === 0) {
            ret = 'FizzBuzz';
        } else if (this.itsNumber % 3 === 0) {
            ret = 'Fizz';
        } else if (this.itsNumber % 5 === 0) {
            ret = 'Buzz';
        } else {
            ret = 'Nothing';
        }

        return ret;
    }
}
export default FizzBuzz;