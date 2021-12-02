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

// Can be solved by passing the bird param to IIFE or declaring the variable inside the IIFE. 
var bird = 'Pidgeons';
( function (bird) {
    var bird = 'Pidgeons'; //Solution 2
    if ( typeof bird === 'undefined' ){
        bird = 'Rubber Duck'; // Solution 3
        console.log('Ernie loves his ' + bird );
    } else {
        console.log('Bert loves his ' + bird );
    }
}(bird) ); //Solution 1