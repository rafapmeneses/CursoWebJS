const funcs = [];

for (let i = 0; i< 10; i++){
    funcs.push(function(){ // atribuindo uma função dentro das posições do array
        console.log(i);
    })
}

funcs[2](); // a função atribuída a funcs na posição 2 retornara 2
funcs[8](); // a função atribuída a funcs na posição 2 retornara 8