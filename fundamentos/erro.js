function tratarErroLancar(erro)
{
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'Aconteceu um erro'
    // throw significa lançar
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj)
{
    try
    {
        console.log(obj.name.toUpperCase() + '!!!');
    } 
    catch(e)
    {
        tratarErroLancar(e)
    }
    /* Obs; finally sempre vai ser executado
     independente se acontecer erro ou não. 
     */
    finally
    {
        console.log('Programa terminado');
    }
}
// erro aqui não é nome é name
const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
