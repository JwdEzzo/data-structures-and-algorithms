function anagrams1(string1: string, string2: string): boolean {
  // Clean strings first: remove non-word characters and convert to lowercase
  const clean1 = string1.replace(/[^\w]/g, "").toLowerCase();
  const clean2 = string2.replace(/[^\w]/g, "").toLowerCase();

  if (clean1.length !== clean2.length) return false;

  const map1: Map<string, number> = new Map();
  const map2: Map<string, number> = new Map();

  for (const letter of clean1) {
    // Use cleaned string
    if (!map1.has(letter)) {
      map1.set(letter, 1);
    } else {
      map1.set(letter, map1.get(letter)! + 1);
    }
  }

  for (const letter of clean2) {
    // Use cleaned string
    if (!map2.has(letter)) {
      map2.set(letter, 1);
    } else {
      map2.set(letter, map2.get(letter)! + 1);
    }
  }
  // const entries = [...map1.entries()]; // Convert to array first
  // for (let i = 0; i < entries.length; i++) {
  //   const [letter, count] = entries[i]; // Destructure each entry
  //   if (map2.get(letter) !== count) {
  //     return false;
  //   }
  // }
  for (const [letter, count] of map1) {
    if (map2.get(letter) !== count) {
      return false;
    }
  }

  return true;
}

function buildCharMap(string: string) {
  const map: Map<string, number> = new Map();
  // Every time we find a character that is NOT a word character (not letter, digit, or underscore),
  // we want to replace it with an empty string ''
  for (const letter of string.replace(/[^\w]/g, "").toLowerCase()) {
    map.set(letter, (map.get(letter) || 0) + 1);
  }
  return map;
}
function buildCharObject(string: string): { [key: string]: number } {
  const map: { [key: string]: number } = {};

  for (const letter of string.replace(/[^\w]/g, "").toLowerCase()) {
    map[letter] = (map[letter] || 0) + 1;
  }
  return map;
}

function anagrams3(string1: string, string2: string): boolean {
  const map1 = buildCharObject(string1);
  const map2 = buildCharObject(string2);

  if (Object.keys(map1).length !== Object.keys(map2).length) {
    return false;
  }

  for (const letter in map1) {
    if (map1[letter] !== map2[letter]) {
      return false;
    }
  }
  return true;
}

function anagrams2(string1: string, string2: string): boolean {
  return (
    string1.split("").sort().join("") === //
    string2.split("").sort().join("")
  );
}

function anagrams4(string1: string, string2: string): boolean {
  // replace non-word characters, lowercase, split will turn into an array , sort alphabetically, join will turn into a string
  return (
    string1.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("") ===
    string2.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
  );
}

console.log(anagrams1("HelloWW  World", "WHelloW  world"));

function Anagrams() {
  return <div>Anagrams</div>;
}

export default Anagrams;
