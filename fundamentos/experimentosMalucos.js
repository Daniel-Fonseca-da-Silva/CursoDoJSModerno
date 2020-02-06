let a = 3
// global em node é mesmo que window do browser
global.b = 123


this.c = 456
this.d = false
this.e = 'Teste'

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

// module.exports = {e: 456, f:false, g: 'teste'}
// console.log(module.exports);

// cria uma variável maluca; sem var ou let
abc = 3 // Não faça isso em casa!!!!
console.log(global.abc);