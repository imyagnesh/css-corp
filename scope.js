/* Challenge 1: Use your knowledge of the variables' scope and place the following code inside one of the functions in scope.js so the output is a: 1, b: 8, c: 6
console.log(`a: ${a}, b: ${b}, c: ${c}`); */

// Fix
const a = 1; const b = 2; const c = 3;

(function firstFunction () {
  const b = 5; const c = 6;

  (function secondFunction () {
    const b = 8;
    console.log(`a: ${a}, b: ${b}, c: ${c}`); // so the output is a: 1, b: 8, c: 6

    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 8;
      })()
    })()
  })()
})()

/*Challenge 2: Please help me and fix this code to get 'Bert loves his Pidgeons'.*/

//Fix

( function () {
    var bird = 'Pidgeons'; // So the output is 'Bert loves his Pidgeons'.
    if ( typeof bird === 'undefined' ){
        var bird = 'Rubber Duck';
        console.log('Ernie loves his ' + bird );
    } else {
        console.log('Bert loves his ' + bird );
    }
}() );