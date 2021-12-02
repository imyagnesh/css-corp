const users = [
    { id: 1, name: 'Yagnesh', gender: 'Male', age: 33},
    { id: 2, name: 'Virat', gender: 'Male', age: 30},
    { id: 3, name: 'Rohit', gender: 'Male', age: 28},
    { id: 7, name: 'Taimur', gender: 'Male', age: 08},
    { id: 4, name: 'Alia', gender: 'Female', age: 18},
    { id: 5, name: 'Dipeeka', gender: 'Female', age: 24},
    { id: 6, name: 'Priyanka', gender: 'Female', age: 38},
    { id: 7, name: 'Amitabh', gender: 'Male', age: 65},
    { id: 8, name: 'Rekha', gender: 'Female', age: 72},
];

const sortByPropetyValue = (propName) => {
    return (a, b) => a[propName].localeCompare(b[propName]);
};


console.time("sep-start");
users.sort(sortByPropetyValue("name"));
const groupByAge1 = users.reduce((p, c) => {
    const ageGroup = Math.floor(c.age/10);
    const key = `${ageGroup}0-${ageGroup}9`;

    // if use below line it take more time.
    //return {...p, [key]: [...(p[key] = p[key] || []), c].sort(sortByPropetyValue("name"))};
    
    return {...p, [key]: [...(p[key] = p[key] || []), c]};
}, {});
console.timeEnd("sep-start");
console.log(groupByAge1);
