// numbers for questions are generated randomly from [1; MAX_NUMBER]
const MAX_NUMBER = 100;
const operations = ['+', '-', '*'];

const calculate = (operation, num1, num2) => {
  switch (operation) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return null;
  }
};

export default () => {
  const task = 'What is the result of the expression?';
  const newRound = () => {
    const num1 = Math.ceil(Math.random() * MAX_NUMBER);
    const num2 = Math.ceil(Math.random() * MAX_NUMBER);
    const operation = operations[Math.floor(Math.random() * operations.length)];

    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = `${calculate(operation, num1, num2)}`;
    // const correctAnswer = eval(question);

    return { question, correctAnswer };
  };
  return { task, newRound };
};
