// Task 1. A function which prints str after n second


function printTimeout(str, n) {
    const TIME = n * 1000; // transform to seconds
    const STRINGDELAY = setTimeout (()=> {
        console.log('Task 1 ',str);
        clearTimeout(STRINGDELAY); // clear the timer
    }, TIME);
    
}

printTimeout('hello', 0) // hello will appear after 10secs in console




