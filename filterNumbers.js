// Task 6. A function which takes an array of numbers and maxNumber,
//  the function returns new array with numbers not higher than maxNumber.



function filterNumbers(arr1, maxNumber) {
    let newArr = arr1.filter(function(number) { // using Callback
        return number < maxNumber;
      });
      console.log('Task 6. result is ',newArr); 
}

filterNumbers([1, 4, 8, 1, 20], 5) // [1, 4, 1]