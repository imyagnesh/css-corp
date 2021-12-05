const users = [
    { id: 1, name: 'Yagnesh', gender: 'Male', age: 33},
    { id: 2, name: 'Virat', gender: 'Male', age: 30},
    { id: 3, name: 'Rohit', gender: 'Male', age: 28},
    { id: 7, name: 'Taimur', gender: 'Male', age: 08},
    { id: 4, name: 'Alia', gender: 'Female', age: 18},
    { id: 5, name: 'Dipeeka', gender: 'Female', age: 24},
    { id: 6, name: 'Priyanka', gender: 'Female', age: 38},
]

//Task 2
//Find all user whose name start with Y
//FInd the index who is male and age 32
// check we have user age between 30 and 40

const userGetNameStartwithY = users.filter(item => item.name.startsWith('Y'));
console.log(userGetNameStartwithY);

const userMaleUpdate = users.findIndex(item => item.gender === 'Male' && item.age === 32);
console.log(userMaleUpdate);

const userAgeBetween = users.some(item => item.age >= 30 && item.age <= 40);
console.log(userAgeBetween);