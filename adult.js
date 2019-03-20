 // Task 12. A function returns name and age of users separated by comma that are older than 18.


 const users3 = [
    { name: 'John', birthday: '1999-6-12' },
    { name: 'Bill', birthday: '2005-5-19' },
    { name: 'Carol', birthday: '2003-10-11' },
    { name: 'Luce', birthday: '2000-11-22' }
  ];

  function getAdultNames(users3) {
    users3.forEach(user => {
        let birthday = new Date(user.birthday);
        let minDate = new Date();
        let ageDate = new Date(user.birthday);
        let currentDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 18);
        let age = (currentDate.getFullYear() - ageDate.getFullYear());
        if (birthday < minDate) {
        console.log('Task 12. Adult users are: ', user.name + ' ' + age);
        }  
      });
     
   }
 
   getAdultNames(users3);  


//     getAdultNames(users3) // 'John 19, Luce 18'