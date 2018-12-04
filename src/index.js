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
  console.log(`${userName}, the Brain even game has started.`);
};

export { greeting, startBrainEven };
