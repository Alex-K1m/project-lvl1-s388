import generateNum from '../utils';

const progressionLength = 10;
const minStep = 2;
const maxStep = 20;

const description = 'What number is missing in the progression?';

const generateProgression = (firstElement, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstElement + step * i);
  }
  return progression;
};

const newRound = () => {
  const progression = generateProgression(
    generateNum(),
    generateNum(minStep, maxStep),
    progressionLength,
  );
  const randomIndex = generateNum(0, progression.length - 1);
  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default { description, newRound };
