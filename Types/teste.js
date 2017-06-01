var Pessoa = (function () {
    function Pessoa(Nome) {
        this.Nome = Nome;
    }
    Pessoa.prototype.mostraIdade = function () {
        console.log(this.Nome + " Sua Idade Please  !");
    };
    return Pessoa;
}());
var pessoa = new Pessoa("Adriey Francisco Almeida Pereira  ");
console.log(pessoa.Nome);
pessoa.mostraIdade();
