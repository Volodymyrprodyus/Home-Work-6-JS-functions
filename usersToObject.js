// Task 10. A function accepts array of users and returns object 
// of users where key is user id and value user data.

const users = [
    { id: 1, name: 'John', birthday: '1999-2-12' },
    { id: 2, name: 'Bill', birthday: '1999-1-19' },
    { id: 3, name: 'Carol', birthday: '1999-3-11' },
    { id: 4, name: 'Luce', birthday: '1999-2-22' }
  ];
  
  function usersToObject(users) { 
    const usersObj = {};
    users.forEach ((user) =>{
        usersObj[user.id] = user;  
    })
     
    return usersObj;

    }

    console.log('Task 10 ', usersToObject(users));
  // {
  //  1: { id: 1, name: 'John', birthday: '1999-2-12' },
  //  2: { id: 2, name: 'Bill', birthday: '1999-1-19' },
  //  3: { id: 3, name: 'Carol', birthday: '1999-3-11' },
  //  4: { id: 4, name: 'Luce', birthday: '1999-2-22' }
  // };