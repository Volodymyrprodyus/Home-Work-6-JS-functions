 // Task 12. A function returns name and age of users separated by comma that are older than 18.


 const users3 = [
    { name: 'John', birthday: '1999-6-12' },
    { name: 'Bill', birthday: '2005-5-19' },
    { name: 'Carol', birthday: '2003-10-11' },
    { name: 'Luce', birthday: '2000-11-22' }
  ];


function getAdultNames(users3) { 
	let users = [];
	users3.forEach((user)=>{
		const adultUsers = new Date().getFullYear() - new Date(user.birthday).getFullYear();
		if (adultUsers >= 18){
			users.push(`  ${user.name} ${adultUsers}`);
		};
	});
	return users.join()
 }

 console.log('Task 12. Adult users are: ', getAdultNames(users3));