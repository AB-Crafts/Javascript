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

console.log(generateFibonacci(5));

