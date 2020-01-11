const escola = "Cod3r"

console.log(escola.charAt(4)); // pega caractere
console.log(escola.charAt(5)); // Valor Nulo
console.log(escola.charCodeAt(3)); // Tabela ASC
console.log(escola.indexOf(3)); // Retorna o indice

console.log(escola.substring(1)); // Retonar a String do indice 1 até o final
console.log(escola.substring(0, 3)); // Retorna o indice 0 ao 3

console.log('Escola '.concat(escola).concat("!") + "fim");

console.log(escola.replace(3, 'e'));

console.log('Ana, Maria, Pedro'.split(','));