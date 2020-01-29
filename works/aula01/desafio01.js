//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
const nome = 'Gabriel'
const peso = 93.5
const altura = 1.85

const imc = peso / (altura * altura)

// console.log(imc)

// if (imc >= 30 || !(imc < 29.9)) {
//     console.log('Você está acima do peso')
// } else {
//     console.log('Você não está acima do peso')
// }

//Crie um programa para calcular a aposentadoria de uma pessoa.
const usuario01 = {
    nome: 'Gabriel',
    idade: 60,
    contribuicao: 35,
    sexo: 'm'
}

if (usuario01.sexo == 'm') {
    if ((usuario01.idade + usuario01.contribuicao) >= 95 && usuario01.contribuicao >= 35) {
        console.log(`${usuario01.nome} pode se aposentar`)
    } else {
        console.log(`${usuario01.nome} ainda está muito novo`)
    }
}