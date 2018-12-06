export default (min = 1, max = 100) => Math.floor(
  Math.random() * (max + 1 - min) + min,
);
