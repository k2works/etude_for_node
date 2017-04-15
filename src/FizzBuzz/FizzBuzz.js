class FizzBuzz {
    constructor(number) {
        this.itsNumber = number;
    }
    execute() {
        let ret;
        if (this.itsNumber % 3 === 0) {
            ret = 'Fizz';
        }
        return ret;
    }
}
export default FizzBuzz;