import assert from 'power-assert';
import Game from '../src/BowlingGame/Game';

describe('BowlingGame', () => {
    describe('#score', () => {
        it('scored when one throw', () => {
            let g = new Game();
            g.add(5);
            assert(g.score() === 5);
        });
    });

    describe('#scoreForFrame', () => {
        it('scored when four throws', () => {
            let g = new Game();
            g.add(5);
            g.add(4);
            g.add(7);
            g.add(2);
            assert(g.scoreForFrame(1) === 9);
            assert(g.scoreForFrame(2) === 18);
        });
    });
});