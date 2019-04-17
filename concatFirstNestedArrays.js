// Task 9. A function which concats all first-nested arrays in one array (use reduce):

function concatFirstNestedArrays(arr) { 
    let flattened = arr.reduce(
        function(accumulator, currentValue) {
          return accumulator.concat(currentValue);
        },
        []
      ); 
      return flattened;   
}
// [0, 1, 2, 3, 4, 5]
console.log('Task 9. one array is ',concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]));  