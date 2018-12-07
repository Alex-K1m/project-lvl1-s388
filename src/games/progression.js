import generateNum from '../utils';
import startGame from '..';

const progressionLength = 10;
const minStep = 2;
const maxStep = 20;

const task = 'What number is missing in the progression?';

const generateProgression = (firstElement, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstElement + step * i);
  }
  return progression;
};

const newRound = () => {
  const progression = generateProgression(
    generateNum(),
    generateNum(minStep, maxStep),
  );
  const randomIndex = generateNum(0, progression.length - 1);
  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default () => startGame(task, newRound);
