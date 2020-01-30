//Criar um programa que calcula a média
//das notas entre alunos e envia
//mensagem do calculo da média
// se a média for maior que 5, parabéns a turma.

const aluno01 = 'Gabriel'
const notaAluno01 = 1

const aluno02 = 'Gisely'
const notaAluno02 = 10

const aluno03 = 'Sara'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

if (media > 5) {
    console.log(`A nota foi de ${media} parabéns`)
} else {
    console.log(`a nota foi de ${media} você esta reprovado`)
}