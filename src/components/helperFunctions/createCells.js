const createCells = () => {
  const numRows = 9;
  const numCols = 9;
  const numBombs = 10;
  const cells = Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, () => ({ bomb: false, state: 0, value: 0 }))
  );

  for (let i = 0; i < numBombs; i++) {
    let placedBomb = false;
    while (!placedBomb) {
      const row = Math.floor(Math.random() * numRows);
      const col = Math.floor(Math.random() * numCols);
      if (!cells[row][col].bomb) {
        cells[row][col].bomb = true;
        placedBomb = true;
      }
    }
  }

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const cell = cells[row][col];
      if (cell.bomb) {
        cell.value = -1;
        continue;
      }
      let counter = 0;
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const newRow = row + dx;
          const newCol = col + dy;
          if (
            newRow >= 0 &&
            newRow < numRows &&
            newCol >= 0 &&
            newCol < numCols &&
            cells[newRow][newCol].bomb
          ) {
            counter++;
          }
        }
      }
      cell.value = counter;
    }
  }

  return cells;
};

export default createCells;
