
// Task2 
//console.log(typeof(bird));
( function () {
    var bird = 'Pidgeons';
    console.log(typeof(bird));
      if ( typeof bird === 'undefined' ){
          var bird = 'Rubber Duck';
          console.log('Ernie loves his ' + bird );
      } else {
          console.log('Bert loves his ' + bird );
      }
  }() );
  
  
  
  //so the output is a: 1, b: 8, c: 6
  
  // Task 1
  const a = 1; const b = 2; const c = 3;
  
  (function firstFunction () {
    const b = 5; const c = 6;
    //  console.log(`a: ${a}, b: ${b}, c: ${c}`);
    (function secondFunction () {
      const b = 8;
      console.log(`a: ${a}, b: ${b}, c: ${c}`);
      (function thirdFunction () {
        const a = 7; const c = 9;
       //console.log(`a: ${a}, b: ${b}, c: ${c}`);
        (function fourthFunction () {
          const a = 1; const c = 8;
  // console.log(`a: ${a}, b: ${b}, c: ${c}`);
        })()
      })()
    })()
  })()
  //console.log(`a: ${a}, b: ${b}, c: ${c}`);