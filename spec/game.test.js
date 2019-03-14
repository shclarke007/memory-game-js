const Game = require('../game');

test('initialises game with 9 cards', () => {
  const newGame = new Game()
  expect(newGame).toBeInstanceOf(Game);
  expect(newGame.cardsArray.length).toBe(9);
});