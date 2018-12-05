import readlineSync from 'readline-sync';

// numbers for questions are generated randomly from [1; MAX_NUMBER]
const MAX_NUMBER = 100;
const NUM_OF_CORRECT_ANSWERS = 3; // to win the game

const greeting = () => {
  console.log(
    `---------------------------
Welcome to the Brain Games!
---------------------------`,
  );
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const generateNum = () => Math.ceil(Math.random() * MAX_NUMBER);

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const startBrainEven = () => {
  let correctCounter = 0;
  const userName = greeting();

  console.log('Answer "yes" if a number is even, otherwise answer "no".');

  while (correctCounter < NUM_OF_CORRECT_ANSWERS) {
    const question = generateNum();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(question) === answer) {
      console.log('Correct!');
      correctCounter += 1;
    } else {
      console.log(
        `"${answer}" is the wrong answer.`,
        `The correct answer is "${isEven(question)}".`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { greeting, startBrainEven };
