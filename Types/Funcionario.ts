class Funcionario {
    constructor(public Nome: string,
        public Setor: string,
        public Idade: number,
        public Mat: number) { }
    MostraLog() {
        console.log(`Usuário : ${this.Nome} do Setor: ${this.Setor} Com a idade : ${this.Idade}`)
    }
    MostraF() {
        let list = [4, 5, 6, 1, 22, 14, 155];
        for (let i in list) {
            console.log(i);
        }
    }
} 
  export{Funcionario} 