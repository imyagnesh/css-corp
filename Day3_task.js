const users = [
    { id: 1, name: 'Yagnesh', gender: 'Male', age: 33 },
    { id: 2, name: 'Virat', gender: 'Male', age: 30 },
    { id: 3, name: 'Rohit', gender: 'Male', age: 28 },
    { id: 7, name: 'Taimur', gender: 'Male', age: 08 },
    { id: 4, name: 'Alia', gender: 'Female', age: 18 },
    { id: 5, name: 'Dipeeka', gender: 'Female', age: 24 },
    { id: 6, name: 'Priyanka', gender: 'Female', age: 38 },
];

//Sorting
const sortUsers = users.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
});

console.log(sortUsers)

//Reduce
const groupByAge = sortUsers.reduce((p, c) => {
    const ageGroup = Math.floor(c.age / 10);
    const Key = `${ageGroup}0-${ageGroup}9`;
    (p[Key] = p[Key] || []).push(c);
    return p;
}, {})

console.log(groupByAge);