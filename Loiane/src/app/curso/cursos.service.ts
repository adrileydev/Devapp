 
import { Injectable,EventEmitter } from '@angular/core';
import { LogService } from "../criarcurso/shared/log.service";

@Injectable()
export class CursosService {
 
  emitirCurosCriado  = new EventEmitter<string>();
  constructor(private logService : LogService) { }
  private cursos:string[]=["Adriley", "Patricia", "Ana Luiza", "Victor Hugo"];
  

  getCursos() {
    this.logService.consolog("Buscando mesagem do serviço");
    return this.cursos ;
  
  }
  getTitulos(){
     this.logService.consolog("Buscando mesagem do serviço 2 "); 
  return this.logService.retorna();
 
  }

  AddCursos(curso : string){
    this.logService.consolog(`Cadastrando um novo  curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCurosCriado.emit(curso);

  }
}
