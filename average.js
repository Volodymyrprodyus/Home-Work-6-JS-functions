// Task 8. A function that returns average of numbers in array.
function average(arr) { 
    let sum = 0;
    let res;
    let arrayLenght = arr.length; 
     for(var i = 0; i < arrayLenght; i++){ 
         sum += arr[i];
    } 
    res = sum/arrayLenght;
  
    
    return res.toFixed(2);
} 

 // 2.33
console.log('Task 8. average of numbers in array is ', average ([1,4,2])); 