import assert from 'power-assert';
import Game from '../src/BowlingGame/Game';

describe('BowlingGame', () => {
    describe('#score', () => {
        it('scored when one throw', () => {
            let g = new Game();
            g.add(5);
            assert(g.score() === 5);
        })
    });
});