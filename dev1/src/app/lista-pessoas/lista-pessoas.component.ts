import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from "app/Pessoa";
@Component({
  selector: 'vhs-lista-pessoas',
  templateUrl: './lista-pessoas.component.html' 
})
export class ListaPessoasComponent implements OnInit {
 @Input() Pessoas;

   Mostrar(P: Pessoa) {
    console.log(JSON.stringify(P));
  }
  constructor() { }
  ngOnInit() {
  }
}
