const clientes = [
  {
    nome: "Denise",
    cpf: "12312312312",
    dependentes: [{
      nome: "Raquel",
      parentesco: "filha",
      dataNasc: "22/08/2002"
     },
     {
      nome: "Joao",
      parentesco: "filho",
      dataNasc: "10/01/2005"
     }],
  },
  {
    nome: "Raquel",
    cpf: "124412345124",
    dependentes: [{
      nome: "Belinha",
      parentesco: "Pet",
      dataNasc: "01/01/2006"
     }],
  } 
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)