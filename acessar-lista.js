const cliente = {
  nome:"Denise",
  idade:20,
  cpf:"12543652234",
  email:"Denise@email.com"
}

const chaves = ["nome","idade","cpf","email"]

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["conta"])