const users = [
    { id: 1, name: 'sanatan', gender: 'Male', age: 30, proefession: 'Cricketer'},
    { id: 2, name: 'Prakash', gender: 'Male', age: 28, proefession: 'Cricketer'},
    { id: 5, name: 'Sweetha', gender: 'Female', age: 24, proefession: 'Actor'},
    { id: 6, name: 'RMitali Raj', gender: 'Female', age: 38, proefession: 'Cricketer'},
]

const maleCricketer = users.filter(item => item.gender === 'Male' && item.proefession === 'Cricketer');

console.log(maleCricketer);
