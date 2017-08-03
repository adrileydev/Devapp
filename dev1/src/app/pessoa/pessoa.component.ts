import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from "app/Pessoa";

@Component({
  selector:    'vhs-pessoa',
  templateUrl: './pessoa.component.html'
})
export class PessoaComponent implements OnInit {
 @Input()student:Pessoa;
  constructor() { }
  ngOnInit() {
  }
}
