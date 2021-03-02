const relativeNeighbours = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
];

const countAliveNeighbours = (arr, i, j) =>
  relativeNeighbours.filter(([ii, jj]) => arr[i + ii]?.[j + jj] === 1).length;

const computeNextGeneration = (arr, i, j) => {
  const numberOfLivingNeighbours = countAliveNeighbours(arr, i, j);

  if (
    numberOfLivingNeighbours === 3 ||
    (numberOfLivingNeighbours === 2 && arr[i][j] === 1)
  ) {
    return 1;
  }

  return 0;
};

const gameOfLife = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = [];

    for (let j = 0; j < arr.length; j++) {
      result[i][j] = computeNextGeneration(arr, i, j);
    }
  }

  return result;
};

module.exports = { gameOfLife };
