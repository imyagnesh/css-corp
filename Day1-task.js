//challenge-1 

const a = 5; const b = 8; const c = 4;

(function firstFunction () {
  const b = 2; const c = 3;

  (function secondFunction () {
    const b = 9;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);

    (function thirdFunction () {
      const a = 4; const c = 5;

      (function fourthFunction () {
        const a = 2; const c = 5;
      })()
    })()
  })()
})()

//challenge-2

let bird = 'Parrot';
( function () {
    if ( typeof bird === 'undefined' ){
         bird = 'Duck';
        console.log('We love the' + bird );
    } else {
        console.log('We loves their ' + bird );
    }
}() );