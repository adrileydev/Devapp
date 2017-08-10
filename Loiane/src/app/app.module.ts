import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from "./curso/cursos.service";
import { HeaderComponent } from './header/header.component';
import { NgclassComponent } from './ngclass/ngclass.component';
 
import { CustomComponent } from './custom/custom.component';
import { DiretivasDirective } from "./shared/diretivas.directive";
import { MouseDirective } from './shared/mouse.directive';
import { CriarcursoComponent } from './criarcurso/criarcurso.component';
import { LogService } from "./criarcurso/shared/log.service";



@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    HeaderComponent,
    NgclassComponent,
    DiretivasDirective,
    CustomComponent,
    MouseDirective,
    CriarcursoComponent
    
    
  ],
  imports: [
    BrowserModule 
  
  ],
  providers: [CursosService,LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
