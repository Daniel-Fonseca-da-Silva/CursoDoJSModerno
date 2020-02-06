const nums = [1,2,3,4,5,6,7,8,9,10]

for(let x in nums)
{
    if(x == 5)
    {
        break // parada no 5
    }
    console.log(`${x} = ${nums[x]}`);
}

for(y in nums)
{
    if(y == 5)
    {
        continue // continua depois do 5
    }
    console.log(`${y} = ${nums[y]}`);
}

// Não usar!!! velho tempo go to ~.~
externo:
for(a in nums)
{
    for(b in nums)
    {
        if(a == 2 && b == 3)
        {
            break externo
        }
        console.log(`Par = ${a}, ${b}`);
    }
}
console.log('Fim!');
