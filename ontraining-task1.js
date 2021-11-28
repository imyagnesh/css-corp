const user = {
    id:1,
    name:'Abi',
    age: 29
}

// Task 1
//Adding Gender
//Updating Age
//Deleting ID

const userUpdate = {...user, gender:'Female', age:30}
console.log(userUpdate);

const {id, ...userDelete} = user;
console.log(userDelete);