import { keyInSelect } from 'readline-sync';
import greeting from './greeting';
import * as games from './games';
import startGame from './engine';

const play = (userName) => {
  const names = Object.keys(games);
  for (;;) {
    console.log('Choose a game to play:');
    const index = keyInSelect(names, '', { guide: false, cancel: 'Go back' });
    if (index === -1) {
      return;
    }
    startGame(games[names[index]], userName);
  }
};

const run = () => {
  const userName = greeting();
  for (;;) {
    console.log('MAIN MENU');
    const index = keyInSelect(
      ['Play'],
      '',
      { guide: false, cancel: 'Quit' },
    );
    switch (index) {
      case -1: return;
      case 0: play(userName); break;
      default: console.log('default switch in run():', index); return;
    }
  }
};

export default run;
