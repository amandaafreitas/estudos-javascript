//classes são moldes
//estrutura da classe

class Cliente {
  nome; //atributos
  cpf;
  agencia;
  saldo;
  rg;
}

// cria um objeto a partir do molde, a classe(cria uma instancia da classe)
const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = "11122233309";
cliente1.agencia = "1001";
cliente1.saldo = 0;
cliente1.rg = "123456789";

cliente2.nome = "Alice";
cliente2.cpf = "88822233309";
cliente2.agencia = "1001";
cliente2.saldo = 0;

console.log(cliente1, cliente2);
