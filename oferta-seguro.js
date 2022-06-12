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

function oferecerSeguro(obj) {
  const propsClientes = Object.keys(obj);
  if (propsClientes.includes("dependentes")) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`);
  }
}
console.log(Object.values(cliente));
console.log(Object.entries(cliente));
oferecerSeguro(cliente);
