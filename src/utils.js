const generateNum = (min = 1, max = 100, random = Math.random) => Math.floor(
  random() * (max + 1 - min) + min,
);

export default generateNum;
