import { CursosService } from './../servicos/cursos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html' 
})

export class CursosComponent implements OnInit {
   
   cursos   : string[]; 
   titulos  : any[]; 
   aba : string = 'home';
   constructor(private cursosService : CursosService) { 
   } 
 
   ngOnInit() {
  }

}
