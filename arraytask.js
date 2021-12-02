//Given code have syntax error becasue of the extra cully brace in line nymber 10

// var bird = 'Pidgeons';
// (function () {
//   if (typeof bird === 'undefined') {
//     let bird = 'Rubber Duck';
//     console.log('Ernie loves his ' + bird);
//   } else {
//     console.log('Bert loves his ' + bird);
//   }
// }());


// var bird = 'Pidgeons';
// (function () {
//   if (typeof bird === 'undefined') {
//     let bird = 'Rubber Duck';
//     console.log('Ernie loves his ' + bird);
//   } else {
//     console.log('Bert loves his ' + bird);
//   }
// }());



const users = [
  {id: 1, name: 'vimal', gener:'M', age:32},
  {id: 2, name: 'raj', gener:'F', age:32},
  {id: 3, name: 'xyz', gener:'M', age:20},
  {id: 4, name: 'xyz', gener:'M', age:40},
  {id: 5, name: 'xyz', gener:'M', age:30},
  {id: 6, name: 'xyz', gener:'M', age:31},
  {id: 7, name: 'xyz', gener:'M', age:35}, 
]

const usr1 = users.find((item) => item.name.startsWith('x') )
console.log(usr1);

const usr2 = users.findIndex((item) => item.age == 32 && item.gener == 'M')
console.log(usr2);

const usr3 = users.filter((item) => item.age > 30 && item.age < 40)
console.log(usr3);
