// map

// reduce

const users = [
    { id: 1, name: 'Yagnesh', gender: 'Male', age: 33},
    { id: 2, name: 'Virat', gender: 'Male', age: 30},
    { id: 3, name: 'Rohit', gender: 'Male', age: 28},
    { id: 7, name: 'Taimur', gender: 'Male', age: 08},
    { id: 4, name: 'Alia', gender: 'Female', age: 18},
    { id: 5, name: 'Dipeeka', gender: 'Female', age: 24},
    { id: 6, name: 'Priyanka', gender: 'Female', age: 38},
]

// Add new property 
// if user is male add profession: 'cricketer'

// if user is female add profession:'actor' 


const newUser = users.map(x => {
    if(x.gender === "male") {
       return {...x, profession: 'cricketer'} 
    } else {
        return  {...x, profession:'actor'}
    }
});
console.log(newUser);




// const arr = [1,2,3,4,5];

// const newArr = arr.map(item => {
//     if(item % 2 === 0) {
//         return item * 2;
//     }
//     return item;
// });

// console.log(newArr);