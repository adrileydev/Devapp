import { Pessoa } from './Pessoa';
import { Component } from '@angular/core';
import { Config } from './config';
import { Video } from './video';

import { VideoListComponent } from "app/video-list/video-list.component";

@Component({
  selector: 'vhs-root',
  templateUrl: './app.component.html'
 
  //directives: [VideoListComponent]
})
 
export class AppComponent {
  title = Config.TITLE_PAGE; 
  videos: Array<Video>; 
  Np = "Nome da Pessoa"; 
  Pessoas:any[];
  
  constructor() {
    this.videos = [
        new Video(1, "Test", "www.test.com", "Test Description"), 
        new Video(2, "Test 2", "www.test2.com"), 
        new Video(2, "Test 2", "www.test2.com"),
        new Video(3, "Test 2", "www.test2.com")    ]
    this.Pessoas = [
        new Pessoa("Adriley Francisco Almeida Pereira ",40,"3676777"),
        new Pessoa("Patricia Siqueira Pereira",36,"367"),
        new Pessoa("Ana Luiza  Siqueira Pereira",11,"35"),
        new Pessoa("Victor Hugo Siqueira Pereira",12,"7")
    ]
  } 
}
