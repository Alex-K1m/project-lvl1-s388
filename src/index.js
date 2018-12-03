import readlineSync from 'readline-sync';

export const greeting = () => {
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
};
