🔐 Password Strength Checker
🧠 Overview

This JavaScript program checks the strength of a user-entered password based on several criteria. It uses regular expressions to test for uppercase letters, lowercase letters, numbers, special characters, and overall length.
Depending on how many conditions are met, it classifies the password as Weak, Medium, or Strong.

⚙️ Features

Checks if password length is at least 8 characters

Detects the presence of:

Uppercase letters (A–Z)

Lowercase letters (a–z)

Numbers (0–9)

Special characters (e.g. !@#$%^&*)

Displays password strength level with emojis:

💪 Strong password

🙂 Medium password

😕 Weak password

🧩 How It Works

The program prompts the user to enter a password using prompt().

It initializes a counter strength = 0.

For each condition met (e.g. contains uppercase), it increments the strength counter by 1.

Based on the total score:

0–2 points → Weak password

3–4 points → Medium password

5 points → Strong password

The result is printed to the console using console.log().

💻 Example Output
Enter your password: Hello123
Medium password 🙂

Enter your password: Hello@123
Strong password 💪

Enter your password: abc
Weak password 😕

🧰 Technologies Used

JavaScript (ES6+)

Regular Expressions (RegExp)

Browser Console / Node.js environment

🚀 How to Run

Copy the code into a file named passwordChecker.js

Run it in a browser console or using Node.js:

node passwordChecker.js


Enter a password when prompted and check the result in the console.

📚 Concepts Practiced

String validation

Regular expressions

Conditional statements

User input handling