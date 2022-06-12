class Cliente {
  constructor(nome,email,cpf,saldo){
   this.nome = nome
   this.email = email
   this.cpf = cpf
   this.saldo = saldo
  }

  depositar(valor){
      this.saldo += valor
  }

  exibirSaldo(){
      console.log(this.saldo)
  }
}

class ClientePoupanca extends Cliente{
  constructor(nome,email,cpf,saldo,saldoPoupanca){
    super(nome,email,cpf,saldo)
    this.saldoPoupanca = saldoPoupanca
  }

  depositarPoupanca(valor){
    this.saldoPoupanca += valor
  }
}

const Raquel = new Cliente("Raquel","Raquel@email.com","96695475465",100,200)

console.log(Raquel)

Raquel.depositar(50)
Raquel.depositarPoupanca(50)

console.log(Raquel)