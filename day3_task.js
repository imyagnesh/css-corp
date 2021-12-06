const users = [
    { id: 1, name: 'sanatan', gender: 'Male', age: 30, proefession: 'Cricketer'},
    { id: 2, name: 'Prakash', gender: 'Male', age: 28, proefession: 'Cricketer'},
    { id: 3, name: 'Sweetha', gender: 'Female', age: 24, proefession: 'Actor'},
    { id: 4, name: 'RMitali Raj', gender: 'Female', age: 38, proefession: 'Cricketer'},
    { id: 5, name: 'Ali', gender: 'Male', age: 09, proefession: 'Cricketer'},
    { id: 6, name: 'Alia', gender: 'Female', age: 18, proefession: 'Cricketer'},
    { id: 7, name: 'Dipeeka', gender: 'Female', age: 24, proefession: 'Cricketer'},
    { id: 8, name: 'Priyanka', gender: 'Female', age: 38, proefession: 'Cricketer'},
]

const groupByAgeSortName = users.reduce((p, c) => {
    const ageGroup = Math.floor(c.age/10);
    const key = `${ageGroup}0-${ageGroup}9`;
    (p[key] =p[key] || []).push(c);
    p[key].sort((a,b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
    return p; 
}, {});
console.log(groupByAgeSortName); 
