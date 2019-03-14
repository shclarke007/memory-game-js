const Game = require('../game');
const newGame = new Game()

test('initialises game with 9 cards', () => {
  expect(newGame).toBeInstanceOf(Game);
  expect(newGame.cardsArray.length).toBe(9);
});
test('duplicates cards', ()=> {
  newGame.duplicate_cards(array=[{name: 'name1'}])
  expect(newGame.duplicate_cards(array).length).toBe(2);
});