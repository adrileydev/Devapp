import { IPessoa } from './Ipessoa';
 
import { Pessoa } from './Pessoa';
import { Component, OnInit } from '@angular/core';
import { Config } from './config';
 
@Component({
  selector:    'vhs-root',
  templateUrl: './app.component.html' 
  //directives: [VideoListComponent]
}) 
export class AppComponent implements OnInit {
  PageTitulo = Config.TITLE_PAGE;  
  students :any[]; 

  constructor(){ 
 this.students =[
        new Pessoa("Adriley     Francisco Almeida Pereira",40,"3676777",true),
        new Pessoa("Patricia    Siqueira Pereira",36,"3331112",true),
        new Pessoa("Ana Luiza   Siqueira Pereira",11,"3223335",false),
        new Pessoa("Victor Hugo Siqueira Pereira",12,"555557",true)
   ] 
    
  } 
  ngOnInit()  {
     
  }
    
}
