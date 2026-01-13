var idade = 40
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log(`Não pode votar`)
} else {
    if (idade < 18 || idade > 67) {
        console.log(`O voto é opcional`)
    } else {
        console.log(`O voto é obrigátorio`)
    }
}