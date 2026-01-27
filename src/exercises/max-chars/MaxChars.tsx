function maxChar1(string: string): string {
  const map: Map<string, number> = new Map();
  for (let i = 0; i < string.length; i++) {
    if (!map.has(string[i])) {
      map.set(string[i], 1);
    } else {
      map.set(string[i], map.get(string[i])! + 1);
    }
  }
  const keys = [...map.keys()];
  const numbers = [...map.values()];
  const max = Math.max(...numbers);
  return keys.find((key) => map.get(key) === max)!;
  // const maxEntry = [...map.entries()].reduce((max, current) =>
  //   current[1] > max[1] ? current : max,
  // );
}
function maxChar2(string: string): string {
  const map: Map<string, number> = new Map();
  for (const i of string) {
    if (!map.has(i)) {
      map.set(i, 1);
    } else {
      map.set(i, map.get(i)! + 1);
    }
  }
  const keys = [...map.keys()];
  const numbers = [...map.values()];
  const max = Math.max(...numbers);
  return keys.find((key) => map.get(key) === max)!;
}
function maxChar3(string: string): string {
  const object: { [key: string]: number } = {};
  for (const i of string) {
    if (object[i]) {
      object[i]++;
    } else {
      object[i] = 1;
    }
  }
  const keys = Object.keys(object);
  const numbers = Object.values(object);
  const max = Math.max(...numbers);
  return keys.find((key) => object[key] === max)!;
  // if (!object[i]) {
  //   object[i]++;
  // } else {
  //   object[i] = 1;
  // }
}
function maxChar4(string: string): string {
  const object: { [key: string]: number } = {};
  let max = 0;
  let maxChar = "";
  for (const i of string) {
    if (!object[i]) {
      object[i] = 1;
    } else {
      object[i]++;
    }
  }
  for (const char in object) {
    if (object[char] > max) {
      max = object[char];
      maxChar = char;
    }
  }
  return maxChar;
}

function maxChar5(string: string): string {
  const map = new Map<string, number>(); // Create a Map to store each character and its count
  let max = 0; // Track the highest count we've seen
  let maxChar = ""; // Track which character has the highest count
  // Loop through each character in the string
  for (const char of string) {
    // Get current count of this character (or 0 if it doesn't exist yet)
    const count = (map.get(char) || 0) + 1; // Then add 1 to it

    map.set(char, count); // Update the map with the new count for this character

    // If this character's count is now the highest we've seen
    if (count > max) {
      max = count; // Update the highest count
      maxChar = char; // Update which character is the most frequent
    }
  }
  return maxChar; // Return the most frequent character
}
// 'h': count=1, max=1, maxChar='h'
// 'e': count=1, max=1, maxChar='h' (not greater)
// 'l': count=1, max=1, maxChar='h' (not greater)
// 'l': count=2, max=2, maxChar='l' (new max!)
// 'o': count=1, max=2, maxChar='l' (not greater)
// Returns: 'l'

console.log(maxChar5("JAWAAAAAAAAAD"));

function MaxChars() {
  return <div>MaxChars</div>;
}

export default MaxChars;
