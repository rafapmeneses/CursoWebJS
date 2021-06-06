const nome = 'Rebeca';
const concatenacao = 'Olá' + nome + '!';
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template);

//expressoes
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase(); // função que transforma a string para letra maiúscula 

console.log(`Ei .. ${up('cuidado')}!`);