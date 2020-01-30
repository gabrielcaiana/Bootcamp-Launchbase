/*
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

Nome: Rocketseat
Cor: Roxo
Foco: Programação
Endereço:
Rua: Rua Guilherme Gembala
Número: 260
*/

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereço: {
        rua: 'Rua Guilherme Gembala',
        número: 260
    }
}
console.log(`A empresa ${empresa.nome} está localizada na ${empresa.endereço.rua}, ${empresa.endereço.número}`)

/*
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:
*/
const programador = {
    nome: 'Gabriel',
    idade: 23,
    tecnologias: [
        { nome: 'Javascript', especialidade: 'Web/Mobile' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'React Native', especialidade: 'Mobile' }
    ]
}
console.log(`O usuário ${programador.nome}, tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)