import { CursosComponent } from './../cursos/cursos.component';
import { Component, OnInit } from '@angular/core';
import { CursosService } from "../curso/cursos.service"; 
import { RebercursoComponent } from '../rebercurso/rebercurso.component';
@Component({
  selector: 'app-criarcurso',
  templateUrl: './criarcurso.component.html',
  styleUrls: ['./criarcurso.component.css'],
  
})
export class CriarcursoComponent implements OnInit {

  constructor(private cursosService :CursosService ) { }
  cursos :string[];
  titulos :string[];
 

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
        this.titulos = this.cursosService.getTitulos();
        
    this.cursosService.emitirCurosCriado.subscribe(
       curso=>console.log(curso)
    );

  }
  OnSalva(curso : string){
     this.cursosService.AddCursos(curso);
  }
}
