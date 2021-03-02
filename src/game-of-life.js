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

  return directions.filter(
    ([newI, newJ]) =>
      newI > -1 &&
      newI < arr.length &&
      newI > -1 &&
      newJ < arr.length &&
      arr[newI][newJ] === 1
  ).length;
};

const computeNextGeneration = (arr, i, j) => {
  const numberOfLivingNeighbours = countAliveNeighbours(arr, i, j);

  if (arr[i][j] === 1) {
    if (numberOfLivingNeighbours < 2 || numberOfLivingNeighbours > 3) {
      return 0;
    }

    if (numberOfLivingNeighbours === 2 || numberOfLivingNeighbours === 3) {
      return 1;
    }
  } else {
    if (numberOfLivingNeighbours === 3) {
      return 1;
    } else {
      return 0;
    }
  }
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

// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
