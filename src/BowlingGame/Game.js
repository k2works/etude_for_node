class Game {
    constructor() {
        this.its_score = 0
    }

    score() {
        return this.its_score;
    }

    add(pins) {
        this.its_score = pins;
    }
}
export default Game;