// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps1(n: number): void {
  const array: string[] = Array.from({ length: n }, () => "");
  for (let i = 0; i < n; i++) {
    const hashes = "#".repeat(i + 1);
    const spaces = " ".repeat(n - i - 1);
    array[i] = hashes + spaces;
    console.log(array[i]);
  }
}

function steps2(n: number): void {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair = stair + "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

function steps3(n: number): void {
  if (n === 0) {
    return;
  }
  console.log(n);
  steps3(n - 1);
}

function steps4(n: number, row: number = 0, stair: string = ""): void {
  // BASE CASE: If we've printed all n rows, stop
  if (n === row) {
    return;
  }

  // If current stair string is complete (length = n), print it and move to next row
  if (n === stair.length) {
    console.log(stair);
    steps4(n, row + 1); // Start building next row with empty string
    return; // ← Missing! Should return here
  }

  // Build the current stair character by character:
  // If stair length <= current row number, add '#'
  if (stair.length <= row) {
    stair += "#";
  } else {
    // Otherwise add space
    stair += " ";
  }

  // Recursively add next character to same row
  steps4(n, row, stair);
}

function staticSteps(n: number): void {
  const array: string[] = ["", "", "", ""];
  array[0] = "#"; // array[i] = #
  //
  array[1] = array[0] + "#"; // array[i+1]=array[i] + "#"
  array[0] += " "; //////////// array[i]+= " ";
  //
  array[2] = array[1] + "#"; // array[i+2]=array[i+1] + "#"
  array[0] += " "; //////////// array[i] += " ";
  array[1] += " "; //////////// array[i+1]+= " ";
  //
  array[3] = array[2] + "#"; // array[i+3]=array[i+2] + "#"
  array[0] += " "; ////////// array[i] += " ";
  array[1] += " "; ////////// array[i+1] += " ";
  array[2] += " "; ////////// array[i+2] += " ";
  //
  array[3] = array[2] + "#"; // array[i+3]=array[i+2] + "#"
  array[0] += " "; ////////// array[i] += " ";
  array[1] += " "; ////////// array[i+1] += " ";
  array[2] += " "; ////////// array[i+2] += " ";
  console.log(array);
}

console.log(staticSteps(5));
console.log(steps1(15));
console.log(steps2(15));
console.log(steps3(15));

function Steps() {
  return <div>Steps</div>;
}

export default Steps;
