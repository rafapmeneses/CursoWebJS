const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('break: ');
for (x in nums){
    if( x == 5) {
        break; // break age em cima do bloco mais próximo dele (no caso é o FOR)
    }
    console.log(`iteração: ${x} = ${nums[x]}`);
}
console.log('continue: ');
for (y in nums){
    if( y == 5) {
        continue; // ele interrompe a execução atual, e continua para a próxima iteração do laço
    }
    console.log(`iteração: ${y} = ${nums[y]}`);
}

externo: for(a in nums){ // não utilizar
    for(b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`);
    }
}

console.log('Fim');