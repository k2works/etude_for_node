import assert from 'power-assert';
import Game from '../src/BowlingGame/Game';

describe('Game', () => {
    let g;
    beforeEach(() => {
        g = new Game();
    });

    describe('#score', () => {
        it('scored when spare', () => {
            g.add(3);
            g.add(7);
            g.add(3);
            g.add(2);
            assert(g.score() === 18);
        });

        it('scored when strike', () => {
            g.add(10);
            g.add(3);
            g.add(6);
            assert(g.score() === 28);
        });
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

        it('scored when strike', () => {
            g.add(10);
            g.add(3);
            g.add(6);
            assert(g.scoreForFrame(1) === 19);
        });
    });

    describe('#getCurrentFrame', () => {
        it('return first frame when one throw', () => {
            g.add(5);
            assert(g.getCurrentFrame() === 1);
        });

        it('return second frame when two throw', () => {
            g.add(5);
            g.add(4);
            assert(g.getCurrentFrame() === 2);
        });

        it('return second frame when spare', () => {
            g.add(3);
            g.add(7);
            g.add(3);
            assert(g.getCurrentFrame() === 2);
        });

        it('return third frame when spare', () => {
            g.add(3);
            g.add(7);
            g.add(3);
            g.add(2);
            assert(g.getCurrentFrame() === 3);
        });
    });
});