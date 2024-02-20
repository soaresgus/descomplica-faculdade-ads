function exibirErro(erro) {
    alert('Um erro inesperado ocorreu: ' + erro.message);
}

class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        try {
            if (!this.nome) {
                throw new Error('O nome do funcionário não pode ser vazio.');
            }

            alert(`Olá, meu nome é ${this.nome}`);
        } catch (erro) {
            exibirErro(erro);
        }
    }

    trabalhar() {
        try {
            if (!this.nome) {
                throw new Error('O nome do funcionário não pode ser vazio.');
            }

            alert(`${this.nome} está trabalhando...`);
        } catch (erro) {
            exibirErro(erro);
        }
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        try {
            if (!this.nome) {
                throw new Error('O nome do gerente não pode ser vazio.');
            }

            if (!this.departamento) {
                throw new Error('O departamento do gerente não pode ser vazio.');
            }

            alert(
                `O gerente ${this.nome} está gerenciando o departamento ${this.departamento}...`
            );
        } catch (erro) {
            exibirErro(erro);
        }
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        try {
            if (!this.nome) {
                throw new Error('O nome do desenvolvedor não pode ser vazio.');
            }

            if (!this.linguagem) {
                throw new Error('A linguagem do desenvolvedor não pode ser vazia.');
            }

            alert(
                `${this.nome} está programando usando a linguagem ${this.linguagem}...`
            );
        } catch (erro) {
            exibirErro(erro);
        }
    }
}

let funcionario;

function enviar() {
    const nome = document.querySelector('#nome').value;
    const idade = document.querySelector('#idade').value;
    const cargo = document.querySelector('#cargo').value;
    const resultado = document.querySelector('#resultado');
    const gerenteResultado = document.querySelectorAll('.gerente');
    const desenvolvedorResultado = document.querySelectorAll('.desenvolvedor');

    resultado.classList.remove('invisivel');
    resultado.classList.add('visivel');

    desenvolvedorResultado.forEach(item => item.classList.remove('visivel'));
    desenvolvedorResultado.forEach(item => item.classList.add('invisivel'));

    gerenteResultado.forEach(item => item.classList.remove('visivel'));
    gerenteResultado.forEach(item => item.classList.add('invisivel'));

    document.querySelector("#nome-resultado").textContent = nome;
    document.querySelector("#idade-resultado").textContent = idade;
    document.querySelector("#cargo-resultado").textContent = cargo;

    if (cargo === 'desenvolvedor') {
        const linguagem = prompt('Informe a linguagem de programação');
        const linguagemResultado = document.querySelector('#linguagem-resultado');
        linguagemResultado.textContent = linguagem;

        funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);

        desenvolvedorResultado.forEach(item => item.classList.remove('invisivel'));
        desenvolvedorResultado.forEach(item => item.classList.add('visivel'));
    }

    if (cargo === 'gerente') {
        const departamento = prompt('Informe o departamento');
        const departamentoResultado = document.querySelector('#departamento-resultado');
        departamentoResultado.textContent = departamento;

        funcionario = new Gerente(nome, idade, cargo, departamento);

        gerenteResultado.forEach(item => item.classList.remove('invisivel'));
        gerenteResultado.forEach(item => item.classList.add('visivel'));
    }
}

function apresentar() {
    funcionario.seApresentar();
}

function trabalhar() {
    funcionario.trabalhar();
}

function gerenciar() {
    funcionario.gerenciar();
}

function programar() {
    funcionario.programar();
}

