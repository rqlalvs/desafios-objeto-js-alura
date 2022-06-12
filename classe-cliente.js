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

const Raquel = new Cliente("Raquel","Raquel@email.com","96695475465",100)

andre.exibirSaldo()

console.log(Raquel)