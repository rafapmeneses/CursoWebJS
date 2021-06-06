// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa -> 456 -> {...}
pessoa = { nome: 'Ana' }

Object.freeze(pessoa); // não permite que seja alterado os dados do objeto depois do freeze

pessoa.nome = 'Maria';
pessoa.end = 'Rua abc';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Joao'});
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);