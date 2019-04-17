// Task 7. A function that returns object with min and max numbers from array of numbers.

function minMax(arr) { 
    let object = {
        max: 0,
        min: 0
    };
    let maxNumbers = arr.reduce(function(a, b) {
        return Math.max(a, b);});
        console.log('Task 7. max number of array is ', maxNumbers);
    let minNumbers = arr.reduce(function(a, b) {
        return Math.min(a, b);});
        console.log('Task 7. min number of array is ', minNumbers);

       object.min = minNumbers;
       object.max = maxNumbers;
   return object;
}


 
console.log('Task 7. object ', minMax([9, 1, 8, 2, 20])); // { max: 20, min: 1 }
