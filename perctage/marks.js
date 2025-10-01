// Input Section
let name = prompt("Enter Student's Name:");
let roll = prompt("Enter Roll Number:");
let math = parseInt(prompt("Enter Math Marks (out of 100):"));
let english = parseInt(prompt("Enter English Marks (out of 100):"));
let science = parseInt(prompt("Enter Science Marks (out of 100):"));
let chemistry = parseInt(prompt("Enter Chemistry Marks (out of 100):"));

// Processing Section
let total = math + english + science + chemistry;
let percent = (total / 400) * 100;

// Result Condition
let result;
if (percent >= 40) {
  result = "Pass";
} else {
  result = "Fail";
}

// Output Section
alert("----- Result Sheet -----\n" +
      "Name: " + name + "\n" +
      "Roll No: " + roll + "\n" +
      "Math: " + math + "\n" +
      "English: " + english + "\n" +
      "Chemistry: " + chemistry + "\n" +
      "Science: " + science + "\n" +
      "Total Marks: " + total + "/400\n" +
      "Percentage: " + percent.toFixed(2) + "%\n" +
      "Result: " + result);
