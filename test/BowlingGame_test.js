import assert from 'power-assert';
import Game from '../src/BowlingGame/Game';

describe('Game', () => {
    let g;
    beforeEach(() => {
        g = new Game();
    });

    describe('#score', () => {
        it('scored when one throw', () => {
            g.add(5);
            assert(g.score() === 5);
        });

        it('scored when spare', () => {});
    });

    describe('#scoreForFrame', () => {
        it('scored when four throws', () => {
            g.add(5);
            g.add(4);
            g.add(7);
            g.add(2);
            assert(g.scoreForFrame(1) === 9);
            assert(g.scoreForFrame(2) === 18);
        });

        it('scored when spare', () => {
            g.add(3);
            g.add(7);
            g.add(3);
            g.add(2);
            assert(g.scoreForFrame(1) === 13);
            assert(g.scoreForFrame(2) === 18);
        });
    });
});