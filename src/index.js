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
      const completed = startGame(games[keys[index]]);
      if (completed) {
        console.log(`\nCongratulations, ${userName}!`);
      } else {
        console.log(`\nGood luck next time, ${userName}!`);
      }
      if (!keyInYNStrict('Play again? ')) break;
    }
  }
};

const playChallenge = (userName) => {
  const keys = Object.keys(games);
  const numOfRounds = 3;
  let time = 0;

  for (let i = 0; i < numOfRounds; i += 1) {
    const index = Math.floor(Math.random() * keys.length);
    const startTime = Date.now();
    const completed = startGame(games[keys[index]], 1);
    if (!completed) {
      console.log(`\nGood luck next time, ${userName}!`);
      return;
    }
    time += Date.now() - startTime;
  }
  console.log(`\nCongratulations, ${userName}!`);
  console.log(`You've compeleted the challenge in ${time} ms`);
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
      ['Play', 'Challenge'],
      '',
      { guide: false, cancel: 'Quit' },
    );
    switch (index) {
      case 0: play(userName); break;
      case 1: playChallenge(userName); break;
      default: return;
    }
  }
};

export default run;
