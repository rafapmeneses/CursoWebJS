const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // desestruturação -> retirar nome e idade de dentro de pessoa
console.log(nome, idade); // para usar no resto do programa

const { nome: n, idade: i } = pessoa // desestruturação -> atribuindo variável aos valores retirados
console.log(n, i); // para usar no resto do programa

const { sobrenome, bemHumorada = true } = pessoa // desestruturação -> com valores inexistentes
console.log(sobrenome, bemHumorada); 

const { endereco: { logradouro, numero, cep }} = pessoa 
console.log(logradouro, numero, cep); 

const { endereco } = pessoa 
console.log(endereco); 

// const { conta: { ag, numero,}} = pessoa // nao irá funcionar, pois o objeto não existe dentro do objeto pessoa
// console.log(ag, numero); 