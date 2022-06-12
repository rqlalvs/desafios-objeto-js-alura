const cliente = {
  nome:"Denise",
  idade:20,
  cpf:"12543652234",
  email:"Denise@email.com",
  fones:["5591235498","5521988743124"]
}

cliente.dependentes = {
    nome:"Raquel Silva",
    parentesco:"filha",
    dataNasc:"22/08/2002"
}

console.log(cliente)

cliente.dependentes.nome = "Raquel Silva"

console.log(cliente)