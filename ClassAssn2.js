const users = [
    { id: 1, name: 'Yagnesh', gender: 'Male', age: 33},
    { id: 2, name: 'Virat', gender: 'Male', age: 30},
    { id: 3, name: 'Rohit', gender: 'Male', age: 28},
    { id: 7, name: 'Taimur', gender: 'Male', age: 08},
    { id: 4, name: 'Alia', gender: 'Female', age: 18},
    { id: 5, name: 'Dipeeka', gender: 'Female', age: 24},
    { id: 6, name: 'Priyanka', gender: 'Female', age: 38},
]

//Find the name whose name starts with y
const nameStartsY = users.filter(item=> item.name.slice(0,1)==='Y');
console.log(nameStartsY);

//Find the index who is male and age 32
const nameStartsY1 = users.findIndex(item=> item.gender==='Male' && item.age===32);
console.log(nameStartsY1);

//check we have user age between 30 and 40
const nameStartsY2 = users.find(item=> item.age>=30 && item.age<=40);
console.log(nameStartsY2);

