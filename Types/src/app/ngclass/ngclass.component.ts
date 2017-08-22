import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  meuFavorito: boolean = false;
  meuFavorito2: boolean = false;
  c : string;
  b : string;
  constructor() { }
  ngOnInit() {
  }
  onClick() {
    this.meuFavorito = !this.meuFavorito;

    if(this.meuFavorito){
        this.c = "Deu LIKE"
    }else{
       this.c = "Tirou o LIKE "
    }
  }
  onClick2() {
    this.meuFavorito2 = !this.meuFavorito2;

    if(this.meuFavorito2){
        this.b = "Deu LIKE"
    }else{
       this.b= "Tirou o LIKE "
    }
  }
}
