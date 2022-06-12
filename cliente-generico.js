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

console.log(Raquel)