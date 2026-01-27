// capitalize('a short sentence') = 'A Short Sentence'
// capitalize('look, it is working') = 'Look, It Is Working'

// 1st Step: Capitalise the first lette
// 2nd Step: If there is a space between ith and (i+2)th letters, then capitalise the (i+2)th letter. IF WE ASSUME EACH SPACE IS FOLLOWED BY A LETTER
// 2nd Step: If there is a space in the (i-1)th letter, ith letter gets capitalised, gets add to the result
// 3rd Step: else, add the letter as it is to the result
function capitalize1(string: string): string {
  let result: string = "";
  for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i - 1] === " ") {
      result = result + string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }
  return result;
}

function capitalize2(string: string): string {
  return string.replace(/\b\w/g, (char) => char.toUpperCase());
}

function capitalize3(string: string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function capitalize4(string: string): string {
  const words: string[] = [];
  for (const word of string.split(" ")) {
    if (word.length > 0) {
      words.push(word[0].toUpperCase() + word.slice(1));
    } else {
      words.push(word);
    }
  }

  return words.join(" ");
}
console.log(capitalize4("helloOOo      World"));
console.log(capitalize3("helloOOo      World"));

function Capitalize() {
  return <div>Capitalize</div>;
}

export default Capitalize;
