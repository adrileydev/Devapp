import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  constructor() { }
  getCursos() {
    return ["Adriley", "Patricia", "Ana Luiza", "Victor Hugo"];
  }
  getTitulo() {
    return ["DESENVOLVIMENTO", "TESTE", "VALIDAÇÃO", "GERENCIA"];
  }
}
