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


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    HeaderComponent,
    NgclassComponent,
    DiretivasDirective,
    CustomComponent,
    MouseDirective
  ],
  imports: [
    BrowserModule 
  
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
