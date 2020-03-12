let dobro = function (a)
{
    return 2 * a
}


dobro = (a) => {
    return 2 * a
}


dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI));


let ola = function () 
{
    return 'Olá!'
}
ola = () => 'Olá!' // Forma padrão de 1 linha
ola = _ => 'Olá!' // Possui um paramentro
console.log(ola());
