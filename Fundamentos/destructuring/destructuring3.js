function rand({ min = 0, max = 1000 }){ // em vez de ficar chamando o objeto, ja vai estar pronto para usar direto a variável
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor); // arredonda valor para baixo
}
const obj = { max: 50, min: 40 };
console.log(rand(obj)); // vai gerar valores aleatórios entre 50 e 40
// console.log(rand({ max: 50, min: 40 })); // poderia ser usado dessa maneira
console.log(rand({min: 955})); // passando só o min
console.log(rand({})); // vai usar os valores padrões
// console.log(rand()); // vai dar erro, vai desestruturar algo que não existe