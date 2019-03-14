class Game {
  constructor(){
    this.cardsArray = [
      {
        'name': 'zuma',
        'img': 'img/zuma.png',
      },
      {
        'name': 'rubble',
        'img': 'img/rubble.png',
      },
      {
        'name': 'rocky',
        'img': 'img/rocky.png',
      },
      {
        'name': 'everest',
        'img': 'img/everest.png',
      },
      {
        'name': 'paw_patrol',
        'img': 'img/paw_patrol.png',
      },
      {
        'name': 'marshall',
        'img': 'img/marshall.png',
      },
      {
        'name': 'chase_2',
        'img': 'img/chase_2.png',
      },
      {
        'name': 'marshall_2',
        'img': 'img/marshall_2.png',
      },
      {
        'name': 'skye',
        'img': 'img/skye.png',
      },
    ];

  }

  duplicate_cards(array){
    let gameGrid = array.concat(array);
    return gameGrid;
  } 
}

module.exports = Game;
