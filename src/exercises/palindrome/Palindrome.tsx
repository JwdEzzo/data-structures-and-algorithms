// // careerac
// // i = 0 , string.charAt(0) = c = string.charAt((7)8-0-1)
// // i = 1 , string.charAt(1) = a = string.charAt((6)(8-1-1))
// // i = 2 , string.charAt(2) = r = string.charAt(5)
// // i = 3 , string.charAt(3) = 4 = string.charAt(4)
// // joboj
// // i = 0 , string.charAt(0) = j = string.charAt(7)
// // i = 1 , string.charAt(1) = o = string.charAt(6)
// // i = 2 , string.charAt(2) = r = string.charAt(5)
function palindrome(string: string): boolean {
  for (let i = 0; i < string.length / 2; i++) {
    if (
      string.charAt(i).toLowerCase() !==
      string.charAt(string.length - i - 1).toLowerCase()
    ) {
      return false; // ❌ Mismatch found! Not a palindrome.
    }
    // Keep looping to check more character pairs...
  }
  // If we reach here, the loop completed without finding any mismatches
  return true; // ✅ All character pairs matched! It's a palindrome.
}
// return false = "I found proof this isn't a palindrome"
// Final return true = "I looked everywhere and found NO proof against it being a palindrome"

function palindrome2(string: string): boolean {
  const reversed = string.split("").reverse().join("");
  return string === reversed;
}

function palindrome3(string: string): boolean {
  const array: string[] = string.split("");
  return array.every((i) => i === array[string.length - 1 - array.indexOf(i)]);
}

function palindrome4(string: string): boolean {
  return string.split("").every((letter, i) => {
    return letter === string[string.length - i - 1];
  });
}

function palindrome5(string: string): boolean {
  const clean = string.toLowerCase();
  let left = 0;
  let right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(palindrome5(""));

function Palindrome() {
  return <div>{palindrome2("Hello")}</div>;
}

export default Palindrome;

// My problem here is that i was returning true early when the 1st pair matches, which in turns breaks the loop and no more checking happens
// function palindrome2(string: string): boolean {
//   for (let i = 0; i < string.length / 2; i++) {
//     if (
//       string.length % 2 === 0 &&
//       string.charAt(i).toLowerCase() ===
//         string.charAt(string.length - i).toLowerCase()
//     ) {
//       return true;
//     } else if (
//       string.length % 2 !== 0 &&
//       string.charAt(i).toLowerCase() ===
//         string.charAt(string.length - i - 1).toLowerCase()
//     ) {
//       return true;
//     }
//   }
//   return false;
// }
