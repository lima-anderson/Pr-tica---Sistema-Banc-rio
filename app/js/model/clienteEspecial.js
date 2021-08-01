class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
    }
    getDependentes() {
        return this.dependentes;
    }
    adicionarDependente(dependente) {
        this.dependentes.push(dependente);
    }
    removerDependente(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.dependentes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.dependentes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this.dependentes.find(cliente => cliente.cpf === cpf);
    }
}
