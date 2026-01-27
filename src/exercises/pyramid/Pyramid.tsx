function recursivePyramid(
  n: number,
  row: number = 0,
  level: string = "",
): void {
  // If now we've printed all n rows, stop
  if (row === n) {
    return;
  }

  // If current level string is complete (length = 2n-1), print it and move to next row
  if (level.length === 2 * n - 1) {
    console.log(level);
    recursivePyramid(n, row + 1);
    return;
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add: string;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  level += add;

  // Recursively add next character to same row
  recursivePyramid(n, row, level);
}
function recursivePyramid2(
  n: number,
  row: number = 0,
  level: string = "",
): void {
  // If now we've printed all n rows, stop
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    recursivePyramid2(n, row + 1, "");
    return;
  }
}

function pyramid2(n: number): void {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level: string = "";
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }

    console.log(level);
  }
}

console.log(Math.floor(3.5));
console.log(recursivePyramid(5));

function staticPyramid(n: number): void {
  const array: string[] = ["", "", "", ""];
  array[3] = "#######"; // array[n] = "#######"
  //
  array[2] = " " + array[3].substring(1, 6) + " "; // array[n-1] = " 1 " + array[n].substring[1,(2n+1)-1] + " 1 "
  //
  array[1] = "  " + array[2].substring(2, 5) + "  "; // array[n-2] = " 2 " + array[n-1].substring[2,(2n+1)-2] + " 2 "
  //
  array[0] = "   " + array[2].substring(3, 4) + "   "; // array[n-3] = "  3 " + array[n-2].substring[3,(2n+1)-3] + "  3 "
  /////////////////////////////////////////////////////// array[n-1] = " 1 " + array[n].substring[1,(2n+1)-1] + " 1 "
  /////////////////////////////////////////////////////// array[n-2] = " 2 " + array[n-1].substring[2,(2n+1)-2] + " 2 "
  /////////////////////////////////////////////////////// array[n-3] = "  3 " + array[n-2].substring[3,(2n+1)-3] + "  3 "
  /////////////////////////////////////////////////////// array[n-i] = " i " + array[n-i+1].substring[i,(2n+1)-i] + " i "
  /////////////////////////////////////////////////////// array[n-(n-i)] = " (n-i) " + array[n-(n-i)+1].substring[n-i,(2n+1)-(n-i)] + " i "
  /////////////////////////////////////////////////////// array[i] = " (n-i) " + array[i+1].substring[n-i,n+i+1] + " (n-i) "
  console.log(array);
}
// array[n-i] = " repeated i times" + array[n-i+1].substring(i, (2n+1)-i) + " repeated i times"
function pyramid1(n: number): void {
  const array: string[] = Array.from({ length: n + 1 }, () => "");
  array[n] = "#".repeat(2 * n + 1);

  for (let i = 1; i <= n; i++) {
    array[n - i] =
      " ".repeat(i) +
      array[n - i + 1].substring(i, 2 * n + 1 - i) +
      " ".repeat(i);
  }
  console.log(array);
}

pyramid1(5);
function Pyramid() {
  return <div>Pyramid</div>;
}

export default Pyramid;
