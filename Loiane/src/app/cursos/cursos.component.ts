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
   cursos     : string[];

  
   constructor(private cursosService : CursosService) {
    this.nomePortal  = "Teste de Desenvolvimento com Angular...";
    this.valor = 67;
   // this.total = this.Cursos.length;
   //var Cursos = new CursosService();
   this.cursos = this.cursosService.getCursos();

   }

   clicar(p){
      console.log(JSON.stringify(p));
   }

  ngOnInit() {
  }

}
