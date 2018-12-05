import readlineSync from 'readline-sync';

let userName = '';

const greeting = () => {
  console.log(
    `---------------------------
Welcome to the Brain Games!
---------------------------`,
  );
  userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
};

const startBrainEven = () => {
  // numbers for questions are generated randomly from [1; MAX_NUMBER]
  const MAX_NUMBER = 100;
  const NUM_OF_CORRECT_ANSWERS = 3; // to win the game
  let number;
  let isEven;
  let answer;
  let correctCounter = 0;

  const generateNum = () => Math.ceil(Math.random() * MAX_NUMBER);

  console.log('Answer "yes" if a number is even, otherwise answer "no".');
  while (correctCounter < NUM_OF_CORRECT_ANSWERS) {
    number = generateNum();
    isEven = number % 2 === 0;
    console.log(`Question: ${number}`);
    answer = readlineSync.question('Your answer: ');
    if ((isEven && answer === 'yes')
    || (!isEven && answer === 'no')) {
      console.log('Correct!');
      correctCounter += 1;
    } else {
      console.log(
        `"${answer}" is the wrong answer.`,
        `The correct answer is "${isEven ? 'yes' : 'no'}".`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { greeting, startBrainEven };
