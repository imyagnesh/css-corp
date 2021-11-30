const users = [
    { id: 1, name: 'yagnesh', gender: 'Male', age: 33},
    { id: 2, name: 'virat', gender: 'Male', age: 30},
    { id: 3, name: 'Rohit', gender: 'Male', age: 28},
    { id: 7, name: 'Taimur', gender: 'Male', age: 08},
    { id: 4, name: 'Alia', gender: 'Female', age: 18},
    { id: 5, name: 'Dipeeka', gender: 'Female', age: 24},
    { id: 6, name: 'Priyanka', gender: 'Female', age: 38},
];

//console.log(users);

const groupByAge = users.reduce((p, c,index) => {
    const ageGroup = Math.floor((c.age ) / 10);

    const key = `${ageGroup}0-${ageGroup}9`;

    (p[key] = p[key] || []).push(c) ;

    p[key].sort(function (a, b) {
       if (b.name.localeCompare(a.name) == 1) {
         //console.log(a.name + '>' + b.name)
         return -1;
       } else {
         return 1;
       }
    });
    
    return p;
}, {});

var sortGroupByAge = Object.keys(groupByAge).sort().reduce(function(Obj, key) { 
                Obj[key] = groupByAge[key]; 
                return Obj; 
   }, {});

console.log(sortGroupByAge);