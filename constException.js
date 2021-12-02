const users = [ { id: 1, name: 'Yagnesh', gender: 'Male', age: 33}, { id: 2, name: 'Virat', gender: 'Male', age: 30}, { id: 3, name: 'Rohit', gender: 'Male', age: 28}, { id: 7, name: 'Taimur', gender: 'Male', age: 08}, { id: 4, name: 'Alia', gender: 'Female', age: 18}, { id: 5, name: 'Dipeeka', gender: 'Female', age: 24}, { id: 6, name: 'Priyanka', gender: 'Female', age: 38}, ];

// { // "00-09": [], // "10-19": [], // "20-29": [], // "30-39": [] // }

// Group By + sorting with name

// reduce O(N) // sort O(N) // O(n**2)

// O(N)// Primive Data types

// string
// number
// boolean
// bigInt
// symbol

const name = "yagnesh";

// name = "Rohit"

// const age = 30;

// age = 28

// Non-Premitive Data types

// object
// array
// null

// with constant we can change "inner" value of non-premitive type of data
// but cant reassign completly
const arr = [1, 2, 3, 4, 5];

// arr = []

arr[2] = 10;

console.log(arr);

// undefined

const a = 1;
// this will only work with premitive data type
// a = 2

// Mutable & Immutanble
