// let contaController = new ContaController();


// contaController.listar();


// const c1 = new Conta('1', 100);
// const p1 = new Poupanca('2', 100);
// const cb1 = new ContaBonificada('3', 0);

// console.log('Conta: ' + c1.saldo);

// p1.atualizarSaldoAniversario();
// console.log('Poupanca: ' + p1.saldo);

// cb1.creditar(100);
// console.log('Conta Bonificada: ' + cb1.saldo);


// CLIENTE

let clienteController = new ClienteController();
// clienteController.listar();

const clientes = new Clientes();

const cli1 = new Cliente("Val", "123456789", "8456");
const cli2 = new Cliente("Cris", "846517512", "1235");
const cli3 = new Cliente("Gustav", "986125", "10");

clientes.inserir(cli1);
clientes.inserir(cli2);
clientes.inserir(cli3);

const lista: Array<any> = clientes.listar();

function imprimir(lista: Array<any>): void {
    lista.forEach(elemento => {
        console.log(`Nome: ${elemento.nome}`)
        console.log(`CPF: ${elemento.cpf}`)
        console.log(`Conta: ${elemento.conta}`)
    })
}

imprimir(lista);

clientes.remover("06354854521");
imprimir(lista);

console.log(clientes.pesquisar("846517512"))


