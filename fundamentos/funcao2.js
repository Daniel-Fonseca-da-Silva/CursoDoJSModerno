// Armazenando uma funcao em uma variavel

const imprimirSoma = function(a, b)
{
    console.log(a + b);
}

imprimirSoma(2, 3);

// Armazenando uma funcao arrow em uma variavel
// => o mesmo que function
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3));

// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(2,3));

// Funcao resumida
const imprimir2 = a => console.log(a);
imprimir2('Top!');