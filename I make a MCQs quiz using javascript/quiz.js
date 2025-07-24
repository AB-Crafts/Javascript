function startQuiz() {
    let score = 0;
    
  console.log("Welcome to the quiz!");
  console.log("what is the capital of france?");
  console.log("A berlin");
  console.log("B madrid");
  console.log("C spain");
  console.log("D paris");
  
 let answer1 = prompt("Chose your Answer = ");
  if (answer1.toUpperCase() === "D") {
      
      score++;
    
    alert("Correct!");
  } else {
    alert("Incorrect! The correct answer is 'D' Paris.");
  }



console.log("Question Number 2 !");
  console.log("Which one is the Even number?");
  console.log("A 3");
  console.log("B 5");
  console.log("C 7");
  console.log("D 8");
  
 let answer2 = prompt("Chose your Answer = ");
  if (answer2.toUpperCase() === "D") {
       score++;
    
    alert("Correct!");
  } else {
    alert("Incorrect! The correct answer is 'D' 8.");
  }
  
console.log(`Your score is ${score} out of 2`);

 let playAgain = prompt("Do you want to play again? (yes/no) = ");
  if (playAgain.toLowerCase() === "yes") {
    startQuiz();  // Restart the quiz
  } else {
    alert("Goodbye!");
  }


}


startQuiz();