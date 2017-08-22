import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from "./servicos/cursos.service";
import { HeaderComponent } from './header/header.component';
import { NgclassComponent } from './ngclass/ngclass.component';

import { CustomComponent } from './custom/custom.component';
import { DiretivasDirective } from "./shared/diretivas.directive";
import { MouseDirective } from './shared/mouse.directive';


import { CadcursoComponent } from './cadcurso/cadcurso.component';

import { UtilPipe } from './pipes/util.pipe';
import { ConfiguracaoService } from "./config/configuracao.service";



@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    HeaderComponent,
    NgclassComponent,
    DiretivasDirective,
    CustomComponent,
    MouseDirective,
    CadcursoComponent,
    UtilPipe


  ],
  imports: [
    BrowserModule

  ],
  providers: [CursosService,


            ],


  bootstrap: [AppComponent]
})
export class AppModule { }
