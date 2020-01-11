const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[3]);
console.log(valores[4]); 

valores[4] = 10
console.log(valores);
console.log(valores.length); // length -> Exibe tamanho do array

valores.push({id: 3}, false, null, 'teste'); // push -> adiciona itens ao array
console.log(valores);

console.log(valores.pop()); // pop -> retira do array

delete valores[0] // delete -> deleta valor do array
console.log(valores);

console.log(typeof valores); // typeof -> informa o tipo


