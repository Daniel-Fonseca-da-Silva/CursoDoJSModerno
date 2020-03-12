// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1() 
{

}

// Armazena uma função em uma variavel
const fun2 = function() { }

// Armazenar dentro de um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](3,3));

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Epa!' }
console.log(obj.falar());

// Passar função como parametro
function run(fun)
{
    fun()
}

run(function () { console.log('Execuntado...'); })


// Uma função pode retorna ou conter outra função
function soma(a, b)
{
    return function(c)
    {
        console.log(a + b + c);
    }
}

soma(5, 5)(10);

const cincoMais = soma(5,5)
cincoMais(4)