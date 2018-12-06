import generateNum from '../utils';
import startGame from '..';

const PROGRESSION_LENGTH = 10;
const MIN_STEP = 2;
const MAX_STEP = 20;

const task = 'What number is missing in the progression?';

const generateProgression = (firstElement, step) => {
  const progression = [];
  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    progression.push(firstElement + step * i);
  }
  return progression;
};

const newRound = () => {
  const progression = generateProgression(
    generateNum(),
    generateNum(MIN_STEP, MAX_STEP),
  );
  const randomIndex = generateNum(0, progression.length - 1);
  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default () => startGame(task, newRound);
