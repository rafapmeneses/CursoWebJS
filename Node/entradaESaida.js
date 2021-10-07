const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo){
    process.stdout.write('fala anonimo!\r\n')
    process.exit()
} else{
    process.stdout.write('Digite o nome: ')
    process.stdin.on('data', data =>{
        const nome = data.toString().replace('\r\n', '')

        process.stdout.write(`Fala ${nome}!!\r\n`)
        process.exit()
    })
}
