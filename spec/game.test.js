const Game = require('../game');

test('initialises game with 9 cards', () => {
  const newGame = new Game;
  expect(newGame).toBeInstanceOf(Game);
  expect(newGame.cardsArray.length).toBe(9);
});

describe('methods', ()=> {
  const newGame = new Game(array=[
    {name: 'ryder', img: 'img/ryder.png'}, 
    {name: 'zuma', img: 'img/zuma.png' }, 
    {name: 'skye', img: 'img/skye.png'}
  ])

  test('duplicates cards', ()=> {
    newGame.duplicate_cards(array)
    expect(newGame.duplicate_cards(array).length).toBe(6);
  });

})

  