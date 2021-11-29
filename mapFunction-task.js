const users = [
    { id: 1, name: 'Yagnesh', gender: 'Male', age: 33},
    { id: 2, name: 'Virat', gender: 'Male', age: 30},
    { id: 3, name: 'Rohit', gender: 'Male', age: 28},
    { id: 7, name: 'Taimur', gender: 'Male', age: 08},
    { id: 4, name: 'Alia', gender: 'Female', age: 18},
    { id: 5, name: 'Dipeeka', gender: 'Female', age: 24},
    { id: 6, name: 'Priyanka', gender: 'Female', age: 38},
]

const userProfession = users.map(x => {
    if (x.gender === 'Male') {
        return {proefession : ' Cricketer',...x}
    } else if (x.gender === 'Female') {
        return {proefession : ' Actor',...x}
    }
})
console.log(userProfession)