function reverseString1(string: string) {
  const array: string[] = [];
  for (let i = string.length; i >= 0; i--) {
    array.push(string[i]);
  }
  console.log(array);
  return array;
}

function reverseString2(string: string) {
  const array: string[] = string.split("");
  array.reverse();
  return array.join("");
  // return str.split('').reverse().join('')
}
function reverseString3(string: string) {
  let reversed = "";
  for (const character of string) {
    reversed = character + reversed;
  }
  return reversed;
  //   Initial: reversed = ""
  // Iteration 1: character = 'h', reversed = 'h' + "" = "h"
  // Iteration 2: character = 'e', reversed = 'e' + "h" = "eh"
  // Iteration 3: character = 'l', reversed = 'l' + "eh" = "leh"
  // Iteration 4: character = 'l', reversed = 'l' + "leh" = "lleh"
  // Iteration 5: character = 'o', reversed = 'o' + "lleh" = "olleh"
}

function reverseString4(string: string) {
  return string
    .split("")
    .reduce((reversed, character) => character + reversed, "");
  // string.split("") creates array: ["h", "e", "l", "l", "o"]
  // reduce() processes each element:
  // Initial value: "" (second parameter to reduce)
  // Step 1: reversed = "", character = "h" → "h" + "" = "h"
  // Step 2: reversed = "h", character = "e" → "e" + "h" = "eh"
  // Step 3: reversed = "eh", character = "l" → "l" + "eh" = "leh"
  // Step 4: reversed = "leh", character = "l" → "l" + "leh" = "lleh"
  // Step 5: reversed = "lleh", character = "o" → "o" + "lleh" = "olleh"
}

function ReverseString() {
  return (
    <div>
      <h1>{reverseString1("Skibiewfewdis")}</h1>
      <h1>{reverseString2("Skibiewfewdis")}</h1>
      <h1>{reverseString3("Skibi")}</h1>
      <h1>{reverseString4("hii")}</h1>
    </div>
  );
}

export default ReverseString;
