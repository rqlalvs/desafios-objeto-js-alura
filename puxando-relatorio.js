const cliente = {
  nome: "Denise",
  idade: 20,
  cpf: "12543652234",
  email: "Denise@email.com",
  fones: ["4564564566", "45645654644"],
  dependentes: [
    {
      nome: "Raquel Silva",
      parentesco: "filha",
      dataNasc: "22/08/2002",
    },
    {
      nome: "Clara Maria",
      parentesco: "filha",
      dataNasc: "04/01/2004",
    },
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

let relatorio="";

for ( let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    }else{
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }    
}
console.log(relatorio)