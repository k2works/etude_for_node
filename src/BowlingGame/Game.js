class Game {
    constructor() {
        this.itsScore = 0;
        this.itsCurrent_throw = 0;
        this.itsThrows = Array.apply(null, Array(21)).map(function() { return 0 });
    }

    score() {
        return this.itsScore;
    }

    add(pins) {
        this.itsThrows[this.itsCurrent_throw] = pins;
        this.itsCurrent_throw += 1;
        this.itsScore = pins;
    }

    scoreForFrame(theFrame) {
        let ball = 0;
        let score = 0;
        for (let currentFrame = 0; currentFrame < theFrame; currentFrame++) {
            score += this.itsThrows[ball] + this.itsThrows[ball + 1];
            ball += 2;
        }
        return score;
    }
}
export default Game;