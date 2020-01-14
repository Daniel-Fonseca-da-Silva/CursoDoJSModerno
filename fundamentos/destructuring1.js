// Novo recurso do ES2015

const pessoa = {
    nome: 'Marcos',
    idade: 16,
    endereco: {
        logradouro: 'Lugar algum',
        numero: 404
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);

// const { conta: {arg, num }} = pessoa;
// console.log(ag, num);

