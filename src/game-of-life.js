const countAliveNeighbours = (arr, i, j) => {
  const directions = [
    [i - 1, j - 1],
    [i, j - 1],
    [i + 1, j - 1],
    [i - 1, j],
    [i + 1, j],
    [i - 1, j + 1],
    [i, j + 1],
    [i + 1, j + 1],
  ];

  return directions.filter(([newI, newJ]) => arr[newI]?.[newJ] === 1).length;
};

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

    for (let j = 0; j < arr[i].length; j++) {
      result[i].push(computeNextGeneration(arr, i, j));
    }
  }

  return result;
};

module.exports = { gameOfLife };
