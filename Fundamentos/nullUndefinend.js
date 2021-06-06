let valor
console.log(valor);

valor = null; // ausencia de valor
console.log(valor);
//console.log(valor.toString()); // resulta em erro

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(produto);
// delete produto.preco

produto.preco = null; // sem preço
console.log(produto);