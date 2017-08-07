import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

 
  constructor() { }
  getCursos(){
     return ["adriley","Patricia","ana luiza","HUGO"];
}
}
