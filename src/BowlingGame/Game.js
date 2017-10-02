class Game {
    constructor() {
        this.itsScore = 0;
        this.itsCurrentThrow = 0;
        this.itsThrows = Array.apply(null, Array(21)).map(function() { return 0 });
    }

    score() {
        return this.itsScore;
    }

    add(pins) {
        this.itsThrows[this.itsCurrentThrow] = pins;
        this.itsCurrentThrow += 1;
        this.itsScore += pins;
    }

    scoreForFrame(theFrame) {
        let ball = 0;
        let score = 0;
        for (let currentFrame = 0; currentFrame < theFrame; currentFrame++) {
            let firstThrow = this.itsThrows[ball];
            ball += 1;
            let secondThrow = this.itsThrows[ball];
            ball += 1;
            score += firstThrow + secondThrow;
        }
        return score;
    }
}
export default Game;