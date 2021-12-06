const a = 1; var b = 2; var c = 3;

(function firstFunction () {
   b = 5; c = 6;

  (function secondFunction () {
     b = 8;

    (function thirdFunction () {
      const a = 7;  let c = 9;

      (function fourthFunction () {
        const a = 1; let c = 8;
      })()
    })()
  })()
})();


console.log(`a: ${a}, b: ${b}, c: ${c}`);

var bird = 'Pidgeons';
( function () {

    if ( typeof bird === 'undefined' ){
        let bird = 'Rubber Duck';
        console.log('Ernie loves his ' + bird );
    } else {
        console.log('Bert loves his ' + bird );
    }
}() );