import { question, keyInSelect, keyInYNStrict } from 'readline-sync';
import * as games from './games';
import startGame from './engine';

const play = (userName) => {
  const keys = Object.keys(games);
  const names = keys.map(key => games[key].name);

  for (;;) {
    console.log('\nChoose a game to play:');
    const index = keyInSelect(names, '', { guide: false, cancel: 'Go back' });
    if (index === -1) return;
    for (;;) {
      startGame(games[keys[index]], userName);
      if (!keyInYNStrict('Play again? ')) break;
    }
  }
};

const run = () => {
  console.log(
    '===========================',
    '\nWelcome to the Brain Games!',
    '\n===========================',
  );
  const userName = question('Enter your name: ');

  for (;;) {
    console.log('\nMENU:');
    const index = keyInSelect(
      ['Play'],
      '',
      { guide: false, cancel: 'Quit' },
    );
    switch (index) {
      case 0: play(userName); break;
      default: return;
    }
  }
};

export default run;
