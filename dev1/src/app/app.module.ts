import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
 
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { DetalheComponent } from './detalhe/detalhe.component';
 
@NgModule({
  declarations: [
    AppComponent, 
    VideoListComponent, 
    ListaPessoasComponent, DetalheComponent
 
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
