console.log('a =', a);

// Jogada para cima pelo interpretador hoisting!
var a = 2;
console.log(a);

// Let não tem hoisting!
console.log('b =', b);
let b = 2;
console.log('b =', b);