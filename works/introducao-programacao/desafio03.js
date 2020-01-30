const usuarios= [
    {nome: 'Gabriel', tecnologias: ['HTML','CSS']},
    {nome: 'Fulano', tecnologias: ['Python','PHP']},
    {nome: 'Ciclano', tecnologias: ['Java','React']}
]
Solução01
for(let i = 0; i < usuarios.length; i++) {
    console
    .log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(',')}`)
}

//Solução02
for(index in usuarios) {
    console.log(`${usuarios[index].nome} trabalha com ${usuarios[index].tecnologias.join(', ')}`)
}

function checarUsuarioUsaCSS(usuario) {
    for(index in usuarios) {
        console.log(index[i])
    }
}

//Desafio02 verificar se usuário trabalha com CSS

    function checarUsuarioUsaCSS(usuario) {
        for(index in usuarios) {
            if(usuario[index].tecnologias.join(', ').includes('CSS')){
            console.log(`${usuario[index].nome} trabalha com CSS`)
            }else {
            console.log(`${usuario[index].nome} não trabalha com CSS`)
            }
        }
    }

    checarUsuarioUsaCSS(usuarios)

// Desafio03 Soma de depesas e receitas
// crie um programa que calcula a soma de receitas e despesas de usuarios e no fim returna o saldo (receita - despesas)

