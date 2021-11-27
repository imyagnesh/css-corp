const user = {
    id:1,
    name:'Jawahar',
    age: 30
}

//Deleting ID
const {id, ...user2} = user;
console.log(user2);

//Adding Gender
const user3 = {...user,gender:'Male'}
console.log(user3);

//Updating Age
const user1 = {...user,age:33}
console.log(user1);