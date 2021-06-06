const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

// Object.entries(pessoa).forEach(e => {
//     console.log(`${e[0]}: ${e[1]}`)
// });

Object.entries(pessoa).forEach(([chave, valor]) => { // primeiro elemento é uma chave e o segundo é o valor ex: ['nome': 'Rebeca']
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // ao usar o object.keys ele permitira listar
    writable: false, // nao permite que seja reescrito o value
    value: '01/01/2021'
});

pessoa.dataNascimento = '01/01/2022';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign( dest, o1, o2 ); // ele concatena todos objetos, ou seja, obj vai receber todos objetos

Object.freeze(obj); // nao deixa alterar os valores
obj.c = 1234
console.log(obj)