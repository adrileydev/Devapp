
import { Injectable, EventEmitter } from '@angular/core';
import { Cursos } from '../Ccurso';
@Injectable()
export class CursosService {
  private cursos: Array<Cursos>;
  private titulos: any[];
  emitirCurosCriado = new EventEmitter<string>();
  constructor() {
    this.cursos = [
      new Cursos('moda', 1.55, 'Chdesck', new Date(2016, 5, 23)),
      new Cursos('desenvolvimento', 5.55, '123456', new Date(2016, 5, 12)),
      new Cursos('banco de dados', 55.55, 'Chdesck', new Date(2016, 5, 11) ),
      new Cursos('asp.net', 558.66, 'deskasp', new Date(2016, 5, 6)),
      new Cursos('SISTEMAS ', 223.66, 'SEM DESCONTO', new Date(2016, 5, 3)),
      new Cursos('SISTEMAS ', 151158.66, 'SEM DESCONTO', new Date(2016, 5, 3)),
      new Cursos('SISTEMAS ', 22.66, 'SEM DESCONTO', new Date(2016, 5, 3)),
      new Cursos('SISTEMAS ', 312.66, 'SEM DESCONTO', new Date(2016, 5, 3)),


    ];
  }
  getCursos() {
    return this.cursos;
  }

  AddCursos(curso: Cursos) {
    this.cursos.push(curso);
    this.emitirCurosCriado.emit(curso.Nome);
  }
  addTitulos(titulo: string) {
    this.titulos.push(titulo);
    this.emitirCurosCriado.emit(titulo);
  }

}
