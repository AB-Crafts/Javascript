# Fibonacci Sequence Generator

This project contains a simple JavaScript function to generate the first `n` numbers of the Fibonacci sequence.

## 📖 Definition

The Fibonacci sequence is defined as:

- F(0) = 0  
- F(1) = 1  
- F(n) = F(n-1) + F(n-2) for n ≥ 2  

So the sequence begins:  
`0, 1, 1, 2, 3, 5, 8, 13, ...`

## 🧑‍💻 Function

```javascript
function generateFibonacci(n) {
  let result = [];
  let f1 = 0, f2 = 1;

  for (let i = 0; i < n; i++) {
    result.push(f1);
    let next = f1 + f2;
    f1 = f2;
    f2 = next;
  }

  return result;
}
🚀 Usage
javascript
Copy code
console.log(generateFibonacci(5)); 
// Output: [0, 1, 1, 2, 3]

console.log(generateFibonacci(8)); 
// Output: [0, 1, 1, 2, 3, 5, 8, 13]
⚙️ Constraints
n must be a positive integer.

The function returns an array of the first n Fibonacci numbers.

📂 Example Run
bash
Copy code
node fibonacci.js