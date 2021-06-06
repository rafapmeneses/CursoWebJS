const escola = "cod3r";

console.log(escola.charAt(4)); // retorna o índice 4 da string escola;
console.log(escola.charAt(5)); // vai retornar nada, pois não há posição 5
console.log(escola.charCodeAt(3)); // pegou o índice 3 e retornou o código relacionado ao Unicode
console.log(escola.indexOf('3')); // retorna  o índice que tem o caractere 3
console.log(escola.substring(1)); // pega as letras depois da posição 1
console.log(escola.substring(0,3)); // pega as letras da posição 0 até 3; 

console.log('Escola ' .concat(escola).concat("!")); // concatenar string
console.log('Escola ' + (escola) + ("!")); // concatenar com +
console.log(escola.replace(3, 'e')); // troca a posição 3 pela letra e
console.log(escola.replace(/\d/, 'e')); // troca o primeiro número que achar por e
console.log(escola.replace(/\d/g, 'e')); // troca todos os números por e
console.log(escola.replace(/\w/g, 'e')); // troca todos as letras por e

console.log('Ana,Maria,Pedro'.split(',')); // cria um array separando as palavras pela ,