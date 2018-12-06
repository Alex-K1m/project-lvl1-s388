// numbers for questions are generated randomly from [1; MAX_NUMBER]
const DEFAULT_MIN = 1;
const DEFAULT_MAX = 100;

export default (min = DEFAULT_MIN, max = DEFAULT_MAX) => Math.floor(
  Math.random() * (max + 1 - min) + min,
);
