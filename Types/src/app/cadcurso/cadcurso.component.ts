import { Component, OnInit } from '@angular/core';
import { CursosService } from '../servicos/cursos.service';
import { Cursos } from '../Ccurso';
import {Observable} from 'rxjs/RX';

@Component({
  selector: 'app-cadcurso',
  templateUrl: './cadcurso.component.html'
})
export class CadcursoComponent implements OnInit {
  cursos: any[];
  titulos: any[];
  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.getCursos();
  }
  ngOnInit() {
  }

  ValorAsync = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('VALOR ASSINCRONO TESTE'), 3000);
  });

  ValorObservable=Observable.interval(2000).map(valor=>'Assinc com Observable');
}

