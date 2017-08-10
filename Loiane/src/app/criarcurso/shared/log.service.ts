import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }
  private titulo:string[]=["DESENVOLVIMENTO", "TESTE", "VALIDAÇÃO", "GERENCIA"];
  consolog(msg : string){
    console.log(msg);

  }
    retorna() {
    return this.titulo;
  }


}
