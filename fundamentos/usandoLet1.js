// let tem escopo de função, escopo local e escopo de bloco

let numero = 1
{
    // Escopo de bloco
    let numero = 2
    console.log('Dentro = ', numero);
}
console.log('Fora = ', numero);