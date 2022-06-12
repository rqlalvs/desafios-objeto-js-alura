function Cliente(nome,cpf,email,saldo){
  this.nome =nome
  this.cpf=cpf
  this.email =email
  this.saldo=saldo
  this.depositar = function(valor){
      this.saldo += valor
  }
}

const Raquel = new Cliente("Raquel","Raquel@email.com","96695475465",100)

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup)
{
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const Camila = new Cliente("Camila","Camila@email.com","66955444589",100,200)

console.log(Camila)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

Camila.depositarPoup(30)

console.log(Raquel.saldoPoup)
console.log(Camila.saldoPoup)