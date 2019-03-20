// Task 2. A function which returns sum of all numbers from 1 to n using recursion.

let sum = 0;
function sumAll(n) { 
    sum += n; 
    if (n > 0) {
        sumAll(n-1); // using recursion
    } else {
        console.log('Task 2. The sum of all numbers is ', sum);
        sum = 0;
    }
    return sum; 
}
sumAll(2); // 3
sumAll(4); // 10