// Par nome || valor
const saudacao = 'Epa'; // Contexto léxico 1

function exec(){
    const saudacao = 'Top!'; // Contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhdados de pares nome || valor
const cliente = {
    nome: 'Pedro',
    idade: 35,
    peso: 90,
    endereco:{
        logradouro: 'Rua sem nome',
        numero: 404
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);