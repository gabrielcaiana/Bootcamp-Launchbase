/*
Crie um programa para realizar operações bancárias na conta de um usuário.
Comece criando um objeto com o nome do usuário, suas transações e saldo.
As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).
*/

const user = {
    name: 'Gabriel',
    transactions: [],
    balance: 0
}

function createTransactions(type, value) {
    if (type === 'credit') {
        user.transactions.push({
            type: type,
            value: value
        })
        return (user.balance += value)
    } else if (type === 'debit') {
        user.transactions.push({
            type: type,
            value: value
        })
        return (user.balance -= value);
    }
}
createTransactions('credit', 124)
createTransactions('debit', 4)
console.log(user)