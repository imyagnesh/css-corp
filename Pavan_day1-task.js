//challenge 1:
// Use your knowledge of the variables' scope and place the following code inside one of the 
// functions in scope.js so the output is a: 1, b: 8, c: 6

const a = 1; const b = 2; const c = 3;
(function firstFunction () {
  const b = 5; const c = 6;
  (function secondFunction () {
    const b = 8;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    (function thirdFunction () {
      const a = 7; const c = 9;
      (function fourthFunction () {
        const a = 1; const c = 8;
      })()
    })()
  })()
})()


//challenge 2:
// Please help me and fix this code to get 'Bert loves his Pidgeons'.

var bird = 'Pidgeons';
( function () {
    if ( typeof bird == 'Undefined' ){
        console.log('Ernie loves his ' + bird );
    } else {
        console.log('Bert loves his ' + bird );
    }
}() );