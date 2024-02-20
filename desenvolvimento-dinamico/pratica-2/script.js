class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }

  trabalhar() {
    console.log(`${this.nome} está trabalhando...`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    alert(
      `O gerente ${this.nome} está gerenciando o departamento ${this.departamento}...`
    );
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    alert(
      `${this.nome} está programando usando a linguagem ${this.linguagem}...`
    );
  }
}

const funcionario = new Funcionario(
  'Augusto Silva',
  27,
  'Auxiliar de escritório'
);
funcionario.seApresentar();
funcionario.trabalhar();

const gerente = new Gerente('Cléber Souza', 36, 'Gerente', 'TI');
gerente.seApresentar();
gerente.gerenciar();

const desenvolvedor = new Desenvolvedor(
  'Marcos Paulo',
  26,
  'Desenvolvedor',
  'Java'
);
desenvolvedor.seApresentar();
desenvolvedor.programar();
