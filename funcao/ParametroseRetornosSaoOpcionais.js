function area(largura, altura)
{
    const area = largura * altura
    if(area > 20)
    {
        console.log(`Valor cima do permitido: ${area}m2.`);
    }else
    {
        return area
    }
}

console.log(area(2, 2));
console.log(area(2));
console.log(area());
console.log(area(2, 3, 44, 57, 68, 712));
console.log(area(5, 5));
