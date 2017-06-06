"use strict";
exports.__esModule = true;
var Funcionario = (function () {
    function Funcionario(Nome, Setor, Idade, Mat) {
        this.Nome = Nome;
        this.Setor = Setor;
        this.Idade = Idade;
        this.Mat = Mat;
    }
    Funcionario.prototype.MostraLog = function () {
        console.log("Usu\u00E1rio : " + this.Nome + " do Setor: " + this.Setor + " Com a idade : " + this.Idade);
    };
    Funcionario.prototype.MostraF = function () {
        var list = [4, 5, 6, 1, 22, 14, 155];
        for (var i in list) {
            console.log(i);
        }
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
