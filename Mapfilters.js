const users = [
    { id: 1, name: 'sanatan', gender: 'Male', age: 30},
    { id: 2, name: 'Prakash', gender: 'Male', age: 28},
    { id: 5, name: 'Amit', gender: 'Female', age: 24},
    { id: 6, name: 'Raj', gender: 'Female', age: 38},
]

const userProfession = users.map(x => {
    if (x.gender === 'Male') {
        return {proefession : ' Cricketer',...x}
    } else if (x.gender === 'Female') {
        return {proefession : ' Actor',...x}
    }
})
console.log(userProfession);

// 1. If Record Found then it will return index of record
// else return -1
const index = users.findIndex(item => item.name === "sanatan")
console.log(index);

// 2. Every method will check all records.

const isEveryoneAdult = users.every(item => item.age >= 18);

console.log(isEveryoneAdult);
