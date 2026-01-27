// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
function vowels1(string: string): number {
  const map: Map<string, number> = new Map();
  const vowels: string[] = ["a", "o", "i", "e", "u"];
  let amount: number = 0;
  for (const letter of string) {
    if (!map.has(letter.toLowerCase())) {
      map.set(letter.toLowerCase(), 1);
    } else {
      map.set(letter.toLowerCase(), map.get(letter.toLowerCase())! + 1);
    }
  }
  for (const [letter, count] of map) {
    if (vowels.includes(letter)) {
      amount = amount + count;
    }
  }
  return amount;
}

function vowels2(string: string): number {
  const vowels: string[] = ["a", "o", "i", "e", "u"];
  let count: number = 0;

  for (const letter of string.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
}

function vowels3(string: string): number {
  return string
    .toLowerCase()
    .split("")
    .filter((char) => ["a", "o", "i", "e", "u"].includes(char)).length;
}

function vowels4(string: string): number {
  const matches = string.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

console.log(vowels1("saakibiAAAAAdeoioii"));

function Vowels() {
  return <div>Vowels</div>;
}

export default Vowels;
