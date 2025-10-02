Vowel Counter in JavaScript
📌 Description

This is a simple JavaScript program that counts the number of vowels in a given string.
It checks for both uppercase and lowercase vowels (a, e, i, o, u).

🛠️ Code Example
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("helloee air in space")); // Output: 9

🚀 How It Works

A string of vowels (aeiouAEIOU) is defined.

The function loops through each character in the input string.

If the character is found in the vowels string, the counter increases.

Finally, the function returns the total count.

🎯 Example Output
Input:  "helloee air in space"
Output: 9

💡 Use Cases

String analysis (finding vowel distribution).

Learning basic string operations in JavaScript.

Practicing loops and conditionals.