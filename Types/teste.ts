class Pessoa{
     constructor(public Nome : string,Idade : number){ }
     mostraIdade(){
         console.log(`${this.Nome} Sua Idade Please  !`);
        }
    } 
let pessoa = new Pessoa("Adriey Francisco Almeida Pereira  ",40);
console.log(pessoa.Nome);
pessoa.mostraIdade();
