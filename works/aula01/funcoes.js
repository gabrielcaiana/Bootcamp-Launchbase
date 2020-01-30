const alunosA = [{
        nome: 'Gabriel',
        nota: 4.9
    },
    {
        nome: 'Gisely',
        nota: 10
    },
    {
        nome: 'Sara',
        nota: 8.5
    },
    {
        nome: 'João',
        nota: 10
    },
]

const alunosB = [{
        nome: 'Antonio',
        nota: 6.9
    },
    {
        nome: 'Lucineia',
        nota: 10
    },
    {
        nome: 'Polly',
        nota: 10
    }, {
        nome: 'Fulano',
        nota: 2
    }
]

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
}

const mediaAlunosA = calculaMedia(alunosA)
const mediaAlunosB = calculaMedia(alunosB)

function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}, Parabéns`)
    } else {
        console.log(`A média da ${turma} foi de ${media}, infelizmente você não passou`)
    }
}

function marcarComoReprovado(aluno) {
    aluno.reprovado = false
    if (aluno.nota < 5) {
        aluno.reprovado = true
    }
}

function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} está reprovado!`)
    }
}

function alunosReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
}

enviaMensagem(mediaAlunosA, 'TurmaA')
enviaMensagem(mediaAlunosB, 'TurmaB')

alunosReprovado(alunosA)
alunosReprovado(alunosB)