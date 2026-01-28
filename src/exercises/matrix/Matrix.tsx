function staticMatrix() {
  const matrices: number[][] = [
    [0, 0, 0, 0], // [1, 2, 3, 4] [a11, a12, a13, a14]
    [0, 0, 0, 0], // [12,13,14,5] [a21, a22, a23, a24]
    [0, 0, 0, 0], // [11,16,15,6] [a31, a32, a33, a34]
    [0, 0, 0, 0], // [10, 9, 8 7] [a41, a42, a43, a44]
  ];
}

function matrix(n: number) {
  const results: number[][] = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startRow = 0;
  let startColumn = 0;
  let endRow = n - 1;
  let endColumn = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  console.log(results);
}

matrix(4);

function Matrix() {
  return <div>Matrix</div>;
}

export default Matrix;
