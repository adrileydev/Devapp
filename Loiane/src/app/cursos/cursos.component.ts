import { CursosService } from './../curso/cursos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {
   nomePortal : string;
   valor      : number;
   total      : number;
   cursos   : string[]; 
   titulos  : any[]; 
   aba : string = 'home';
   constructor(private cursosService : CursosService) {
    this.nomePortal  = "Teste de Desenvolvimento com Angular...";
    this.valor = 67;
 
    
    
   }

 
 
   ngOnInit() {
  }

}
