"use strict"

// Card data
const cardsArray = [
  {
    'name': 'zuma',
    'img': './img/zuma.png',
  },
  {
    'name': 'rubble',
    'img': './img/rubble.png',
  },
  {
    'name': 'rocky',
    'img': './img/rocky.png',
  },
  {
    'name': 'everest',
    'img': './img/everest.png',
  },
  {
    'name': 'paw_patrol',
    'img': './img/paw_patrol.png',
  },
  {
    'name': 'marshall',
    'img': './img/marshall.png',
  },
  {
    'name': 'chase_2',
    'img': './img/chase_2.png',
  },
  {
    'name': 'marshall_2',
    'img': './img/marshall_2.png',
  },
  {
    'name': 'skye',
    'img': './img/skye.png',
  },
];

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);
let gameGrid = cardsArray.concat(cardsArray);

//randomly shuffle the grid of images
gameGrid.sort(() => 0.5 - Math.random());

let count = 0;
let firstGuess = '';
let secondGuess = '';
let previousTarget = null;
let delay = 1000;


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

grid.addEventListener('click', (e)=>{
let clicked = e.target;

// Do not allow the grid section itself to be selected; only select divs inside the grid
if (clicked.nodeName === 'SECTION' ||
clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) { return; }

  if (count < 2) {
    count++;
    if(count === 1){
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    }
    if (firstGuess !== '' && secondGuess !== ''){
      if(check(firstGuess, secondGuess)) {
        setTimeout(match, delay);
        setTimeout(reset, delay);
      } else {
        setTimeout(reset, delay);
      }
    }
  }
});

// match CSS
const match = () => {
  let selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
}

//checks if selected cards matches
const check = (first, second) => {
  return (first === second) ? true : false;
}

// remove selected css and reset variables
const reset = () => {
  count = 0;
  firstGuess = '';
  secondGuess = '';
  let selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
}

