"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Funcionario_1 = require("./Funcionario");
var Associados = (function (_super) {
    __extends(Associados, _super);
    function Associados() {
        return _super.call(this, "Patricia ", "Gerencia", 36, 2) || this;
    }
    Associados.prototype.MostraF = function () {
        var list = [1, 2];
        for (var i in list) {
            console.log(i);
        }
    };
    return Associados;
}(Funcionario_1.Funcionario));
var funcionario = new Funcionario_1.Funcionario("adriley", "1-Desenvolvimento", 18, 1);
funcionario.MostraLog();
funcionario.MostraF();
var associados = new Associados();
associados.MostraLog();
associados.MostraF();
