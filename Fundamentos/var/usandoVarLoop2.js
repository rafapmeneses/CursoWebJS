const funcs = [];

for (var i = 0; i< 10; i++){
    funcs.push(function(){ // atribuindo uma função dentro das posições do array
        console.log(i);
    })
}

funcs[2](); // a função atribuída a funcs na posição 2 retornara 10 pois o var é de escopo global
funcs[8](); // mesma coisa nesta chamada