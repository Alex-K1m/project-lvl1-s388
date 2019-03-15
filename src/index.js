import { keyInSelect } from 'readline-sync';
import greeting from './greeting';
import brainEven from './games/even';
import brainCalc from './games/calc';
import brainGcd from './games/gcd';
import brainPrime from './games/prime';
import brainProg from './games/progression';

const play = () => {
  const games = ['Even', 'Calc', 'GCD', 'Prime', 'Progression'];
  const index = keyInSelect(games, 'Choose a game');
  switch (index) {
    case 0: brainEven(); break;
    case 1: brainCalc(); break;
    case 2: brainGcd(); break;
    case 3: brainPrime(); break;
    case 4: brainProg(); break;
    default: console.log('default switch in play():', index);
  }
};

const run = () => {
  greeting();
  while (true) {
    const index = keyInSelect(['Play', 'Quit'], 'MENU');
    switch (index) {
      case 0: play(); break;
      case 1: return;
      default: console.log('default switch in run():', index); return;
    }
  }
};

export default run;
