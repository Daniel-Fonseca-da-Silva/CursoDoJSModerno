console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Raquete';
// obj1['nome'] = 'Raquete2'
console.log(obj1.nome);

function Obj(nome)
{
    this.nome = nome;
    this.exec = function()
    {
        console.log('Exec...');
    }
}

const obj2 = new Obj('Trenor')
const obj3 = new Obj('Rede de volei')
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();