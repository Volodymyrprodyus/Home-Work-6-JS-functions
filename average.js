// Task 8. A function that returns average of numbers in array.
function average(arr) { 
    let sum = 0;
    let arrayLenght = arr.length; 
     for(var i = 0; i < arrayLenght; i++){ 
         sum += arr[i];
    } 
    console.log('Task 8. average of numbers in array is ',sum/arrayLenght); 
} 

average ([1,4,2]) // 2.33