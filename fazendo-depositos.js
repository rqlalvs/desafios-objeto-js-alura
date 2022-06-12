const cliente = {
  nome:"Denise",
  idade:20,
  cpf:"12543652234",
  email:"Denise@email.com",
  fones: [ '5591235498', '5521988743124' ],
  dependentes: [
    {
      nome:"Raquel Silva",
    parentesco:"filha",
    dataNasc:"22/08/2002" },
    {
      nome: 'Clara Maria',
      parentesco: 'filha',
      dataNasc: '04/01/2004'
    }
  ],
  saldo:100,
  depositar:function(valor){
    this.saldo += valor
  }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)