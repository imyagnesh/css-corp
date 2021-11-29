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
