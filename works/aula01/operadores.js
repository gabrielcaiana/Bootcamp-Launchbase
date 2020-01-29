//Desafio 01
//Verificar se a pessoa é maior ou igual a 18
//se sim, deixar entrar, se não bloquear entrada
//se a pessoa tiver 17
const idade = 18

if (!(idade >= 18) || idade === 17) {
    console.log('Bloquear Entrada')
} else {
    console.log('Liberar Entrada')
}

//OPERADORES LOGICOS

// console.log(5 == 5 && 6 == 6) //true
// console.log(5 == 5 && 6 != 6) // false

// console.log(5 != 5 || 6 == 6) //true
// console.log(5 == 5 || 6 != 6) // true

// console.log(!(5 > 6))
// console.log(!(5 < 6))