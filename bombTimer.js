// Task 3. A function which takes str and time in seconds as arguments,
//  then every second it should count down 
// from time to 0 and print current time to console when time equals to 0 it prints str

function bombTimer(str, time) { 
    let count = setInterval(() => {
        console.log('Task 3 ', time);
        time--;
        if (time === 0) {
          clearInterval(count);
          const STRINGDELAY = setTimeout(() => {
            console.log('Task 3 ',str);
            clearTimeout(STRINGDELAY);
          }, 1000);
        }
      }, 1000); 
}

bombTimer('Boooom', 3);


// 3
// 2
// 1
// Boooom