class ClienteEspecial extends Cliente {

    private dependentes: Array<Cliente>;
    
    constructor(nome: string, cpf: string, conta: string) {
        super(nome, cpf, conta);
    }

    getDependentes(): Array<Cliente> {
        return this.dependentes;
    }

    adicionarDependente(dependente: Cliente): void {
        this.dependentes.push(dependente);
    }


    removerDependente (cpf: string): void {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.dependentes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.dependentes.splice(indiceCliente, 1);
            }
        }
    }

    pesquisar(cpf: string): Cliente {
        return this.dependentes.find(
            cliente => cliente.cpf === cpf
        );
    }
}