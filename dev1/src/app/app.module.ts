import { BrowserModule }   from '@angular/platform-browser';
import { NgModule }        from '@angular/core';
import { FormsModule }     from '@angular/forms';
import { HttpModule }      from '@angular/http';
import { AppComponent }    from './app.component';
import { HeaderComponent } from './header/header.component';

import { PessoaComponent } from './pessoa/pessoa.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PessoaComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
