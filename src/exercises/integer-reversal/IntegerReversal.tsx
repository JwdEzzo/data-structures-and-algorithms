function reverseInt1(int: number): number {
  const array: string[] = int.toString().split(""); // made an array
  const reversedArray: string[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]); // reversed it
  }
  if (reversedArray[reversedArray.length - 1] === "-") {
    reversedArray.pop(); // removed the -
    reversedArray.unshift("-"); // put it at index=0
  }
  const numString = reversedArray.join(""); // joined the array, made it a string
  const finalResult = Number(numString); // parsed it into a number

  return finalResult;
}

function reverseInt2(int: number): number {
  const string = int.toString(); // made an array
  const reversed = string.split("").reverse().join(""); // joined and reversed

  if (int < 0) {
    return Number("-" + reversed.slice(0, -1)); // Move '-' to front
  }
  return Number(reversed);
}

function reverseInt3(int: number): number {
  const reversed = int
    .toString() //
    .split("")
    .reverse()
    .join("");

  return Number(reversed) * Math.sign(int);
}

console.log(reverseInt1(-9000000000000000));

// function reverseInt2(int: number): number {
//   const array: string[] = string.split("");
//   return array.every((i) => i === array[string.length - 1 - array.indexOf(i)]);
// }

// function reverseInt3(int: number): number {
//   return string.split("").every((letter, i) => {
//     return letter === string[string.length - i - 1];
//   });
// }

// function reverseInt4(int: number): number {
//   const clean = string.toLowerCase();
//   let left = 0;
//   let right = clean.length - 1;

//   while (left < right) {
//     if (clean[left] !== clean[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

function IntegerReversal() {
  return <div>IntegerReversal</div>;
}

export default IntegerReversal;
