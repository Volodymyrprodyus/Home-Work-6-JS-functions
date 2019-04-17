 // Task 11/ A function returns array of users that have birthdays in a specific month.

 const users2 = [
    { name: 'John', birthday: '1999-2-12' },
    { name: 'Bill', birthday: '1999-1-19' },
    { name: 'Carol', birthday: '1999-4-11' },
    { name: 'Luce', birthday: '1999-2-22' }
  ];
  
  function filterUsersByMonth(users2, month) { 
    let specificUser="";
    users2.forEach(user => {
        let birthday = new Date(user.birthday);
        if (birthday.getMonth() === month) {
        specificUser=user;
        }
      });
      return specificUser;
    }


  console.log('Task 11. User with specific month ', filterUsersByMonth(users2, 0)); // [{ name: 'Bill', birthday: '1999-1-19' }]
