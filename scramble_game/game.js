const readline = require("readline-sync");
let words = ["apple", "banana", "grapes", "orange" , "peach"];
let randomWord = words[Math.floor(Math.random() * words.length)];
function scramble(word) {
  return word.split("").sort(() => Math.random() - 0.5).join("");
}

let scrambled = scramble(randomWord);
let guess;

while (guess !== randomWord) {
  guess = readline.question(`Unscramble this word: ${scrambled} = `);

  if (guess === randomWord) {
    console.log("🎉 Correct! The word is " + randomWord);
  } else {
    console.log("❌ Wrong, try again!");
  }
}
