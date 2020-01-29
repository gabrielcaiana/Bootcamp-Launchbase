//Definindo usuarios
const usuarios = [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]


  function calculaSaldo(receitas, despesas){
    const minhasReceitas = somaNumeros(receitas)
    const minhasDespesas = somaNumeros(despesas)
    const soma = minhasReceitas - minhasDespesas
    
    return soma
  }
  
  function somaNumeros(numeros){
    let value = 0
    
    for(index in numeros){
      value += numeros[index]
    }
    
    return value
  }
  
  for(index in usuarios){
    let { nome, receitas, despesas } = usuarios[index]
    const saldo = calculaSaldo(receitas, despesas).toFixed(2)
    const isPositivo = saldo > 0
    
    console.log(`${nome} possui saldo ${isPositivo ? 'POSITIVO' : 'NEGATIVO'} de ${saldo}`)
  }

  