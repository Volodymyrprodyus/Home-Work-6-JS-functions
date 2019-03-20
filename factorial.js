// Task 4. A function which returns factorial of number using recursion.

function factorial(n) { 
    while (n !== 0) {
       let res = n * factorial(n - 1);
        return res;
      } if (n === 0) {
          return 1;
      }
}
console.log('Task 4. factorial = ',factorial(3)); // 6
console.log('Task 4. factorial = ',factorial(5)); // 120
console.log('Task 4. factorial = ',factorial(0)); // 1