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

  shuffle_cards(array){
    return array.sort(() => 0.5 - Math.random())
  }

  render_game(){
    const game = document.getElementById('game');
    const grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
    game.appendChild(grid);
    let gameGrid = duplicate_cards(cardsArray);
    
    gameGrid.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.name = item.name;
      const front = document.createElement('div');
      front.classList.add('front');
      const back = document.createElement('div');
      back.classList.add('back');
      back.style.backgroundImage = `url(${item.img})`;
      
      grid.appendChild(card);
      card.appendChild(front);
      card.appendChild(back);
    });
  }

}

module.exports = Game;
