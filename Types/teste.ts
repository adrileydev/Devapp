import { Funcionario } from './Funcionario';
class Associados extends Funcionario {
    constructor() {
        super("Patricia ", "Gerencia", 36, 2);
    }
    MostraF() {
        let list = [1, 2];
        for (let i in list) {
            console.log(i);
        }
    }
}
let funcionario = new Funcionario("adriley","1-Desenvolvimento", 18, 1);
funcionario.MostraLog();
funcionario.MostraF();
let associados = new Associados();
associados.MostraLog();
associados.MostraF();
