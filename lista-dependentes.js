const cliente = {
  nome:"Denise",
  idade:20,
  cpf:"12543652234",
  email:"Denise@email.com",
  fones: [ '5591235498', '5521988743124' ],
  dependentes: [{
    nome:"Raquel Silva",
    parentesco:"filha",
    dataNasc:"22/08/2002"
  }]
}

cliente.dependentes.push({
  nome: 'Clara Maria',
  parentesco: 'filha',
  dataNasc: '04/01/2004'
})

// console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014")

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)