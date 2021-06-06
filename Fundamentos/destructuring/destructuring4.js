function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]; // vai fazer a verificação para ver qual é o mínimo
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor); // arredonda valor para baixo
}

console.log(rand([50, 40])); // enviando fora de ordem
console.log(rand([992])); // vai pegar como o valor mínimo
console.log(rand([,10])); // passando apenas o segundo valor
console.log(rand([])); // assumindo os valores default
// console.log(rand()); // vai resultar em erro